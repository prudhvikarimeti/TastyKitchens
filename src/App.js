import {Switch, Route, Redirect} from 'react-router-dom'

import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" components={LoginRoute} />
    <ProtectedRoute exact path="/" component={HomeRoute} />
  </Switch>
)

export default App
