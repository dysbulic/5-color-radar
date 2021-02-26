import { connect } from 'react-redux'
import { useEffect, useState, useCallback } from 'react'
import {
  Flex, Stack, VStack, Box, Spinner, Button, ButtonGroup, Text,
} from '@chakra-ui/react'
import {
  ArrowBackIcon, ArrowForwardIcon, ArrowUpIcon, ArrowDownIcon,
} from '@chakra-ui/icons'
import { useParams } from 'react-router'
import { useLocation } from 'react-router-dom'
import Chart from '../Chart'
import Results from '../Results'
import { BigInt, atob, btoa, defZero } from '../util'
import ments from '../data/statements'
import { colors as order } from '../data/order'
import './index.scss'
import { setWeights } from '../Reducer'

// mapping of responses to an octal-representable number
const storageMap = {
  0: undefined, 1: -2, 2: -1, 3: 0, 4: 1, 5: 2, 6: null,
}

const Test = ({ history }) => {
  const [statements, setStatements] = useState(ments)
  const [maxes, setMaxes] = useState()
  const [index, setIndex] = useState(0)
  const [showing, setShowing] = useState(true)
  const { answers = '' } = useParams()
  const load = () => {
    let max, idx = 0
    for(
      let packed = atob(answers),
      num = packed.toString(2).length,
      off = (Math.ceil(num / 3) - 1) * 3;
      packed > 0 && idx < statements.length;
      idx++, off -= 3
    ) {
      let bits = (packed & (BigInt(0b111) << BigInt(off))) >> BigInt(off)
      const stored = parseInt(bits)
      const res = storageMap[stored]
      statements[idx].response = res
      if(max === undefined && res === undefined) {
        max = idx
      }
    }
    setIndex(max ?? idx)
    setStatements(statements)
    const maxes = new Proxy({}, defZero)
    statements.forEach((s) => {
      maxes[s.low] += 2
      maxes[s.high] += 2
    })
    setMaxes(maxes)
  }

  useEffect(load, [])

  const location = useLocation()
  const answer = (res) => {
    const change = [...statements]
    change[index].response = res
    let storage = 0n
    change.forEach((s) => {
      const res = (
        Object.entries(storageMap).find(
          ([_, val]) => val === s.response
        )?.[0]
      )
      storage = (storage << 3n) | BigInt(res)
    })
    const path = (
      location.pathname.replace(/(\/[^/]+)\/?.*/, '$1')
    )
    try {
      history.push(`${path}/${btoa(storage)}`)
    } catch(err) { /* duplicate */ }
    setStatements(change)
    setIndex(index + 1)
  }

  const timents = {
    'Strongly Disagree': {
      points: -2, color: 'red'
    },
    'Disagree': {
      points: -1, color: 'pink'
    },
    'Ambivalent': {
      points: 0, color: 'blue'
    },
    'Agree': {
      points: 1, color: 'teal'
    },
    'Strongly Agree': {
      points: 2, color: 'green'
    },
  }
  const Sentiments = () => (
    <Stack direction={['column', 'row']}>
      {Object.entries(timents)
        .map(([timent, { points, color }]) => (
          <Button
            key={color}
            isActive={statements[index]?.response === points}
            colorScheme={color}
            onClick={() => answer(points)}
          >{timent}</Button>
        ))
      }
    </Stack>
  )

  const Navigation = () => (
    <Stack align='center'>
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
    </Stack>
  )

  const ColorBar = ({ from, to }) => (
    <Box id='colors'
      style={{
        background: `linear-gradient(
          to right, ${from}, ${to}
        )`
      }}
      className={``}
    ></Box>
  )

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

  if(!maxes) {
    return (
      <Stack align='center' pt={10}>
        <Box>Processing Statements…</Box>
        <Spinner/>
      </Stack>
    )
  }

  const scores = (
    Object.fromEntries(
      order.map(
        c => [c, (current[c] ?? 0) / maxes[c]] // normalized
      )
    )
  )

  setWeights(scores)

  const Statement = ({ positon }) => (
    <Box
      maxW={['20rem', '40rem']}
      minH={['6rem', '3rem']}
      ml={['3rem', 0]}
    >
      <Text textAlign='justify'>
        <q>{statements[index].position}</q>
      </Text>
    </Box>
  )

  const GetResult = () => (
    <Button
      title='Skip To Results'
      h='auto'
      w='2rem'
      onClick={() => setIndex(statements.length)}
    ><ArrowForwardIcon/></Button>
  )

  return (
    <Stack className={!showing && 'imageOnly'}>
      <Flex as='nav' key='head'>
        {statements.map((s, i) => (
          <span key={i}
            title={`Position #${i + 1}: ${s.position}`}
            onClick={() => setIndex(i)}
            style={{
              background: ((() => {
                if(index === i) return 'yellow'
                if(s.response < 0) return s.low
                if(s.response > 0) return s.high
                if(s.response === 0) return 'orange'
                if(s.response === null) return 'cyan'
                return 'transparent'
              })()),
              filter: `brightness(
                ${Math.abs(s.response) === 1 ? '75%' : '100%'}
              )`
            }}
          ></span>
        ))}
      </Flex>
      {!statements[index]
        ? (
          <Results {...{ scores }}/>
        ) : (
          <Flex direction='column' align='center'>
            <Stack direction='row'>
              <Stack pt={5} id='statements'>
                <Statement positon={statements[index].position}/>
                {/* ToDo: Make 100% width on mobile, preserving button width */}
                <ColorBar
                  from={statements[index].low}
                  to={statements[index].high}
                />
                <Sentiments/>
                <Navigation/>
              </Stack>
              <GetResult/>
            </Stack>
            <Button
              title={`${showing ? 'Hide' : 'Show'} Position`}
              maxH='1rem'
              minW='50%'
              margin='1rem auto'
              onClick={() => setShowing(s => !s)}
            >{showing ? <ArrowUpIcon/> : <ArrowDownIcon/>}</Button>
            <Chart key='chart' {...{ scores }}/>
          </Flex>
        )
      }
    </Stack>
  )
}

export default connect(
  (state) => {
    const { } = state
    return { }
  },
)(Test)