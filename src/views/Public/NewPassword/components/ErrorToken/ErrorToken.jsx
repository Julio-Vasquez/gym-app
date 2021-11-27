import { Link } from 'react-router-dom'

export const ErrorToken = () => (
  <div id="notFound">
    <div className="notFound">
      <div className="notFound-404">
        <h1>404</h1>
        <h2>Solicitud Invalida</h2>
      </div>
      <Link to="/">Inicio</Link>
    </div>
  </div>
)
