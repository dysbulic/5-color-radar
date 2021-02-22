import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import {
  ChakraProvider, extendTheme
} from "@chakra-ui/react"
import { Provider } from 'react-redux'
import Statements from './Statements'
import Combos from './Combos'
import Sliders from './Sliders'
import Home from './Home'
import { store } from './Reducer'

const config = {
  initialColorMode: 'dark',
}
const theme = extendTheme({ config })

export default () => {
  const history = createBrowserHistory()

  return (
    <ChakraProvider theme={theme}><Provider store={store}>
      <Router history={history} basename='/'>
        <Switch>
          <Route path='/combos' component={Combos}/>
          <Route path='/sliders' component={Sliders}/>
          <Route path='/test/:answers' exact={false} component={Statements}/>
          <Route path='/test' component={Statements}/>
          <Route path='/' exact={false} component={Home}/>
        </Switch>
      </Router>
    </Provider></ChakraProvider>
  )
}