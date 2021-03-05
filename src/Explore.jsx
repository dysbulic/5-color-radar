import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { connect } from 'react-redux'
import Sliders from './Sliders'
import Results from './Results'
import Ranges from './Ranges'
import Chart from './Chart'

const Explore = () => {
  const component = useBreakpointValue(
    { base: <Ranges/>, /*lg: <Sliders/>*/ }
  )
  
  return (
    <Flex direction={['column', 'row']} justify='center'>
      <Flex direction='column' grow={1} maxH='100vh' maxW='25rem'>
        {component}
        <Chart/>
      </Flex>
      <Results chart={false}/>
    </Flex>
  )
}

export default connect(
  (state) => ({ }),
)(Explore)