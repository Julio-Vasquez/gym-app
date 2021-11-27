import { useState } from 'react'
import { Button, Space, Modal, Input, Form, Row } from 'antd'
import { any, bool, func } from 'prop-types'
import { useDispatch } from 'react-redux'

import { removeTime } from '../../services/Suscription/SuscriptionSlice'

export const RemoveTime = ({ identification, open, close }) => {
  const { Item } = Form
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    days: 0,
  })

  const onChangeForm = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onFinishForm = () => {
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
  identification: any,
  open: bool.isRequired,
  close: func.isRequired,
}

RemoveTime.defaulrProps = {
  identification: 0,
}
