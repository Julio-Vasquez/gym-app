import React from 'react'
import PropTypes from 'prop-types'

export const RedirectButton = ({ url, imgPath, urlName }) => {

  return (
    <a href={url} className="made-with-mk">
      <div className="brand">
        <img src={require(`./../../assets/img/${imgPath}`)} alt={urlName} />
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
  urlName: PropTypes.string.isRequired
}
