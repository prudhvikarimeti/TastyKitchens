import {Switch, Route, Redirect} from 'react-router-dom'

import LoginRoute from './components/LoginRoute'

import './App.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

const App = () => (
  <Switch>
    <Route exact path="/login" components={LoginRoute} />
  </Switch>
)

export default App
