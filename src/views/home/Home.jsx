import React from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../../components/atoms/nav/Navbar'
import Section from '../../components/atoms/section/Section'
import Slider from '../../components/atoms/slider/Slider'
import { routes } from '../../router/routes'

const Home = () => {
  const history = useHistory()
  const [activeRoute, setActiveRoute] = React.useState(
    history.location.pathname,
  )

  const handleRouteChange = (route) => {
    setActiveRoute(history.push(route))
  }

  return (
    <>
      <Navbar
        activeRoute={history.location.pathname}
        onRouteChange={handleRouteChange}
        routes={routes}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="my-8">
          <Slider />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 my-8">
          <Section
            title="Inteligencia Artificial"
            content="Cillum minim pariatur sunt consequat adipisicing quis adipisicing magna. Reprehenderit aute occaecat qui aliquip labore laboris consectetur eiusmod eiusmod dolore reprehenderit."
          />
          <Section
            title="Modelo Prestamos"
            content="Amet esse incididunt amet et culpa aute non. Adipisicing laborum dolore irure voluptate. Pariatur consequat aliqua ad deserunt labore."
          />
          <Section
            title="Fugiat do quis fugiat sunt eiusmod ex fugiat esse tempor exercitation veniam."
            content="Incididunt deserunt est dolor pariatur elit qui elit voluptate fugiat. Excepteur occaecat eiusmod officia sunt exercitation minim est qui ipsum voluptate. Id nostrud magna dolor ad enim laborum do proident commodo et et."
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 my-8">
          <div className="p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Novedades en Tecnología
            </h3>
            <p className="text-gray-600">
              Explora las últimas tendencias y avances en el mundo de la
              tecnología.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Novedades en Tecnología
            </h3>
            <p className="text-gray-600">
              Explora las últimas tendencias y avances en el mundo de la
              tecnología.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Análisis de Datos
            </h3>
            <p className="text-gray-600">
              Descubre cómo el análisis de datos está transformando las
              industrias.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export { Home }
