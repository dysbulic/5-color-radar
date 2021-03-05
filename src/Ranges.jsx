import {
  Spacer, Text, Flex, Input, Heading
} from '@chakra-ui/react'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import { setHandle, setHandles } from './Reducer'
import { reasons } from './data/order'

const Ranges = () => {
  const range = 100
  const numReasons = Object.keys(reasons).length
  const [values, setValues] = (
    useState(Array(numReasons).fill(0))
  )

  const load = () => {
    setHandles(Object.fromEntries(
      Object.keys(reasons).map(
        (axis) => [axis, { x: 0, y: 0.5 }]
      )
    ))
  }

  useEffect(load, [])

  const change = (id, idx, { target: { value: val }}) => {
    setValues(vs => {
      vs = [...vs]
      vs.splice(idx, 1, val)
      return vs
    })
    setHandle(id, { x: val / range, y: 0.5 })
  }

  return (
    <Flex
      align='center' justify='center'
      minW={['100%', '20rem']} mr={8}
      direction='column'
    >
      <Heading textAlign='center' ml='5rem'>Fundametal Color Conflicts</Heading>
      {Object.entries(reasons).map(([id, split], idx) => {
        return (
          <Flex key={id} w='100%' direction='column'>
            <Flex w='100%' fontSize={20}>
              <Text>{split.left}</Text>
              <Spacer/>
              <Text>{split.right}</Text>
            </Flex>
            <Input type='range'
              maxH={4} mb={3}
              min={-range} max={range} value={values[idx]}
              bg={`linear-gradient(
                to right, ${id.split('-').join(', ')}
              )`}
              onChange={evt => change(id, idx, evt)}
            />
          </Flex>
        )
      })}
    </Flex>
  )
}

export default connect(
  (state) => ({ }),
)(Ranges)