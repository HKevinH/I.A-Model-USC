import React from 'react'
import './sliderInput.css'

const SliderInput = ({ range, onChange, value }) => {
  return (
    <div className="slider-input">
      <input
        type="range"
        min="0"
        max={range}
        defaultValue={value || 0}
        onChange={(e) => onChange(e.target.value)}
        className="range-input"
      />
      <input type="text" value={`$${value}`} readOnly className="money-input" />
    </div>
  )
}

export default SliderInput
