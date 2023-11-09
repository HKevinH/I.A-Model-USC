import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Home } from '../views/home/Home'
import { Simulation } from '../views/simulation/Simulation'
import { HOME, SIMULATION } from './routes'
const AppRouter = () => {
  return (
    <Switch>
      <Route path={HOME} component={Home} />
      <Route path={SIMULATION} component={Simulation} />
      <Route path="/app" component={Home} />
      <Redirect from="*" to="/app" />
      <Redirect from="/" to="/app" />
    </Switch>
  )
}

export default AppRouter
