import React from 'react'

const TextField = ({ text }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-sm">
      <p className="text-gray-700 text-sm md:text-base text-sm font-bold leading-relaxed">
        {text}
      </p>
    </div>
  )
}

export default TextField
