import React, { useState } from "react";
import { Form, Button, Col, Card, Input } from "antd";
import { IdcardOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

import { check } from "./../../../services/Check/CheckActions";
import { ModalCheck } from "../../../components/ModalCheck";

const Check = () => {
  const [identification, setIdentification] = useState(0);
  const [open, setOpen] = useState(false);
  const [ok, setOk] = useState(false);

  const { Item } = Form;
  const dispatch = useDispatch();

  const clearInput = () => window.location.reload();

  const closeModal = () => {
    setOpen(!open);
    clearInput();
  };

  const okModal = () => {
    setOpen(false);
    setOk(true);
    setIdentification(0);
    clearInput();
  };

  const onChnageForm = (e) => {
    setIdentification(e.target.value);
  };

  const onFinishForm = (e) => {
    dispatch(check.checkPeopleIn(identification));
    setOpen(true);
  };

  return (
    <div className="check">
      <Col
        xs={{ span: 22, offset: 1 }}
        sm={{ span: 18, offset: 3 }}
        lg={{ span: 14, offset: 5 }}
        xl={{ span: 12, offset: 10 }}
        xxl={{ span: 10, offset: 10 }}
        className="check-content"
      >
        <Card className="check-content-card">
          <h2 className="text-center">Control de ingreso</h2>
          <p className="text-center">
            Aquí debe ingresar su número de documento para verificar su estado
            de afiliación
          </p>
          <Form onChange={onChnageForm} onFinish={onFinishForm}>
            <Item
              id="itemform"
              name="identification"
              rules={[
                {
                  required: true,
                  message: "Número de identificación requerido",
                },
                {
                  min: 6,
                  message:
                    "El número identificación debe contener mínimo 6 caracteres",
                },
                {
                  max: 14,
                  message:
                    "El número identificación debe contener máximo 14 caracteres",
                },
              ]}
            >
              <Input
                id="idCheck"
                prefix={<IdcardOutlined className="site-form-item-icon" />}
                placeholder="Número de identificación"
                type="number"
                autoFocus
                value={identification}
              />
            </Item>
            <div className="check-content-card-btn">
              <Button type="primary" htmlType="submit">
                Ingresar
              </Button>
            </div>
          </Form>
        </Card>
      </Col>

      <ModalCheck
        clear={setIdentification}
        open={open}
        title="Usuario"
        ok={okModal}
        close={closeModal}
        accept={ok}
        visible={open}
      />
    </div>
  );
};

export default Check;
