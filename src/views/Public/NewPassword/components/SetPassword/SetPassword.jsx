import { useState, useEffect } from 'react'
import { Col, Card, Row, Form, Button, Input, message } from 'antd'
import { AlipayOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { string } from 'prop-types'

import { RedirectButton } from '../../../../../components/RedirectButton'
import { Loading } from '../../../../../components/Loading'

import { newPassword, Auth } from '../../../../../services/Auth/AuthSlice'
import { useData } from '../../../../../hooks/useData'

export const SetPassword = ({ token }) => {
  const { Item } = Form
  const dispatch = useDispatch()
  const { loading, success } = useData({ reducer: Auth })

  useEffect(() => {
    if (success.newPassword) message.success('Cambio de contraseña exitoso!')
  }, [success.newPassword])

  const [form, setForm] = useState({
    password: '',
    confirmPassword: '',
  })

  const onChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = () => {
    dispatch(newPassword({ password: form.password, token: token }))
  }

  return loading ? (
    <Loading />
  ) : (
    <div className="new-password-content">
      <Col
        xs={{ span: 22, offset: 1 }}
        sm={{ span: 16, offset: 4 }}
        lg={{ span: 12, offset: 6 }}
        xl={{ span: 10, offset: 7 }}
        xxl={{ span: 8, offset: 8 }}
        className="new"
      >
        <Card className="new-password">
          <Row justify="center">
            <Col span={20} className="new-password__R">
              <h2 className="text-center">Nueva contraseña</h2>
              <p className="text-center">
                Aquí puedes ingresar tu nueva contraseña
              </p>
              <Form onChange={onChange} onFinish={onSubmit}>
                <Item
                  name="passwordI"
                  rules={[
                    {
                      required: true,
                      message: 'Por favor ingresa la nueva contraseña',
                    },
                    {
                      min: 4,
                      message:
                        'La contraseña debe contener al menos 4 caracteres',
                    },
                    {
                      max: 45,
                      message:
                        'La contraseña debe contener maximo 4 caracteres',
                    },
                  ]}
                  hasFeedback
                >
                  <Input
                    prefix={<AlipayOutlined className="site-form-item-icon" />}
                    placeholder="Ingrese nueva contraseña"
                    type="password"
                    name="password"
                  />
                </Item>
                <Item
                  name="confirmPasswordI"
                  dependencies={['passwordI']}
                  rules={[
                    {
                      required: true,
                      message: 'Por favor confirme la nueva contraseña',
                    },
                    {
                      min: 4,
                      message:
                        'La contraseña debe contener al menos 4 caracteres',
                    },
                    {
                      max: 45,
                      message:
                        'La contraseña debe contener maximo 4 caracteres',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        return !value || getFieldValue('passwordI') === value
                          ? Promise.resolve()
                          : Promise.reject(
                              '¡Las dos contraseñas que ingresó no coinciden!'
                            )
                      },
                    }),
                  ]}
                  hasFeedback
                >
                  <Input
                    prefix={<AlipayOutlined className="site-form-item-icon" />}
                    placeholder="Confirmar nueva contraseña"
                    type="password"
                    name="confirmPassword"
                  />
                </Item>
                <div className="new-password__R__btn">
                  <Button type="danger" htmlType="submit">
                    Cambiar contraseña
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Card>
        <RedirectButton url="/login" imgPath="house.png" urlName="Login" />
      </Col>
    </div>
  )
}

SetPassword.propTypes = {
  token: string.isRequired,
}
