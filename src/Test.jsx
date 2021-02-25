import { useEffect, useState } from 'react'
import {
  Flex, Stack, Box, Spinner, Button, ButtonGroup, Text,
} from '@chakra-ui/react'
import {
  ArrowBackIcon, ArrowForwardIcon, ArrowUpIcon, ArrowDownIcon,
} from '@chakra-ui/icons'
import { useParams } from 'react-router'
import Chart from './Chart'
import Results from './Results'
import ments from './statements'
import './Test.scss'

// order the colors appear in
export const order = ['white', 'blue', 'black', 'red', 'green']
// MetaGame specific mapping of colors to terms
export const attrs = {
  white: 'Justice', blue: 'Wisdom', red: 'Chaos',
  black: 'Ambition', green: 'Balance',
}
// mapping of responses to an octal-representable number
const storageMap = {
  0: undefined, 1: -2, 2: -1, 3: 0, 4: 1, 5: 2, 6: null,
}

// Proxy function for a hash that returns 0 if falsey
const defZero = {
  get: (target, name) => (
    name in target ? target[name] : 0
  )
}
// making BigInt available
const BigInt = window.BigInt
// convert BigInt to web safe base64
const btoa = (big) => {
  let hex = big.toString(16)
  // Buffer.from raises an error on an odd number of characters
  hex = hex.padStart(Math.ceil(hex.length / 2) * 2)
  return Buffer.from(hex, 'hex').toString('base64')
}
// convert from base64 to a BigInt
const atob = (b64) => (
  BigInt(`0x${Buffer.from(b64, 'base64').toString('hex') || '00'}`)
)
// reverse the bits in a BigInt
const rev = (num) => (
  BigInt(`0b${[...num.toString(2)].reverse().join('')}`)
)

export default ({ history }) => {
  const [statements, setStatements] = useState(ments)
  const [maxes, setMaxes] = useState()
  const [index, setIndex] = useState(0)
  const [showing, setShowing] = useState(true)
  const { answers = '' } = useParams()
  const load = async () => {
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
  const answer = (res) => {
    setStatements((statements) => {
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
      // ToDo: `/test/` should not be hard coded
      history.push(`/test/${btoa(storage)}`)
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
  order.forEach(k => normalized[k] = (current[k] ?? 0) / maxes[k])

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
                return 'transparent'
              })()),
              filter: `brightness(
                ${Math.abs(s.response) === 1 ? '75%' : '100%'}
              )`
            }}
          ></span>
        ))}
      </Flex>
      <Box id='statements' maxH={['none', '13rem']}>
        <Flex justify='center' align='center' flexDir='column'>
          <Box
            maxW={['20rem', '40rem']}
            minH={['6rem', '3rem']}
            ml={['3rem', 0]}
          >
            {statements[index] && (
              <Text textAlign='justify'>
                <q>{statements[index]?.position}</q>
              </Text>
            )}
          </Box>
          {statements[index] &&
            <Stack pt={5}>
              {/* ToDo: Make 100% width on mobile, preserving button width */}
              <Box id='colors'
                style={{
                  background: `linear-gradient(
                    to right, ${statements[index].low}, ${statements[index].high}
                  )`
                }}
                className={``}
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
        title={`${showing ? 'Hide' : 'Show'} Position`}
        maxH='1rem'
        minW='50%'
        margin='auto'
        onClick={() => setShowing(s => !s)}
      >{showing ? <ArrowUpIcon/> : <ArrowDownIcon/>}</Button>
      <Chart key='chart' {...{ scores: normalized }}/>
    </Stack>
  )
}