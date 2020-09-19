import React, { useState } from "react";

const Login = () => {
  //window.scrollTo(0, 0);
  const [form, setForm] = useState({ user: "", password: "" });

  const onChangeForm = (e) => {
    console.log([e.target.name] + ":" + [e.target.value]);
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };

  return (
    <div className="fragmento">
      <div className="body"></div>
      <div className="header">
        <div>
          Cool<span> Gym </span>
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
      </div>
    </div>
  );
};

export default Login;
