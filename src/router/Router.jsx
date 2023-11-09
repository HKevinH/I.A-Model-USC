import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from '../views/home/Home'
import { Simulation } from '../views/simulation/Simulation'
import { HOME, SIMULATION } from './routes'
const AppRouter = () => {
  return (
    <Switch>
      <Route path={HOME} component={Home} />
      <Route path={SIMULATION} component={Simulation} />
      <Route path="/app" component={Home} />
      <Route
        path="/model/model.json"
        component={'../../public/model/model.json'}
      />
      /{' '}
    </Switch>
  )
}

export default AppRouter
