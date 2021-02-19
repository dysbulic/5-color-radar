import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Statements from './Statements'

export default () => (
  <Router>
    <Switch>
      <Route path="/:prefix" children={<Statements/>} />
      <Route path="/:prefix/:answers" children={<Statements/>} />
    </Switch>
  </Router>
)