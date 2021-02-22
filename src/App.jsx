import {
  HashRouter as Router, Switch, Route
} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import {
  ChakraProvider, extendTheme, Menu, MenuItem,
  MenuButton, Button, MenuList, Link,
} from "@chakra-ui/react"
import {
  ChevronDownIcon, HamburgerIcon
} from "@chakra-ui/icons"
import { Provider } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import Test from './Test'
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
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                isActive={isOpen} as={Button}
                position='fixed' top='1rem' left='1rem'
              >
                {isOpen ? <ChevronDownIcon/> : <HamburgerIcon/>}
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link as={RouterLink} to='/test'>Test</Link>
                </MenuItem>
                <MenuItem>
                  <Link as={RouterLink} to='/combos'>Combinations</Link>
                </MenuItem>
                <MenuItem>
                  <Link as={RouterLink} to='/slide'>Explore</Link>
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
        <Switch>
          <Route path='/combos' component={Combos}/>
          <Route path='/slide' component={Sliders}/>
          <Route path='/test/:answers' component={Test}/>
          <Route path='/test' component={Test}/>
          <Route path='/' exact={false} component={Home}/>
        </Switch>
      </Router>
    </Provider></ChakraProvider>
  )
}