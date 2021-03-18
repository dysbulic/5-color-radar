import { Heading, Flex, Spacer, Tooltip } from '@chakra-ui/react'
import { useEffect, useState, useCallback } from 'react'
import { connect } from 'react-redux'
import { capitalize } from './util'
import {
  masks as combos, descriptions
} from './data/combos'
import { colors as order } from './data/order'
import Chart from './Chart'

const Results = ({ weights, chart = true, dispatch, ...props }) => {
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
    <Flex
      direction='column' align='center' justify='center'
      {...props}
    >
      <Heading pb={5} mt='2.5rem' fontSize='4rem' textAlign='center'>
        {name}
      </Heading>
      <Flex
        direction={['column', chart ? 'row-reverse' : 'column-reverse']}
        grow={1}
        justifyContent={['flex-start', 'flex-end']}
      >
        <Flex
          maxW='30rem' ml='1rem' mb='1rem'
          fontSize='150%'
        >
          {descriptions[name]}
        </Flex>
        {icons && (
          <Flex
            direction='column' align='center' grow={1}
            flex={chart ? 'flex' : 'none'}
          >
            <Flex grow={1} justify='flex-start'>
              <object
                aria-label={name}
                alt={name} data={icons[name]}
                style={{ height: '100%', width: 'auto' }}
              />
            </Flex>
            <Flex direction='row' pt='0.5rem'>
              {order.map((c, i) => (mask & (1 << order.length - i - 1)) ? (
                <Tooltip hasArrow position="Top" label={capitalize(c)}>
                  <object
                    key={c} data={icons[capitalize(c)]}
                    aria-label={capitalize(c)} title={capitalize(c)}
                    style={{ height: '10vh', width: '10vh'  }}
                  />
                </Tooltip>
              ) : ( null ))}
            </Flex>
            {chart ? (
              <Flex justify='flex-start' grow={1}>
                <Chart h='100%'/>
              </Flex>
            ) : (
              <Spacer grow={1}/>
            )}
          </Flex>
        )}
      </Flex>
    </Flex>
  )
}


export default connect(
  (state) => {
    const { weights } = state
    return { weights }
  },
)(Results)