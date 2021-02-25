import { Stack } from '@chakra-ui/react'
import { connect } from 'react-redux'
import Sliders from './Sliders'
import Results from './Results'
import { normsToWeights } from './Sliders'
import Ranges from './Ranges'

const Explore = ({ handles }) => {
  const scores = normsToWeights(handles)

  return(
    <Stack direction='row'>
      {/*<Sliders {...{ scores }}/>*/}
      <Ranges/>
      <Results {...{ scores }}/>
    </Stack>
  )
}

export default connect(
  (state) => {
    const { handles } = state
    return { handles }
  },
)(Explore)