import React, { useState } from "react";
import { Form, Input } from "antd";
import { UserOutlined, AlipayOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { auth } from "../../../services/Auth/AuthActions";

const Login = ({ appName }) => {
  const name = appName.split(" ");
  const [form, setForm] = useState({ user: "", password: "" });
  const dispatch = useDispatch();

  const onChangeForm = (e) => {
    console.log([e.target.name] + ":" + e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onFinishForm = (e) => {
    const { password, user } = form;
    dispatch(auth.login(user, password));
  };

  const { Item } = Form;

  return (
    <div className="fragmento">
      <div className="body"></div>
      <div className="header">
        <div className="name-app-hover">
          <a href="/">
            {name[0]}
            <span> {name[1]} </span>
          </a>
        </div>
      </div>
      <br />
      <Form onChange={onChangeForm} onFinish={onFinishForm}>
        <div className="login">
          <Item
            name="usernameI"
            rules={[
              {
                required: true,
                message: "Nombre de usuario es requerido",
              },
              { min: 4, message: "Mínimo debe haber 4 caracteres" },
              { max: 45, message: "Máximo debe haber  45 caracteres" },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              type="text"
              placeholder="Nombre de usuario"
              name="user"
            />
          </Item>
          <Item
            name="passwordI"
            rules={[
              {
                required: true,
                message: "Contraseña es requerida",
              },
              { min: 4, message: "Mínimo debe haber 4 caracteres" },
              { max: 45, message: "Máximo debe haber  45 caracteres" },
            ]}
          >
            <Input
              prefix={<AlipayOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="********"
              name="password"
            />
          </Item>

          <input type="submit" value="Login" />
          <br />
          <br />
          <a href="/reset-password" id="forgot">
            Olvidaste tu contraseña?
          </a>
        </div>
      </Form>
    </div>
  );
};

Login.propTypes = {
  appName: PropTypes.string.isRequired,
};

export default Login;
