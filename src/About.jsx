import { Flex, Heading, Link, Text } from '@chakra-ui/react'

export default () => (
  <Flex direction="column" justify="center" maxW="min(100vw, 25rem)" m="auto">
    <Heading m={5} textAlign="center">Magic: The Gathering's Color Dispositions</Heading>
    <Text>The questions and scoring are originally from <Link href="https://jerdle-code.github.io/color-pie-test/">@Jerdle-code's Color Pie Test</Link>.</Text>
    <Text>The information and non-censored artworks are made available though Wizards of the Coast's <Link href="https://company.wizards.com/en/legal/fancontentpolicy">Fan Content Policy</Link>.</Text>
    <Text>This site is neither approved of nor endorsed by Wizards. Portions of the materials used are © Wizards of the Coast LLC.</Text>
  </Flex>
)