import { gsap } from 'gsap/gsap-core'
import { React, useEffect, useRef, useState } from 'react'
import SVG_01 from '../../../assets/img/1.jpg'
import SVG_02 from '../../../assets/img/2.jpg'
import SVG_03 from '../../../assets/img/3.jpg'
import SVG_04 from '../../../assets/img/4.jpg'

const Slider = () => {
  const slidesRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const images = [SVG_01, SVG_02, SVG_03, SVG_04]

  useEffect(() => {
    const tl = gsap.timeline()

    // Animación de entrada
    tl.to(slidesRef.current.children, {
      opacity: 1,
      ease: 'power1.out',
      duration: 10,
      delay: 2,
    })

    // Animación de salida con cambio de imagen
    tl.to(slidesRef.current.children, {
      opacity: 0,
      duration: 0.2,
      delay: 1,
      onComplete: () => {
        const nextSlide = (currentSlide + 1) % images.length
        setCurrentSlide(nextSlide)
      },
    })

    // Ajustar el tamaño de la ventana
    const handleResize = () => {
      tl.invalidate().restart()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [currentSlide])

  return (
    <div className="overflow-hidden relative">
      <div className="flex transition-transform duration-500" ref={slidesRef}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex-none w-full transform transition-opacity duration-300 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%)`,
            }}
          >
            <img
              src={image}
              alt={`slide ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
