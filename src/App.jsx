import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import {
  ChakraProvider, extendTheme, ColorModeProvider
} from "@chakra-ui/react"
import Statements from './Statements'

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
          <Route path='/:answers' exact={false} component={Statements}/>
          <Route path='/' component={Statements}/>
        </Switch>
      </Router>
    </ChakraProvider>
  )
}
