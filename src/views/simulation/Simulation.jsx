import React from 'react'

const Simulation = () => {
  const [count, setCount] = React.useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>Simulation Component</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment Count</button>
    </div>
  )
}

export { Simulation }
