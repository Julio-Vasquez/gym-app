import { useState } from 'react'
import { Form, Input, Radio, Row, Col, Button } from 'antd'
import { useDispatch } from 'react-redux'
import {
  AlipayOutlined,
  IdcardOutlined,
  PicLeftOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons'

import { updateClient } from './../../../services/Clients/ClientsSlice'

export const FormModal = ({ client, identification }) => {
  const { Item } = Form
  const { Group } = Radio

  const [form, setForm] = useState({
    name: client.name,
    lastName: client.lastName,
    phone: client.phone,
    role: client.role,
    identification: client.identification,
    debt: client.debt,
  })

  const dispatch = useDispatch()

  const onFinishForm = () => {
    if (form.debt === undefined) {
      setForm({ ...form, debt: 0 })
    }
    dispatch(updateClient(identification, form))
  }

  const onChangeForm = e =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })

  return (
    <Form
      id="form-update-client"
      onFinish={onFinishForm}
      onChange={onChangeForm}
      initialValues={{
        nameI: form.name,
        lastNameI: form.lastName,
        phoneI: form.phone,
        roleI: form.role,
        identificationI: form.identification,
        debtI: form.debt,
      }}
    >
      <Row>
        <Col xs={{ span: 11 }}>
          <Item
            name="nameI"
            label="Nombres"
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
        <Col xs={{ span: 11, offset: 1 }}>
          <Item
            name="lastNameI"
            label="Apellidos"
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
        <Col xs={{ span: 11 }}>
          <Item
            name="phoneI"
            label="Telefono"
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
        <Col xs={{ span: 11, offset: 1 }}>
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
      <Row>
        <Col xs={{ span: 11 }}>
          <Item
            name="identificationI"
            label="identificación"
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
        <Col xs={{ span: 11, offset: 1 }}>
          <Item
            name="debtI"
            label="Mora"
            rules={[
              { required: true, message: 'Mora es requerido' },
              { pattern: /^\d+$/, message: 'valor minimo 0' },
            ]}
            hasFeedback
          >
            <Input
              placeholder="Mora"
              name="debt"
              type="number"
              min="0"
              prefix={<PicLeftOutlined />}
            />
          </Item>
        </Col>
      </Row>
      <Row>
        <Button type="primary" htmlType="submit">
          Actualizar
        </Button>
      </Row>
    </Form>
  )
}
