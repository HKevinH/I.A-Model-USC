import { Power3, TweenMax } from 'gsap'
import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import NumberDropdown from '../../components/atoms/dropdown/NumberDropdown'
import Input from '../../components/atoms/input/Input'
import SliderInput from '../../components/atoms/sliderInput/SliderInput'
import TextField from '../../components/atoms/textField/TextField'
import useTensorFlowModel from '../../custom-hooks/useTensorFlowModel'
import { newsData } from '../../res/Const'

const Simulation = ({ history }) => {
  const range = 1000000

  const [name, setName] = useState('')
  const [months, setMonths] = useState(0)
  const [expenses, setExpenses] = useState(0)
  const [salary, setSalary] = useState(0)
  const { predict, result, elegible } = useTensorFlowModel()
  const [amount, setAmount] = useState(0)

  const handleNameChange = (value) => setName(value)
  const handleMonthsChange = (value) => setMonths(value)
  const handleExpensesChange = (value) => setExpenses(value)
  const handleAmountChange = (value) => setAmount(value)
  const handleSalaryChange = (value) => setSalary(value)

  const handlePredict = async () => {
    try {
      if (!expenses || !amount || !months || !salary) {
        alert('Please fill in all the fields.')
        return
      }

      const dataPoint = [
        parseFloat(amount),
        parseFloat(salary),
        parseFloat(expenses),
        parseInt(months),
      ]
      await predict(dataPoint)
      TweenMax.from('.simulation', 1, {
        opacity: 0,
        y: -50,
        ease: Power3.easeOut,
      })
    } catch (error) {
      console.error('Error during prediction:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl space-y-4 my-10">
        <div className="space-y-4 ">
          <h1 class="text-3xl font-bold ">Simulacion</h1>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Introduce Tu Nombre
          </label>
          <Input
            onChange={handleNameChange}
            placeholder={'Type Your Name'}
            value={name}
          />
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Ingresa Los Meses
          </label>
          <NumberDropdown onChange={handleMonthsChange} value={months} />
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Introduce Tus Gastos
          </label>
          <SliderInput
            range={range}
            onChange={handleExpensesChange}
            value={expenses}
          />
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Introduce El Salario
          </label>
          <SliderInput
            range={range}
            onChange={handleSalaryChange}
            value={salary}
          />
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Ingresa El Monto
          </label>
          <SliderInput
            range={range}
            onChange={handleAmountChange}
            value={amount}
          />
          <TextField text={`Tu Couta De Mes Es El Siguiente: ${result} `} />
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handlePredict}
          >
            Predecir
          </button>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {newsData.map((news, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h5 className="text-lg font-semibold">{news.title}</h5>
                  <p className="text-gray-600 text-sm">{news.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Simulation)
