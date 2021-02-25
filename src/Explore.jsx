import { Stack } from '@chakra-ui/react'
import { connect } from 'react-redux'
import Sliders from './Sliders'
import Results from './Results'
import { normsToWeights } from './Sliders'

const Explore = ({ handles }) => {
  const scores = normsToWeights(handles)
  console.info({ scores })
  return(
    <Stack direction='row'>
      <Sliders {...{ scores }}/>
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