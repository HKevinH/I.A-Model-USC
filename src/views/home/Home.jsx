import React from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../../components/atoms/nav/Navbar'
import Section from '../../components/atoms/section/Section'
import useTensorFlowModel from '../../custom-hooks/useTensorFlowModel'
import { routes } from '../../router/routes'
import './home.css'
const Home = () => {
  const [activeRoute, setActiveRoute] = React.useState('home')
  const handleRouteChange = (route) => {
    setActiveRoute(route)
  }

  const { model, error, isLoading } = useTensorFlowModel()
  console.log(model)
  const history = useHistory()
  return (
    <>
      <Navbar
        activeRoute={history.location.pathname}
        onRouteChange={handleRouteChange}
        routes={routes}
      />

      <div className="container-slider">{/* <Slider /> */}</div>
      <div className="container-home">
        <Section
          title="Inteligencia Artificial"
          content="Cillum minim pariatur sunt consequat adipisicing quis adipisicing magna.Reprehenderit aute occaecat qui aliquip labore laboris consectetur eiusmod eiusmod dolore reprehenderit."
        />
        <Section
          title="Modelo Prestamos"
          content="Amet esse incididunt amet et culpa aute non.
          Adipisicing laborum dolore irure voluptate.Pariatur consequat aliqua ad deserunt labore."
        />
        <Section
          title="Fugiat do quis fugiat sunt eiusmod ex fugiat esse tempor exercitation veniam."
          content="Incididunt deserunt est dolor pariatur elit qui elit voluptate fugiat. Excepteur occaecat eiusmod officia sunt exercitation minim est qui ipsum voluptate.Id nostrud magna dolor ad enim laborum do proident commodo et et."
        />
      </div>
    </>
  )
}

export { Home }
