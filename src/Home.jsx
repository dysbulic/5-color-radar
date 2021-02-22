import { Stack, Button, Heading, Text as ChakraText, UnorderedList, ListItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Text = ({ children }) => (
  <ChakraText textAlign='justify'>{children}</ChakraText>
)

export default () => (
  <Stack align='center' m='auto' p='1rem' maxW='40rem'>
    <Heading align='center' p='2rem'>The Magic: The Gathering Five Color Disposition Alignment (Adjacent)</Heading>
    <Text>Magic: The Gathering is a card game where play requires holding "mana". Mana comes in five colors: red, white, black, green, and blue. Each color represents a different disposition and world-view.</Text>
    <Text>This seemingly simple set of five becomes surprisingly complex because <Link to='/combos'>all combinations of zero, one, two, three, four, and five colors is considered</Link>.</Text>
    <Text>The Magic mythos has organizations – guild, governments, tribes, etc. – which embody each of these combinations.</Text>
    <Link to='/test'><Button>Test</Button></Link>
    <Link to='/combos'><Button>Combinations</Button></Link>
    <Link to='/slide'><Button>Experiment</Button></Link>
  </Stack>
)