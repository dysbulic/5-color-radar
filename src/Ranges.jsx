import {
  Spacer, Stack, Text, HStack, Input
} from '@chakra-ui/react'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import { setHandle } from './Reducer'
import { reasons } from './data/order'

const Ranges = () => {
  const range = 100
  const numReasons = Object.keys(reasons).length
  const [values, setValues] = (
    useState(Array(numReasons).fill(0))
  )
  const change = (id, idx, { target: { value: val }}) => {
    setValues(vs => {
      vs = [...vs]
      vs.splice(idx, 1, val)
      return vs
    })
    setHandle(id, { x: val / range, y: 0.5 })
  }

  return (
    <Stack align='center' minW={['100%', '20rem']} ml='5rem'>
      {Object.entries(reasons).map(([id, split], idx) => {
        return (
          <Stack key={id} w='100%'>
            <HStack w='100%'>
              <Text>{split.left}</Text>
              <Spacer/>
              <Text>{split.right}</Text>
            </HStack>
            <Input type='range'
              maxH={4}
              min={-range} max={range} value={values[idx]}
              bg={`linear-gradient(
                to right, ${id.split('-').join(', ')}
              )`}
              onChange={evt => change(id, idx, evt)}
            />
          </Stack>
        )
      })}
    </Stack>
  )
}

export default connect(
  (state) => {
    const { } = state
    return { }
  },
)(Ranges)