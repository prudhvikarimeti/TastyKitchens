import {Switch, Route, Redirect} from 'react-router-dom'

import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import RestaurantDetailsRoute from './components/RestaurantDetailsRoute'
import CartRoute from './components/CartRoute'
import NotFoundRoute from './components/NotFoundRoute'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginRoute} />
    <ProtectedRoute exact path="/" component={HomeRoute} />
    <ProtectedRoute
      exact
      path="/restaurant/:id"
      component={RestaurantDetailsRoute}
    />
    <ProtectedRoute exact path="/cart" component={CartRoute} />
    <ProtectedRoute exact path="/not-found" component={NotFoundRoute} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
