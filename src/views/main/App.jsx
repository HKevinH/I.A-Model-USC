import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import AppRouter from '../../router/Router'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  )
}

export default App
