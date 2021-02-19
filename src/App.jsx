import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Statements from './Statements'

export default () => (
  <Router>
    <Switch>
      <Route path="/:prefix/:answers" children={<Statements/>} />
      <Route path="/:prefix" children={<Statements/>} />
    </Switch>
  </Router>
)