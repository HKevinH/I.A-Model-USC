import React from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { Home } from '../views/home/Home'
import { Simulation } from '../views/simulation/Simulation'
import { BASE, PRINCIPAL_BASE, SIMULATION } from './routes'
const AppRouter = () => {
  return (
    <Switch>
      <Route path={BASE} component={Home} />
      <Route path={SIMULATION} component={Simulation} />
      <Redirect from={PRINCIPAL_BASE} to={BASE} />
    </Switch>
  )
}

export default withRouter(AppRouter)
