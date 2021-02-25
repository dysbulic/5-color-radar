import { Image } from '@chakra-ui/image'
import { Heading, Stack } from '@chakra-ui/react'
import { useEffect, useState, useCallback } from 'react'
import { connect } from 'react-redux'
import { normsToWeights } from './Sliders'
import combos from './data/combos'
import { colors as order } from './data/order'

const Results = ({ handles }) => {
  const [icons, setIcons] = useState()
  const load = useCallback(async () => {
    const icons = {}
    for(let combo of Object.values(combos)) {
      icons[combo] = (await import(`./icons/${combo}.svg`)).default
    }
    setIcons(icons)
  }, [combos])

  useEffect(() => load(), [load])

  const [name, setName] = useState()
  const update = useCallback(() => {
    const scores = normsToWeights(handles)
    const maxScore = Math.max(...Object.values(scores))
    const position = {}

    console.info({ scores })
    if(maxScore >= 0.5) { // Colorless if all ≤ 50%
      Object.entries(scores).forEach(([color, score]) => {
        if(score / maxScore >= 0.8) { // score is ≥ 80% of max
          position[color] = score
        }
      })
    }

    const mask = parseInt(
      order.map(c => position[c] ? '1' : '0').join(''),
      2
    )
    setName(combos[mask])
  }, [handles])

    useEffect(() => update(), [update])

  return (
    <Stack>
      {icons && <Image alt={name} src={icons[name]}/>}
      <Heading>{name}</Heading>
    </Stack>
  )
}


export default connect(
  (state) => {
    const { handles } = state
    return { handles }
  },
)(Results)