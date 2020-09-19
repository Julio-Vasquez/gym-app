import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  DashboardOutlined,
  UserOutlined,
  MenuOutlined,
  QrcodeOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

import "./Layout.scss";

const Layout = ({ appName, logo, children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [visibleBtnFixed, setVisibleBtnFixed] = useState(false);

  const onClickNavOpen = () => {
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("nav-open");
  };

  useEffect(() => {
    const mostrarBotonFixed = () => {
      const scroll = document.documentElement.scrollTop;
      if (scroll >= 25) {
        setNavbar(true);
        setVisibleBtnFixed(true);
      } else {
        setNavbar(false);
        setVisibleBtnFixed(false);
      }
    };
    document.addEventListener("scroll", mostrarBotonFixed);
  }, []);

  const onClickSidebar = () => {
    setVisibleBtnFixed(false);
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="wrapper">
      <div
        className={sidebarVisible ? "sidebar toggle" : "sidebar"}
        id="sidebar"
      >
        <div className="sidebar-wrapper">
          <div className="logo-rc">
            <img src={logo} alt="logo app" />
            <span>{appName}</span>
          </div>
          <div className="nav">
            <ul>
              <li>
                <a href="/">
                  <DashboardOutlined />
                  <span>dashboard</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fas fa-cash-register"></i>
                  <span>ventas</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <UserOutlined />
                  <span>clientes</span>
                </a>
              </li>
              <li>
                <a href="/">
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
          <div
            className={navbar ? "navbar-bar none" : "navbar-bar"}
            id="content-buttons"
          >
            <button id="boton-sidebar" onClick={onClickSidebar}>
              <MenuOutlined />
            </button>
            <button id="boton-sidebar_left" onClick={onClickNavOpen}>
              <QrcodeOutlined />
            </button>
            <div
              className={
                visibleBtnFixed ? "navbar-bar_fixed block" : "navbar-bar_fixed"
              }
              id="content-button_fixed"
            >
              <button id="boton-sidebar_fixed">
                <BarChartOutlined />
              </button>
            </div>
            <p>Dashboard</p>
          </div>
          <div className="navbar-options">
            <div className="photo">
              <img src="" alt="logo user" />
            </div>
          </div>
        </nav>
        <div className={sidebarVisible ? "content main" : "content"} id="main">
          {children}
          <div className="footer-dashboard">
            <p>
              © 2020 hecho con <i className="far fa-heart"></i> de Rhaegar Code
              para mis suscriptores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  appName: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Layout;
