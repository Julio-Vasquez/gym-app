import React, { useState } from "react";
import { Button, Space, Modal, Input, Form, Row } from "antd";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { suscription } from "./../../services/Suscription/SuscriptionActions";

export const AddTime = ({ identification, open, close }) => {
  const { Item } = Form;

  const [form, setForm] = useState({
    cost: 0,
    days: 0,
  });

  const dispatch = useDispatch();

  const onChangeForm = (e) => {
    console.log(e.target.name + ":" + e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onFinishForm = (e) => {
    console.log(form, identification);
    dispatch(suscription.addSuscription({ ...form, identification }));
  };

  return (
    <Space>
      <Modal
        centered={true}
        title="Agregar Tiempo"
        visible={open}
        onCancel={() => close(false)}
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
              <Input name="days" type="number" />
            </Item>
          </Row>
          <Row>
            <Item
              name="costI"
              label="Precio"
              rules={[
                { required: true, message: "Costo Requerido" },
                {
                  min: 4,
                  message: "El costo minimo es 1000",
                },
              ]}
            >
              <Input name="cost" type="number" />
            </Item>
          </Row>
          <Row>
            <Button type="primary" htmlType="submit">
              Agregar Tiempo
            </Button>
          </Row>
        </Form>
      </Modal>
    </Space>
  );
};

AddTime.propTypes = {
  identification: PropTypes.any,
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

AddTime.defaulrProps = {
  identification: 0,
};
