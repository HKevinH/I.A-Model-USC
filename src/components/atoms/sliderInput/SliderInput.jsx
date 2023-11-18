import React from 'react'

const SliderInput = ({ range, onChange, value }) => {
  const floatValue = parseFloat(value)
  const formattedValue = floatValue.toLocaleString('es-AR', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return (
    <div className="flex items-center space-x-4">
      <input
        type="range"
        min="0"
        max={range}
        defaultValue={value || 0}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <input
        type="text"
        value={formattedValue}
        readOnly
        className="w-40 bg-gray-100 border border-gray-300 rounded px-2 py-1 text-gray-700 text-sm"
      />
    </div>
  )
}

export default SliderInput
