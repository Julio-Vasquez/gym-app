import { useState } from 'react'
import { Button, Space, Modal, Input, Form, Row } from 'antd'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { removeTime } from './../../services/Suscription/SuscriptionSlice'

export const RemoveTime = ({ identification, open, close }) => {
  const { Item } = Form

  const [form, setForm] = useState({
    days: 0,
  })

  const dispatch = useDispatch()

  const onChangeForm = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onFinishForm = e => {
    close(false)
    dispatch(
      removeTime({
        ...form,
        identification,
      })
    )
  }

  return (
    <Space>
      <Modal
        centered={true}
        title="Remover Tiempo"
        visible={open}
        onCancel={() => close(false)}
        onOk={() => close(false)}
        footer={[<div key="btn-modal"></div>]}
      >
        <Form onChange={onChangeForm} onFinish={onFinishForm}>
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
            <Button type="primary" htmlType="submit">
              Remover Tiempo
            </Button>
          </Row>
        </Form>
      </Modal>
    </Space>
  )
}

RemoveTime.propTypes = {
  identification: PropTypes.any,
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
}

RemoveTime.defaulrProps = {
  identification: 0,
}
