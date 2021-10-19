import { useState } from 'react'
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Radio,
  Row,
  Space,
} from 'antd'

import {
  WhatsAppOutlined,
  IdcardOutlined,
  AlipayOutlined,
} from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { createClient } from '../../services/Clients/ClientsSlice'

export const ModalNewClient = ({ open, close, title }) => {
  const { Item } = Form
  const { Group } = Radio

  const [form, setForm] = useState({
    name: '',
    lastName: '',
    identification: 0,
    dateBirth: '',
    gender: '',
    phone: '',
    role: '',
  })

  const dispatch = useDispatch()

  const onFinishForm = () => {
    close(false)
    dispatch(createClient(form))
  }

  const onChangeForm = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onChangeDatePicker = (_, date) => {
    setForm({ ...form, dateBirth: date })
  }

  return (
    <div>
      <Space>
        <Modal
          title={title}
          centered={true}
          visible={open}
          width={700}
          onCancel={() => close(false)}
          footer={[
            <div key="btn-modal">
              <Button onClick={() => close(false)}>Cancelar</Button>
              <Button
                form="form-client"
                key="submit"
                htmlType="submit"
                type="primary"
              >
                Crear
              </Button>
            </div>,
          ]}
        >
          <Form
            id="form-client"
            onFinish={onFinishForm}
            onChange={onChangeForm}
          >
            <Row>
              <Col xs={{ span: 10, offset: 1 }}>
                <Item
                  name="nameI"
                  rules={[
                    {
                      required: true,
                      message: 'Por favor ingresa su nombre',
                    },
                    {
                      min: 3,
                      message: 'El nombre de contener al menos 3 caracteres',
                    },
                    {
                      max: 75,
                      message: 'El nombre de contener máximo 75 caracteres',
                    },
                  ]}
                  hasFeedback
                >
                  <Input
                    placeholder="Nombre"
                    name="name"
                    prefix={<AlipayOutlined />}
                  />
                </Item>
              </Col>
              <Col xs={{ span: 10, offset: 2 }}>
                <Item
                  name="lastNameI"
                  rules={[
                    {
                      required: true,
                      message: 'Por favor ingresa su Apellido',
                    },
                    {
                      min: 3,
                      message: 'El apellido de contener al menos 3 caracteres',
                    },
                    {
                      max: 75,
                      message: 'El apellido de contener máximo 75 caracteres',
                    },
                  ]}
                  hasFeedback
                >
                  <Input
                    placeholder="Apellido"
                    name="lastName"
                    prefix={<AlipayOutlined />}
                  />
                </Item>
              </Col>
            </Row>

            <Row>
              <Col xs={{ span: 10, offset: 1 }}>
                <Item
                  name="phoneI"
                  rules={[
                    {
                      required: true,
                      message: 'El número telefónico es requerido.',
                    },
                    {
                      len: 10,
                      message: 'Deben ser 10 caracteres.',
                    },
                  ]}
                  hasFeedback
                >
                  <Input
                    placeholder="Teléfono"
                    name="phone"
                    type="number"
                    prefix={<WhatsAppOutlined />}
                  />
                </Item>
              </Col>
              <Col xs={{ span: 10, offset: 2 }}>
                <Item
                  name="identificationI"
                  rules={[
                    {
                      required: true,
                      message: 'El número de identificación es requerido.',
                    },
                    {
                      min: 6,
                      message: 'Mínimo 6 caracteres.',
                    },
                    {
                      max: 12,
                      message: 'Máximo 12 caracteres.',
                    },
                  ]}
                  hasFeedback
                >
                  <Input
                    placeholder="Identificación"
                    name="identification"
                    type="number"
                    prefix={<IdcardOutlined />}
                  />
                </Item>
              </Col>
            </Row>

            <Row>
              <Col xs={{ span: 10, offset: 1 }}>
                <Item
                  name="dateBirthI"
                  rules={[
                    {
                      required: false,
                    },
                    () => ({
                      validator(rule, value) {
                        let year = new Date().getFullYear() - 10
                        if (value === undefined) return Promise.resolve()
                        if (value.year() <= year) return Promise.resolve()
                        return Promise.reject(
                          'Usted debe tener al menos 10 años'
                        )
                      },
                    }),
                  ]}
                  hasFeedback
                >
                  <DatePicker
                    name="dateBirth"
                    placeholder="Fecha de Nacimiento"
                    style={{ width: '100%' }}
                    onChange={onChangeDatePicker}
                  />
                </Item>
              </Col>
              <Col xs={{ span: 10, offset: 2 }}>
                <Item
                  name="genderI"
                  hasFeedback
                  rules={[{ required: true, message: 'Seleccione un genero' }]}
                  label="Genero"
                >
                  <Group name="gender">
                    <Radio value="Masculino">Masculino</Radio>
                    <Radio value="Femenino">Femenino</Radio>
                  </Group>
                </Item>
              </Col>
            </Row>
            <Row>
              <Col xs={{ offset: 1 }}>
                <Item
                  hasFeedback
                  name="roleI"
                  rules={[{ required: true, message: 'Seleccione un rol' }]}
                  label="Rol"
                >
                  <Group name="role">
                    <Radio value="Cliente"> Cliente</Radio>
                    <Radio value="Entrenador"> Entrenador</Radio>
                  </Group>
                </Item>
              </Col>
            </Row>
          </Form>
        </Modal>
      </Space>
    </div>
  )
}
ModalNewClient.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}
