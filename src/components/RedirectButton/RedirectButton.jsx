import { Link } from 'react-router-dom'
import { string } from 'prop-types'

import home from './../../assets/img/house.png'

export const RedirectButton = ({ url, imgPath, urlName }) => {
  return (
    <Link to={url} className="made-with-mk">
      <div className="brand">
        <img src={home} alt={urlName} />
      </div>
      <div className="made-with-text">
        Volver a<span> {urlName} </span>
      </div>
    </Link>
  )
}

RedirectButton.propTypes = {
  url: string.isRequired,
  imgPath: string.isRequired,
  urlName: string.isRequired,
}
