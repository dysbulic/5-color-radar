import * as yaml from 'js-yaml'
import { useEffect, useState } from 'react'
import {
  Flex, Stack, Box, Spinner, Button, ButtonGroup
} from '@chakra-ui/react'
import {
  ArrowBackIcon, ArrowForwardIcon, ArrowUpIcon, ArrowDownIcon
} from '@chakra-ui/icons'
import { useParams } from 'react-router'
import Chart from './Chart'
import Results from './Results'
import './Statements.scss'

const source = (
  'https://raw.githubusercontent.com/Jerdle-code/color-pie-test/main/readable_questions.txt'
)
const colors = {
  W: 'white', U: 'blue', R: 'red', B: 'black', G: 'green'
}
const attrs = {
  W: 'Justice', U: 'Wisdom', R: 'Chaos', B: 'Ambition', G: 'Balance'
}

const defZero = {
  get: (target, name) => (
    name in target ? target[name] : 0
  )
}

const storageMap = {
  0: -2, 1: -1, 2: 0, 3: 1, 4: 2, 5: null, 6: undefined
}

export default ({ history }) => {
  const [statements, setStatements] = useState()
  const [maxes, setMaxes] = useState()
  const [index, setIndex] = useState(0)
  const [showing, setShowing] = useState(true)
  const { answers = '' } = useParams()
  const load = async () => {
    const res = await fetch(source)
    const statements = yaml.load(await res.text())
    console.info(answers)
    answers.split('').forEach((char, idx) => {
      statements[idx].response = storageMap[parseInt(char, 36)]
    })
    setIndex(Math.min(
      /6/.test(answers) ? answers.indexOf('6') : answers.length, // '6' === undefined
      statements.length
    ))
    setStatements(statements)
    const maxes = new Proxy({}, defZero)
    statements.forEach((s) => {
      maxes[s.low] += 2
      maxes[s.high] += 2
    })
    setMaxes(maxes)
  }
  const answer = (res) => {
    setStatements((statements) => {
      const change = [...statements]
      change[index].response = res
      const stored = (
        change.map((s) => (
          Object.entries(storageMap).find(([key, val]) => val === s.response)[0]
        ))
        .join('')
        .replace(/6+$/g, '')
      )
      history.push(stored)
      return change
    })
    setIndex(index + 1)
  }
  useEffect(() => load(), [])

  if(!statements) {
    return (
      <Stack align='center' pt={10}>
        <Box>Loading Statements…</Box>
        <Spinner/>
      </Stack>
    )
  }

  if(!maxes) {
    return (
      <Stack align='center' pt={10}>
        <Box>Processing Statements…</Box>
        <Spinner/>
      </Stack>
    )
  }

  const current = new Proxy({}, defZero)
  statements.forEach(q => {
    if(q.response !== undefined) {
      if(q.response < 0) {
        current[q.low] += Math.abs(q.response)
      } else if(q.response > 0) {
        current[q.high] += Math.abs(q.response)
      } else if(q.response === null) {
        // do nothing for "don't care"
      } else if(q.response === 0) {
        current[q.low] += 1
        current[q.high] += 1
      }
    }
  })
  const normalized = {}
  Object.keys(colors).forEach(k => normalized[k] = (current[k] ?? 0) / maxes[k])

  return (
    <Stack className={!showing && 'imageOnly'}>
      <Flex as='nav' key='head'>
        {statements.map((q, i) => (
          <span key={i}
            className={[
              index === i ? 'current' : null,
              q.response !== undefined ? 'done' : 'unanswered',
              `${q.low}${q.high}`,
              q.response !== undefined ? `res${q.response}` : null,
            ].join(' ')}
            title={`Question #${i + 1}: ${statements[i].question}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </Flex>
      <Box id='statements'>
        <Flex justify='center' align='center' flexDir='column'>
          <Box maxW={['10rem', '40rem']} minH='3rem'>
            {statements[index] && <q>{statements[index]?.question}</q>}
          </Box>
          {statements[index] &&
            <Stack pt={5}>
              <Box id='colors'
                className={`${statements[index].low}${statements[index].high}`}
              ></Box>
              <Stack direction={['column', 'row']}>
                <Button
                  isActive={statements[index].response === -2}
                  colorScheme='red'
                  onClick={() => answer(-2)}
                >Strongly Disagree</Button>
                <Button
                  isActive={statements[index].response === -1}
                  colorScheme='pink'
                  onClick={() => answer(-1)}
                >Disagree</Button>
                <Button
                  isActive={statements[index].response === 0}
                  colorScheme='blue'
                  onClick={() => answer(0)}
                >Ambivalent</Button>
                <Button
                  isActive={statements[index].response === 1}
                  colorScheme='teal'
                  onClick={() => answer(1)}
                >Agree</Button>
                <Button
                  isActive={statements[index].response === 2}
                  colorScheme='green'
                  onClick={() => answer(2)}
                >Strongly Agree</Button>
              </Stack>
            </Stack>
          }
          {index < statements.length
            ? (
              <ButtonGroup pt={5}>
                <Button
                  isDisabled={index === 0}
                  colorScheme='purple'
                  leftIcon={<ArrowBackIcon/>}
                  onClick={() => setIndex(index - 1)}
                >Back</Button>
                <Button
                  index={index}
                  isDisabled={index >= statements.length}
                  colorScheme='purple'
                  rightIcon={<ArrowForwardIcon/>}
                  onClick={() => answer(null)}
                >No Opinion</Button>
              </ButtonGroup>
            ) : (
              <Results {...{ current }}/>
            )
          }
        </Flex>
      </Box>
      <Button id='qVis'
        title={`${showing ? 'Hide' : 'Show'} Questions`}
        maxH='1rem'
        minW='50%'
        margin='auto'
        onClick={() => setShowing(s => !s)}
      >{showing ? <ArrowUpIcon/> : <ArrowDownIcon/>}</Button>
      <Chart key='chart' {...{ colors, attrs, scores: normalized }}/>
    </Stack>
  )
}