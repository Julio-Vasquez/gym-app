import React from "react";
import { Modal, Space } from "antd";

import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { Loading } from "../Loading";
import { FormModal } from "./components/Form";

export const ModalUpdateClient = ({ open, close, title, identification }) => {
  const { client, loading } = useSelector((state) => state.Check);

  return loading ? (
    <Loading />
  ) : (
    <div>
      <Space>
        <Modal
          title={title}
          centered={true}
          visible={open}
          width={700}
          onCancel={() => close(false)}
          footer={[<div key="btn-modal"></div>]}
        >
          <FormModal client={client} identification={identification} />
        </Modal>
      </Space>
    </div>
  );
};

ModalUpdateClient.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  identification: PropTypes.any,
};
ModalUpdateClient.defaulrProps = {
  identification: 0,
};
