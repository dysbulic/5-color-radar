import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import {
  Flex, Stack, Box, Spinner, Button, ButtonGroup,
  Text, Checkbox,
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
import { useBreakpointValue } from '@chakra-ui/react'

// mapping of responses to an octal-representable number
const storageMap = {
  0: undefined, 1: -2, 2: -1, 3: 0, 4: 1, 5: 2, 6: null,
}

const Test = ({ history }) => {
  const [statements, setStatements] = useState(ments)
  const [maxes, setMaxes] = useState()
  const [index, setIndex] = useState(0)
  const [showing, setShowing] = useState(true)
  const [colors, setColors] = useState(false)

  const { answers = '' } = useParams()
  const load = () => {
    if(answers === '') {
      statements.forEach(
        r => r.response = undefined
      )
      setIndex(0)
    } else {
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
    }
    setStatements(statements)
    const maxes = new Proxy({}, defZero)
    statements.forEach((s) => {
      maxes[s.low] += 2
      maxes[s.high] += 2
    })
    setMaxes(maxes)
  }

  useEffect(load, [answers, statements])

  const update = () => {
    if(!maxes) return

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

    setWeights(
      Object.fromEntries(
        order.map(
          c => [c, (current[c] ?? 0) / maxes[c]] // normalized
        )
      )
    )
  }
    
  useEffect(update, [statements, maxes])

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

  const ColorBar = ({ from, to, ...props }) => (
    <Box id='colors'
      style={{
        background: `linear-gradient(
          to right, ${from}, ${to}
        )`
      }}
      className={``}
      {...props}
    ></Box>
  )

  const GetResult = () => (
    <Button
      title="Skip To Results"
      w="1.5rem" h="auto"
      ml="1rem"
      onClick={() => setIndex(statements.length)}
    ><ArrowForwardIcon/></Button>
  )

  // this can't be within a conditional
  const resultButton = useBreakpointValue({
    base: null, md: <GetResult/>
  })

  if(!maxes) {
    return (
      <Stack align='center' pt={10}>
        <Box>Processing Statements…</Box>
        <Spinner/>
      </Stack>
    )
  }

  const Statement = ({ position }) => (
    <Box
      maxW={['20rem', '60rem']}
      minH={{ base: '6rem', sm: '16rem', lg: '12rem' }}
      ml={{ base: '4rem', xl: 0 }}
      alignContent="center"
    >
      <Text
        textAlign='justify'
        fontSize={{ base: '1rem', sm: '2.5rem' }}
      >
        <q>{position}</q>
      </Text>
    </Box>
  )

  const sentiments = {
    'Strongly Disagree': { points: -2, color: 'red' },
    'Disagree': { points: -1, color: 'pink' },
    'Ambivalent': { points: 0, color: 'blue' },
    'Agree': { points: 1, color: 'teal' },
    'Strongly Agree': { points: 2, color: 'green' },
  }
  const Sentiments = () => (
    <Flex direction={['column-reverse', 'row']} justify="stretch">
      {Object.entries(sentiments)
        .map(([timent, { points, color }]) => (
          <Button
            key={color} flexGrow={1}
            isActive={statements[index]?.response === points}
            colorScheme={color}
            onClick={() => answer(points)}
            mb={['0.5rem', 0]} mr={[0, '0.5rem']}
          >{timent}</Button>
        ))
      }
    </Flex>
  )

  return (
    <Flex justify="center">
      <Flex as="nav" key="head" position="fixed" w="100%">
        {statements.map((s, i) => (
          <span key={i}
            title={`Position #${i + 1}: ${s.position}`}
            onClick={() => setIndex(i)}
            style={{
              background: ((() => {
                if(index === i) return 'yellow'
                if(s.response === 0) return 'orange'
                if(s.response === null) return 'cyan'
                if(!colors && s.response) return 'gray'
                if(s.response < 0) return s.low
                if(s.response > 0) return s.high
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
          <Results/>
        ) : (
          <Flex direction="column" align='center' justify='center'>
            <Flex direction='row'>
              <Flex
                pt={5} grow={1} direction='column'
                transition='max-height 0.5s'
                maxH={
                  showing
                  ? { base: '30rem', sm: '28rem', lg: '22rem' }
                  : '0rem'
                }
                overflow='hidden'
              >
                <Statement position={statements[index].position}/>
                {/* ToDo: Make 100% width on mobile, preserving button width */}
                {colors && <ColorBar
                  from={statements[index].low}
                  to={statements[index].high}
                  mb={3}
                />}
                <Sentiments/>
                <Navigation/>
              </Flex>
              {resultButton}
            </Flex>
            <Checkbox
              type="checkbox"
              value={colors}
              onChange={(evt) => setColors(evt.target.checked)}
              m='1rem auto'
            >
              Show Color Choices
            </Checkbox>
            {colors && <Button
              title={`${showing ? 'Hide' : 'Show'} Position`}
              maxH='1rem' minW='50%'
              margin='1rem auto'
              onClick={() => setShowing(s => !s)}
            >{showing ? <ArrowUpIcon/> : <ArrowDownIcon/>}</Button>}
            {colors && <Chart key='chart'/>}
          </Flex>
        )
      }
    </Flex>
  )
}

export default connect(
  (state) => {
    const { weights } = state
    return { weights }
  },
)(Test)