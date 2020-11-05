import React, { useState } from "react";
import { Button, Space, Modal, Input, Form, Row, message } from "antd";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { suscription } from "./../../services/Suscription/SuscriptionActions";

export const RemoveTime = ({ identification, open, close }) => {
  const { Item } = Form;

  const [form, setForm] = useState({
    days: 0,
  });

  const dispatch = useDispatch();

  const onChangeForm = (e) => {
    console.log(e.target.name + ":" + e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onFinishForm = (e) => {
    console.log(form, identification);
    if (form.days > 0) {
      close(false);
      dispatch(
        suscription.removeTime({
          ...form,
          identification,
        })
      );
    } else message.error("El valor de los dias debe ser mayor a cero");
  };

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
                  message: "Cantidad de dias requerido",
                },
                {
                  min: 1,
                  message: "Minimo 1 dia",
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
  );
};

RemoveTime.propTypes = {
  identification: PropTypes.any,
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

RemoveTime.defaulrProps = {
  identification: 0,
};
