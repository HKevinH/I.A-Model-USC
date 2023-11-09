import React from 'react'
import useTensorFlowModel from '../../custom-hooks/useTensorFlowModel'
const Simulation = () => {
  const [count, setCount] = React.useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }
  const { model, predictions, isLoading } = useTensorFlowModel()

  console.log(model, predictions, isLoading)
  return (
    <div>
      <h1>Simulation Component</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment Count</button>
    </div>
  )
}

export { Simulation }
