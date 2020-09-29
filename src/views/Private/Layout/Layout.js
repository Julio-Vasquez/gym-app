import React, { useState, useEffect } from "react";
import {
  DashboardOutlined,
  UserOutlined,
  MenuOutlined,
  QrcodeOutlined,
  BarChartOutlined,
  LoginOutlined,
  UserSwitchOutlined
} from "@ant-design/icons";
import PropTypes from "prop-types";

const Layout = ({ appName, logo, children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [visibleBtnFixed, setVisibleBtnFixed] = useState(false);

  const onClickNavOpen = () => {
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("nav-open");
  };

  useEffect(() => {
    const showButtonFixed = () => {
      const scroll = document.documentElement.scrollTop;
      if (scroll >= 25) {
        setNavbar(true);
        setVisibleBtnFixed(true);
      } else {
        setNavbar(false);
        setVisibleBtnFixed(false);
      }
    };
    document.addEventListener("scroll", showButtonFixed);
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
                <a href="/dashboard">
                  <DashboardOutlined className="span-icon" />
                  <span>dashboard</span>
                </a>
              </li>
              <li>
                <a href="/check">
                  <LoginOutlined className="span-icon" />
                  <span>Ingreso Gym</span>
                </a>
              </li>
              <li>
                <a href="/clients">
                  <UserOutlined className="span-icon" />
                  <span>clientes</span>
                </a>
              </li>
              <li>
                <a href="/trainers">
                  <UserSwitchOutlined className="span-icon" />
                  <span>entrenadores</span>
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
              <img src={logo} alt="logo user" />
            </div>
          </div>
        </nav>
        <div className={sidebarVisible ? "content main" : "content"} id="main">
          <div className="grid-row">
            <div className="card-chart card">
              {children}
            </div>
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
