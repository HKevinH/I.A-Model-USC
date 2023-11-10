import React from 'react'
import './button.css'
const ButtonBase = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="btn-Primary">
      {children}
    </button>
  )
}

export default ButtonBase
