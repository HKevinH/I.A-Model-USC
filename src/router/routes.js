const HOME = '/'
const SIMULATION = '/simulation'
const SIMULATION_RESULT = '/simulation/result'

const COTIZATION = '/cotization'

export { COTIZATION, HOME, SIMULATION, SIMULATION_RESULT }

const routes = [
  { path: HOME, name: 'Inicio' },
  { path: COTIZATION, name: 'Cotizacion' },
]

export { routes }
