import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { connect } from 'react-redux'
//import Sliders from '../Sliders'
import Results from '../Results'
import Ranges from './Ranges'
import Chart from '../Chart'

const Explore = () => {
  const component = useBreakpointValue(
    { base: <Ranges/>, /*lg: <Sliders/>*/ }
  )
  
  return (
    <Flex direction={['column', 'row']} justify='center'>
      <Flex direction='column' w={['100%', '50%']} maxH='100vh'>
        {component}
        <Chart/>
      </Flex>
      <Results w={['100%', '50%']} chart={false}/>
    </Flex>
  )
}

export default connect(
  (state) => ({ }),
)(Explore)