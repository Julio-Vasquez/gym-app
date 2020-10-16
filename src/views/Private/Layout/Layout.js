import React, { useState, useEffect } from "react";
import {
  DashboardOutlined,
  UserOutlined,
  MenuOutlined,
  QrcodeOutlined,
  BarChartOutlined,
  LoginOutlined,
  UserSwitchOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import { useDispatch } from "react-redux";
import { auth } from "./../../../services/Auth/AuthActions";
import PropTypes from "prop-types";

const Layout = ({ appName, children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [visibleBtnFixed, setVisibleBtnFixed] = useState(false);

  const onClickNavOpen = () => {
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("nav-open");
  };
  const dispatch = useDispatch();

  const onCLickLogout = () => {
    dispatch(auth.logout());
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
            <img src={require("./../../../assets/img/mb.jpg")} alt="logo app" />
            <span>{appName}</span>
          </div>
          <div className="nav">
            <ul>
              <li>
                <a href="/dashboard">
                  <Tooltip title="Dashboard">
                    <DashboardOutlined className="span-icon" />
                  </Tooltip>
                  <span>dashboard</span>
                </a>
              </li>
              <li>
                <a href="/check">
                  <Tooltip title="Ingreso">
                    <LoginOutlined className="span-icon" />
                  </Tooltip>
                  <span>Ingreso Gym</span>
                </a>
              </li>
              <li>
                <a href="/clients">
                  <Tooltip title="Clientes">
                    <UserOutlined className="span-icon" />
                  </Tooltip>
                  <span>clientes</span>
                </a>
              </li>
              <li>
                <a href="/trainers">
                  <Tooltip title="Entrenadores">
                    <UserSwitchOutlined className="span-icon" />
                  </Tooltip>
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
              <Tooltip title="Mostrar Menus">
                <QrcodeOutlined />
              </Tooltip>
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
            <Tooltip title="Cerrar sesión">
              <LogoutOutlined className="photo" onClick={onCLickLogout} />
            </Tooltip>
          </div>
        </nav>
        <div className={sidebarVisible ? "content main" : "content"} id="main">
          <div className="grid-row">
            <div className="card-chart card">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  appName: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Layout;
