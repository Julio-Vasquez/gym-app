import { useState } from 'react'
import {
  Button,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Radio,
  Row,
  Space,
} from 'antd'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { addSuscription } from '../../services/Suscription/SuscriptionSlice'

export const AddTimeTicket = ({ identification, open, close }) => {
  const { Item } = Form
  const { Group } = Radio

  const [error, setError] = useState(false)
  const [type, setType] = useState('Mensual')
  const [form, setForm] = useState({
    cost: 0,
    days: 0,
    debt: 0,
  })

  const dispatch = useDispatch()

  const onChangeForm = e =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const onChangeDebt = e => (e > form.cost ? setError(true) : setError(false))

  const onChangeCost = e =>
    parseInt(e.target.value) < form.debt ? setError(true) : setError(false)

  const onFinishForm = e => {
    close(false)
    if (form.debt <= parseInt(form.cost))
      dispatch(addSuscription({ ...form, identification, concept: type }))
    else
      message.error(
        'No puede decir que la deuda es mayor a lo que cuesta los dias facturados'
      )
  }

  const onChangeRadio = e => setType(e.target.value)

  return (
    <Space>
      <Modal
        centered={true}
        title="Agregar Tiempo"
        visible={open}
        onCancel={() => close(false)}
        onOk={() => close(false)}
        footer={[<div key="btn-modal"></div>]}
      >
        <Form onChange={onChangeForm} onFinish={onFinishForm}>
          <Row>
            <Item
              label="Tipo Pago"
              name="type_pay"
              rules={[{ required: true, message: 'Tipo pago, requqerido' }]}
            >
              <Group onChange={onChangeRadio} value={type}>
                <Radio value="Mensual">Mensual</Radio>
                <Radio value="Tiquetera">Tiquetera</Radio>
              </Group>
            </Item>
          </Row>
          <Row>
            <Item
              name="days"
              label="Dias"
              rules={[
                {
                  required: true,
                  message: 'Cantidad de dias requerido',
                },
                {
                  min: 1,
                  message: 'Minimo 1 dia',
                },
              ]}
            >
              <Input name="days" type="number" min="1" />
            </Item>
          </Row>
          <Row>
            <Item
              name="costI"
              label="Precio"
              rules={[
                { required: true, message: 'Costo Requerido' },
                {
                  min: 4,
                  message: 'El costo minimo es 1000',
                },
              ]}
            >
              <Input name="cost" type="number" onChange={onChangeCost} />
            </Item>
          </Row>
          <Row className={error && 'ant-form-item-has-error'}>
            <Item label="Mora" name="debtI">
              <InputNumber name="debt" min="1" onChange={onChangeDebt} />
            </Item>
            {error && (
              <div role="alert" name="displayError" className="error__debt">
                No puede decir que la deuda es mayor a lo que cuesta los dias
                facturados
              </div>
            )}
          </Row>
          <Row>
            <Button type="primary" htmlType="submit">
              Agregar Tiempo
            </Button>
          </Row>
        </Form>
      </Modal>
    </Space>
  )
}

AddTimeTicket.propTypes = {
  identification: PropTypes.any,
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
}

AddTimeTicket.defaulrProps = {
  identification: 0,
}
