// useLoanPredictor.js
import * as tf from '@tensorflow/tfjs'
import { useEffect, useState } from 'react'

const useTensorFlowModel = () => {
  const [model, setModel] = useState(null)
  const [result, setResult] = useState(0)
  const [elegible, setElegible] = useState(null)
  useEffect(() => {
    loadModel()
  }, [])

  const loadModel = async () => {
    try {
      const json = require('../model/model.json')
      const modelArchitecture = require('../model/model.json')
      const loadedModel = await tf.loadLayersModel(
        tf.io.fromMemory(json),
        tf.io.fromMemory(modelArchitecture),
      )
      if (loadModel && loadModel.predict) {
        console.log('Model loaded successfully.')
      }
      setModel(loadedModel)
    } catch (error) {
      console.error('Error loading the model:', error)
    }
  }

  const predict = async (data) => {
    if (!model) {
      console.error('The model is not loaded.')
      return
    }

    try {
      console.log(data)
      // Prepare input data
      const inputData = tf.tensor2d([data])
      console.log('Input Data:', inputData.arraySync()[0])
      // tfvis.show.modelSummary({ name: 'Resumen del Modelo' }, loadModel)

      // Make the prediction

      const prediction = model.predict(inputData)
      console.log('Prediction:', prediction)

      const predictionValues = await prediction.array()

      console.log('Prediction Values:', predictionValues)
      const predictionValue = prediction.dataSync()[0]
      console.log('Raw Prediction Value:', predictionValue)

      // Example: Log the layers of the model
      model.summary()

      const result = predictionValue > 0.5 ? 'eligible' : 'not eligible'

      // Set the prediction result in state
      setResult(Math.abs(predictionValue))
      setElegible(result)
      console.log('Prediction Result:', result)
    } catch (error) {
      console.error('Error during prediction:', error)
    }
  }

  return { result, predict, elegible }
}

export default useTensorFlowModel
