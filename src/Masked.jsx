import { Flex, Heading, Image } from '@chakra-ui/react'
import { useState, useCallback, useEffect } from 'react'
import { useParams } from 'react-router'
import { masks, descriptions } from './data/combos'

export default () => {
  const { mask: maskParam = '' } = useParams()
  const mask = parseInt(maskParam ?? '0', 2)
  const [icons, setIcons] = useState()
  const load = useCallback(async () => {
    const icons = {}
    for(let [mask, combo] of Object.entries(masks)) {
      icons[mask] = (await import(`./icons/${combo}.svg`)).default
    }
    setIcons(icons)
  }, [])

  useEffect(() => load(), [load])

  return (
    <Flex
      align="center" justify="center"
      direction={['column', 'row']}
      minH='100vh'
    >
      <Flex align='center' direction='column'>
        {icons && <Image h='45vh' src={icons[mask]}/>}
        <Heading>{masks[mask]}</Heading>
      </Flex>
      <Flex align='center' pl={4}>
        {descriptions[masks[mask]]}
      </Flex>
    </Flex>
  )
}