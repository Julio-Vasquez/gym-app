import { message } from "antd";

export function FailedConnectionServer() {
  message.error(`Conexion con el servidor fallida`);
  return new TypeError("ERROR_CONNECTION");
}
