import React from 'react';

import "./Layout.scss"
const layout = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="sidebar" id="sidebar">
        <div className="sidebar-wrapper">
          <div className="logo-rc">
            <img src="images/logo.png" />
            <span>Cool Gym App</span>
          </div>
          <div className="nav">
            <ul>
              <li>
                <a href="">
                  <i className="fas fa-tachometer-alt"></i>
                  <span>dashboard</span>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fas fa-cash-register"></i>
                  <span>ventas</span>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fas fa-users"></i>
                  <span>clientes</span>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fas fa-money-bill-wave"></i>
                  <span>ganancias</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="main-panel">
        <nav className="navbar">
          <div className="navbar-bar" id="content-buttons">
            <button id="boton-sidebar">
              <i className="fas fa-bars"></i>
            </button>
            <button id="boton-sidebar_left">
              <i className="fas fa-qrcode"></i>
            </button>
            <div className="navbar-bar_fixed" id="content-button_fixed">
              <button id="boton-sidebar_fixed">
                <i className="fas fa-chart-bar"></i>
              </button>
            </div>
            <p>Dashboard</p>
          </div>
          <div className="navbar-options">
            <i className="fas fa-search"></i>
            <i className="far fa-bell"></i>
            <div className="photo">
              <img src="images/foto.jpeg" />
            </div>
          </div>
        </nav>
        <div className="content" id="main">
          {children}
          <div className="footer-dashboard">
            <p>© 2020 hecho con <i className="far fa-heart"></i> de Rhaegar Code para mis suscriptores.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default layout
