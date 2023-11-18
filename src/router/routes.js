const BASE = '/app'
const PRINCIPAL_BASE = '/'
const SIMULATION = `${BASE}/simulation`
const SIMULATION_RESULT = '/simulation/result'

const COTIZATION = '/cotization'

export { BASE, COTIZATION, PRINCIPAL_BASE, SIMULATION, SIMULATION_RESULT }

const routes = [
  { path: PRINCIPAL_BASE, name: 'Inicio' },
  { path: SIMULATION, name: 'Simular Credito' },
]

export { routes }
