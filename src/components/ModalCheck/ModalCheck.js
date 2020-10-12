import React from "react";
import { Modal, Space, Row } from "antd";
import { 
  CheckCircleTwoTone, 
  WarningTwoTone,
  CloseCircleTwoTone}
  from "@ant-design/icons";

import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Loading } from "../Loading";

export const ModalCheck = ({ title, close, ok, open, accept }) => {
  const { client, loading } = useSelector((state) => state.Check);

  const Time=2;

  return loading ? (
    <Loading />
  ) : (
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
            {Time === 0 && (<CloseCircleTwoTone twoToneColor="#f44336" className="modal-check-icon"/>)}
            {Time > 5 && (<CheckCircleTwoTone twoToneColor="#8BC34A" className="modal-check-icon"/>)}
            {Time <=5 && Time > 0 && (<WarningTwoTone twoToneColor="#ff9800" className="modal-check-icon"/>)}

          </div>

          <div className="info-body">
            <Row>
            <p>{client.identification}</p>
            <p>{client.name}</p>
            <p>{client.lastName}</p>
            </Row>

            <Row>
              <p>{client.phone}</p>
              <p>{client.dateBirth}</p>
              <p>{Time} dias</p>
            </Row>
            
          </div>       
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
  accept: PropTypes.bool.isRequired,
};
