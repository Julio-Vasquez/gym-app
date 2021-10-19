import { message } from 'antd'

export const FailedConnectionServer = () => {
  message.error(`Conexion con el servidor fallida`)
  return new TypeError('ERROR_CONNECTION')
}
