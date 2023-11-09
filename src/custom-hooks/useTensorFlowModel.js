import * as tf from '@tensorflow/tfjs'
import { useEffect, useState } from 'react'

function useTensorFlowModel() {
  const [model, setModel] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadModel() {
      try {
        setLoading(true)

        // Carga el modelo TensorFlow a partir de la configuración JSON
        const model = await tf.loadLayersModel(
          tf.io.fromMemory(require('../model/model.json')),
        )

        if (model && model.predict) {
          console.log('Model has predict method')
        }

        setModel(model)
        setError(null)
        setLoading(false)
      } catch (error) {
        setError(error)
        console.error('Error al cargar el modelo TensorFlow:', error)
        setLoading(false)
      }
    }

    loadModel()
  }, [])

  return { loading, error, model }
}

export default useTensorFlowModel
