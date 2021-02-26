import { Image } from '@chakra-ui/image'
import { Heading, Stack, Text } from '@chakra-ui/react'
import { useEffect, useState, useCallback } from 'react'
import { connect } from 'react-redux'
import { normsToWeights } from './Sliders'
import combos from './data/combos'
import { colors as order } from './data/order'

const Results = ({ weights }) => {
  const [icons, setIcons] = useState()
  const load = useCallback(async () => {
    const icons = {}
    for(let combo of Object.values(combos)) {
      icons[combo] = (await import(`./icons/${combo}.svg`)).default
    }
    setIcons(icons)
  }, [])

  useEffect(() => load(), [load])

  const [name, setName] = useState()
  const update = useCallback(() => {
    const maxWeight = Math.max(...Object.values(weights))
    const position = {}
    if(maxWeight >= 0.5) { // Colorless if all ≤ 50%
      Object.entries(weights).forEach(([color, weight]) => {
        if(weight / maxWeight >= 0.8) { // score is ≥ 80% of max
          position[color] = weight
        }
      })
    }

    const mask = parseInt(
      order.map(c => position[c] ? '1' : '0').join(''),
      2
    )
    setName(combos[mask])
  }, [weights])

  useEffect(() => update(), [update])

  return (

    <Stack direction='row' align='center' justify='center'>
      {icons && <object alt={name} data={icons[name]}/>}
      <Stack>
        <Heading>{name}</Heading>
        <Text>You have no personality. Sorry. ☹</Text>
      </Stack>
    </Stack>
  )
}


export default connect(
  (state) => {
    const { weights } = state
    return { weights }
  },
)(Results)