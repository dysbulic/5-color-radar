import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import {
  ChakraProvider, extendTheme, ColorModeProvider
} from "@chakra-ui/react"
import Statements from './Statements'
import Combos from './Combos'
import Sliders from './Sliders'

const config = {
  initialColorMode: 'dark',
}
const theme = extendTheme({ config })

export default () => {
  const history = createBrowserHistory()

  return (
    <ChakraProvider theme={theme}>
      <Router history={history} basename='/'>
        <Switch>
          <Route path='/combos' component={Combos}/>
          <Route path='/sliders' component={Sliders}/>
          <Route path='/:answers' exact={false} component={Statements}/>
          <Route path='/' component={Statements}/>
        </Switch>
      </Router>
    </ChakraProvider>
  )
}
