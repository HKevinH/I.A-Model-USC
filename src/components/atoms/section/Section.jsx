import { gsap } from 'gsap'
import React, { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

const Section = ({ title, content }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const contentRef = useRef(null)

  useEffect(() => {
    if (inView) {
      // Agrega animación utilizando gsap
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
      })
    }
  }, [inView])

  return (
    <div className="flex justify-center transform transition duration-500 hover:scale-105">
      <section
        ref={ref}
        className={`w-full max-w-4xl p-6 my-4 bg-white rounded-lg shadow-md ${
          inView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>
        <div ref={contentRef} className="text-gray-600 text-base">
          {content}
        </div>
      </section>
    </div>
  )
}

export default Section
