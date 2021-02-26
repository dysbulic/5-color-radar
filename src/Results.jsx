import { Image } from '@chakra-ui/image'
import { Heading, Stack, Text } from '@chakra-ui/react'
import { useEffect, useState, useCallback } from 'react'
import { connect } from 'react-redux'
import { capitalize } from './util'
import {
  masks as combos, descriptions
} from './data/combos'
import { colors as order } from './data/order'
import Chart from './Chart'

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

  const [mask, setMask] = useState()
  const name = combos[mask]
  const update = useCallback(() => {
    const maxWeight = Math.max(...Object.values(weights))
    const position = {}
    if(maxWeight >= 0.4) { // Colorless if all ≤ 40%
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
    setMask(mask)
  }, [weights])

  useEffect(() => update(), [update])

  return (
    <Stack
      direction='row' align='center' justify='center'
      maxW='50rem'
    >
      {icons && (
        <Stack direction='column' align='center'>
          <object
            alt={name} data={icons[name]}
            style={{ height: '40vh', width: '40vh' }}
          />
          <Stack direction='row'>
            {order.map((c, i) => (mask & (1 << order.length - i)) ? (
              <object
                key={c} data={icons[capitalize(c)]}
                style={{ height: '10vh', width: '10vh'  }}
              />
            ) : ( null ))}
          </Stack>
          <Chart maxH='50vh'/>
        </Stack>
      )}
      <Stack>
        <Heading>{name}</Heading>
        {descriptions[name]}
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