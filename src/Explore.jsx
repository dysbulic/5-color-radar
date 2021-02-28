import { Stack } from '@chakra-ui/react'
import { connect } from 'react-redux'
import Sliders from './Sliders'
import Results from './Results'
import Ranges from './Ranges'

const Explore = () => (
  <Stack direction='row'>
    <Sliders/>
    {/*<Ranges/>*/}
    <Results/>
  </Stack>
)

export default connect(
  (state) => {
    const { } = state
    return { }
  },
)(Explore)