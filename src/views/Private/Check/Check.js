import React, { useState } from "react";
import { Form, Input, Button, Col, Card } from "antd";
import { IdcardOutlined } from "@ant-design/icons";
import { ModalCheck } from "./components/ModalCheck";

const Check = () => {
  const { Item } = Form;
  const [identification, setIdentification] = useState();
  const [open, setOpen] = useState(false);
  const [ok, setOk] = useState(false);

  const closeModal = () => setOpen(!open);

  const okModal = () => {
    setOpen(false);
    setOk(true);
  };

  const onChnageForm = (e) => {
    console.log(e.target.value)
    setIdentification(e.target.value);
  };

  const onFinishForm = (e) => {
    console.log(`Finish Form Whit ID : ${identification}`)
  };

  const data = [{ name: "julio", lastName: "vasquez" }];
  return (
    <div className="check">
      <Col
        xs={{ span: 22, offset: 1 }}
        sm={{ span: 18, offset: 3 }}
        lg={{ span: 14, offset: 5 }}
        xl={{ span: 12, offset: 6 }}
        xxl={{ span: 10, offset: 7 }}
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
                prefix={<IdcardOutlined className="site-form-item-icon" />}
                placeholder="Número de identificación"
                type="number"
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
        data={data}
        open={open}
        title="example"
        ok={okModal}
        close={closeModal}
        accept={ok}
      />
    </div>
  );
};

export default Check;
