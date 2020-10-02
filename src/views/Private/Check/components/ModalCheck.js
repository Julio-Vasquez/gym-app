import React from 'react';
import { Modal, Space } from 'antd';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Loading } from './../../../../components/Loading'
export const ModalCheck = ({ title, close, ok, open, accept }) => {

  const { client, loading } = useSelector(state => state.Check);
  console.log(client);
  return loading
    ? <Loading />
    : (
      <div className="modal-check">
        <Space>
          <Modal
            centered={true}
            title={title}
            onCancel={close}
            onOk={ok}
            visible={open}
          >
            {accept && (
              <img
                src="https://lincolnsquarebid.org/uploads/NewsModel/720/image/community-alert-image.detailPage.jpg"
                alt="xxx"
              />
            )}
            <p>{client.identification}</p>
            {accept && (
              <span>pailas poco tiempo</span>
            )}

          </Modal>


        </Space>
      </div>
    )
}

ModalCheck.propTypes = {
  title: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  ok: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  accept: PropTypes.bool.isRequired
}
