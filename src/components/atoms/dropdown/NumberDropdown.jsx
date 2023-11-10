import React from 'react'
import './numberDropdown.css'

const NumberDropdown = ({ value, onChange }) => {
  const numbers = Array.from({ length: 36 }, (_, index) => index + 1)

  return (
    <select
      value={value || 0}
      onChange={(e) => {
        onChange(e.target.value)
      }}
      className="custom-dropdown"
    >
      {numbers.map((number) => (
        <option key={number} value={number}>
          {number}
        </option>
      ))}
    </select>
  )
}

export default NumberDropdown
