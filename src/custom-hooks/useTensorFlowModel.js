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

        // Realiza la solicitud HTTP para cargar el archivo JSON
        const response = await fetch('../model/model.json')
        console.log(response.json())
        // Comprueba si la solicitud HTTP fue exitosa
        if (!response.ok) {
          throw new Error('Error al cargar el modelo TensorFlow')
        }

        // Convierte el contenido JSON de la respuesta en un objeto
        const modelConfig = await response

        // Carga el modelo TensorFlow a partir de la configuración JSON
        const model = await tf.loadLayersModel(tf.io.fromMemory(modelConfig))

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
