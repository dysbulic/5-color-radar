import {
  HashRouter as Router, Switch, Route
} from 'react-router-dom'
import {
  ChakraProvider, extendTheme, Menu, MenuItem,
  MenuButton, Button, MenuList, Link as ChakraLink,
} from '@chakra-ui/react'
import {
  ChevronDownIcon, HamburgerIcon
} from "@chakra-ui/icons"
import { Provider } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import Test from './Test'
import Combos from './Combos'
import Explore from './Explore'
import Home from './Home'
import Masked from './Masked'
import { store } from './Reducer'
import bg from './images/background.jpg'

const overrides = {
  config: {
    initialColorMode: 'dark',
  },
  styles: {
    global: {
      body: {
        bgImage: `url('${bg}')`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        minH: '100vh',
      },
      a: {
        textDecoration: 'underline',
      },
    },
  },
}
const theme = extendTheme(overrides)

const Link = ({ children, to }) => (
  <ChakraLink
    as={RouterLink}
    {...{ to }}
    w='100%'
  >{children}</ChakraLink>
)

export default () => (
  <ChakraProvider theme={theme}><Provider store={store}>
    <Router basename='/'>
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
                <Link to='/'>🏡 Home</Link>
              </MenuItem>
              <MenuItem>
                <Link to='/test'>✍ Test</Link>
              </MenuItem>
              <MenuItem>
                <Link to='/combos'>🕸 Combinations</Link>
              </MenuItem>
              <MenuItem>
                <Link to='/explore'>🔭 Explore</Link>
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
      <Switch>
        <Route path='/combos/:mask' component={Masked}/>
        <Route path='/combos' component={Combos}/>
        <Route path='/explore' component={Explore}/>
        <Route path='/test/:answers' component={Test}/>
        <Route path='/test' component={Test}/>
        <Route path='/' exact={false} component={Home}/>
      </Switch>
    </Router>
  </Provider></ChakraProvider>
)