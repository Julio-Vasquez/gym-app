import React, { useState } from "react";
import PropTypes from "prop-types";

const Login = ({ appName }) => {
  const name = appName.split(" ");
  const [form, setForm] = useState({ user: "", password: "" });

  const onChangeForm = (e) => {
    console.log([e.target.name] + ":" + [e.target.value]);
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };

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
      <div className="login">
        <input
          type="text"
          placeholder="username"
          name="user"
          onChange={onChangeForm}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={onChangeForm}
        />
        <br />

        <input type="button" value="Login" />
        <br />
        <br />
        <a href="/reset-password" id="forgot">
          Olvidaste tu contraseña?
        </a>
      </div>
    </div>
  );
};
Login.propTypes = {
  appName: PropTypes.string.isRequired,
};
export default Login;
