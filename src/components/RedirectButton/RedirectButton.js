import PropTypes from 'prop-types'
import home from './../../assets/img/house.png'

export const RedirectButton = ({ url, imgPath, urlName }) => {
  return (
    <a href={url} className="made-with-mk">
      <div className="brand">
        <img src={home} alt={urlName} />
      </div>
      <div className="made-with-text">
        Volver a<span> {urlName} </span>
      </div>
    </a>
  )
}

RedirectButton.propTypes = {
  url: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  urlName: PropTypes.string.isRequired,
}
