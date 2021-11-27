import { useState } from 'react'
import { Form, Input } from 'antd'
import { UserOutlined, AlipayOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { string } from 'prop-types'
import { Link } from 'react-router-dom'

import { login } from '../../../services/Auth/AuthSlice'

const Login = ({ appName }) => {
  const name = appName.split(' ')
  const { Item } = Form
  const dispatch = useDispatch()

  const [form, setForm] = useState({ user: '', password: '' })

  const onChangeForm = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onFinishForm = () =>
    dispatch(login({ userName: form.user, password: form.password }))

  return (
    <div className="fragmento">
      <div className="body"></div>
      <div className="content-login">
        <div className="header">
          <div className="name-app-hover">
            <Link to="/">
              {name[0]}
              <span> {name[1]} </span>
            </Link>
          </div>
        </div>
        <Form onChange={onChangeForm} onFinish={onFinishForm}>
          <div className="login">
            <Item
              name="usernameI"
              rules={[
                {
                  required: true,
                  message: 'Nombre de usuario es requerido',
                },
                { min: 4, message: 'Mínimo debe haber 4 caracteres' },
                { max: 45, message: 'Máximo debe haber  45 caracteres' },
              ]}
              hasFeedback
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
                  message: 'Contraseña es requerida',
                },
                { min: 4, message: 'Mínimo debe haber 4 caracteres' },
                { max: 45, message: 'Máximo debe haber  45 caracteres' },
              ]}
              hasFeedback
            >
              <Input
                prefix={<AlipayOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="********"
                name="password"
              />
            </Item>
            <input type="submit" value="Login" />

            <div className="login_forgot">
              <Link to="/reset-password" id="forgot">
                Olvidaste tu contraseña?
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}

Login.propTypes = {
  appName: string.isRequired,
}

export default Login
