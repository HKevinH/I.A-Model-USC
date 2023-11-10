import { React, useEffect, useState } from 'react'
import ButtonBase from '../../components/atoms/button/Button'
import NumberDropdown from '../../components/atoms/dropdown/NumberDropdown'
import Input from '../../components/atoms/input/Input'
import SliderInput from '../../components/atoms/sliderInput/SliderInput'
import useTensorFlowModel from '../../custom-hooks/useTensorFlowModel'
import './simulation.css'
const Simulation = () => {
  const range = 1000000

  const [name, setName] = useState('')
  const [months, setMonths] = useState(0)
  const [expenses, setExpenses] = useState(0)
  const { model, predictions, isLoading } = useTensorFlowModel()
  const [amount, setAmount] = useState(0)
  const handleName = (value) => {
    setName(value)
  }

  const handleMonths = (value) => {
    setMonths(value)
  }

  const handleExpenses = (value) => {
    setExpenses(value)
  }

  const handleAmount = (value) => {
    setAmount(value)
  }

  const handlePredict = () => {
    const data = [months, expenses, amount, name]
    console.log('data', data)
    console.log('model', model)
  }
  useEffect(() => {
    return () => {
      // if (model) {
      //   model.dispose()
      // }
    }
  }, [model])

  return (
    <div className="container-principal">
      <div className="container-simulation">
        <div className="simulation">
          <h1 className="title">Simulador</h1>
          <>
            {' '}
            <label className="name" htmlFor="">
              Ingresa Tu Nombre
            </label>
            <Input onChange={handleName} placeholder={'Escribe Tu Nombre'} />
            <label className="name" htmlFor="">
              Ingresa Los Meses
            </label>
            <NumberDropdown onChange={handleMonths} value={months} />
            <label className="name" htmlFor="">
              Ingresa Gastos
            </label>
            <SliderInput
              range={range}
              onChange={handleExpenses}
              value={expenses}
            />
            <label className="name" htmlFor="">
              Ingresa El Monto
            </label>
            <SliderInput range={range} onChange={handleAmount} value={amount} />
            <ButtonBase onClick={handlePredict} children={'predecir'} />
          </>
        </div>
      </div>
    </div>
  )
}

export { Simulation }
