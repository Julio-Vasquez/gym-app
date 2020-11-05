import React, { useState } from "react";
import { Button, Space, Modal, Input, Form, Row, Radio } from "antd";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { suscription } from "./../../services/Suscription/SuscriptionActions";

export const AddTimeTicket = ({ identification, open, close }) => {
  const { Item } = Form;
  const { Group } = Radio;

  const [type, setType] = useState("Mensual");
  const [form, setForm] = useState({
    cost: 0,
    days: 0,
  });

  const dispatch = useDispatch();

  const onChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onFinishForm = (e) => {
    close(false);
    dispatch(
      suscription.addSuscription({ ...form, identification, concept: type })
    );
  };

  const onChangeRadio = (e) => {
    console.log(e.target.value);
    setType(e.target.value);
  };

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
              rules={[{ required: true, message: "Tipo pago, requqerido" }]}
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

AddTimeTicket.propTypes = {
  identification: PropTypes.any,
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

AddTimeTicket.defaulrProps = {
  identification: 0,
};
