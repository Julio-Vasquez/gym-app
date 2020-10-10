import React, { useState, useEffect } from "react";
import { Form, Input, Button, Row, Col, Card, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

import { auth } from "../../../services/Auth/AuthActions";
import { Loading } from "../../../components/Loading";
import { RedirectButton } from "../../../components/RedirectButton";

const ResetPassword = ({ appName }) => {
  const name = appName.split(" ");

  const { Item } = Form;
  const getSize = () => document.body.clientWidth < 833;
  const handleResize = () => setLock(getSize());
  const [lock, setLock] = useState(getSize);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const dispatch = useDispatch();

  const { loading, success } = useSelector((state) => state.Auth);

  useEffect(()=>{
    if(success.ResetPassword)
      message.success('Reinicio de contraseña exitoso, revise su correo electronico')
  },[success.ResetPassword]);

  const onChange = (e) => setUserName(e.target.value);

  const onSubmit = () => {
    dispatch(auth.resetPassword(userName));
  };

  return loading ? (
    <Loading />
  ) : (
      <div className="bg-reset">
        <Col
          xs={{ span: 22, offset: 1 }}
          sm={{ span: 18, offset: 3 }}
          lg={{ span: 14, offset: 5 }}
          xl={{ span: 12, offset: 6 }}
          xxl={{ span: 10, offset: 7 }}
          className="forgot"
        >
          <Card className="forgot-password">
            <Row justify="center">
              <Col span={lock ? 24 : 18} className="forgot-password__R">
                <h2 className="text-center">¿Olvidó su contraseña?</h2>
                <p className="text-center">
                  Aquí puedes restablecer tu contraseña
              </p>
                <Form onChange={onChange} onFinish={onSubmit}>
                  <Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Por favor ingresa su nombre de usuario",
                      },
                      {
                        min: 4,
                        message:
                          "El nombre de usuario debe contener al menos 4 caracteres",
                      },
                      {
                        max: 45,
                        message:
                          "El nombre de usuario debe contener maximo 45 caracteres",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Username"
                    />
                  </Item>
                  <div className="forgot-password__R__btn">
                    <Button type="primary" htmlType="submit">
                      Restaurar contraseña
                  </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Card>
          <div className="reset-password-footer">
            &copy;{name[0]}
            <span> {name[1]} </span>
          </div>
        </Col>
        <RedirectButton
          url="/login"
          imgPath="house.png"
          urlName="Login"
        />
      </div>
    );
};

ResetPassword.propTypes = {
  appName: PropTypes.string.isRequired,
};
export default ResetPassword;
