import React, { useState, useEffect } from "react";
import { Modal, Space, Row, Tag } from "antd";
import {
  CheckCircleTwoTone,
  WarningTwoTone,
  CloseCircleTwoTone,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";


import { ColorTab } from "./../ColorTab";

export const ModalCheck = ({ title, close, ok, open }) => {
  const { client, loading } = useSelector((state) => state.Check);
  const [color, setColor] = useState("");

  useEffect(() => {
    if (client.time === 0) setColor("#f44336");
    else if (client.time <= 5 && client.time >= 0) setColor("#ff9800");
    else setColor("#8BC34A");

    if(open){
      const timer = setTimeout(() => {
        ok();
      }, 7000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [client.time, ok, open]);

  return loading ? "" :(
    <div className="modal-check">
      <Space>
        <Modal
          centered={true}
          title={title}
          onCancel={close}
          onOk={ok}
          visible={open}
        >
          <div className="modal-icon-info">
            {client.time === 0 && (
              <CloseCircleTwoTone
                twoToneColor="#f44336"
                className="modal-check-icon"
              />
            )}
            {client.time > 5 && (
              <CheckCircleTwoTone
                twoToneColor="#8BC34A"
                className="modal-check-icon"
              />
            )}
            {client.time <= 5 && client.time > 0 && (
              <WarningTwoTone
                twoToneColor="#ff9800"
                className="modal-check-icon"
              />
            )}
          </div>

          {client.identification ? (
            <div className="info-body">
              <Row>
                <p>{client.identification}</p>
                <p>{client.name}</p>
                <p>{client.lastName}</p>
              </Row>

              <Row>
                <p>{client.phone}</p>
                <p style={{ color: "#39FF14" }}>{client.concept}</p>
                <p
                  style={{
                    color: color,
                  }}
                >
                  {client.time === null ? "0" : client.time} Dias
                </p>
              </Row>
              <Row>
                <Tag color={ColorTab(client.debt > 0 ? "inactive" : "active")}>
                  {client.debt > 0 ? `DEBE ${client.debt}` : `SIN DEUDA`}
                </Tag>
              </Row>
            </div>
          ) : (
            <h2>No existe ese cliente</h2>
          )}
        </Modal>
      </Space>
    </div>
  );
};

ModalCheck.propTypes = {
  title: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  ok: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
