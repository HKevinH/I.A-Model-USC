import { gsap } from 'gsap'
import React, { useEffect } from 'react'

const Navbar = ({ activeRoute, onRouteChange, routes }) => {
  useEffect(() => {
    // Animación de entrada al cargar la página
    gsap.from('.navbar', {
      opacity: 0,
      y: -30,
      duration: 1,
      delay: 0.5,
      ease: 'power2.inOut',
    })

    // Evento scroll para animar la barra de navegación al hacer scroll
    const handleScroll = () => {
      if (window.scrollY > 100) {
        gsap.to('.navbar', {
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        })
      } else {
        gsap.to('.navbar', {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        })
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Limpieza del event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full z-10 flex justify-between items-center p-4 bg-white shadow-md transition-all duration-300 ease-in-out">
      <div className="text-xl font-bold">HkevinH</div>
      <ul className="flex space-x-4">
        {routes.map((route) => (
          <li key={route.path} onClick={() => onRouteChange(route.path)}>
            <button
              className={`px-3 py-2 rounded-lg text-sm font-medium ${
                activeRoute === route.path
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              {route.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Navbar
