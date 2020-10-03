import React from 'react';
import { Modal, Space } from 'antd';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2'
import Example from './example'

import { Loading } from './../../../../components/Loading';

export const ModalCheck = ({ title, close, ok, open, accept }) => {
  const time = 5;
  const { client, loading } = useSelector(state => state.Check);

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
            <p>{client.identification}</p>
            <p>{client.name}</p>
            <p>{client.lastName}</p>
            <p>{client.phone}</p>
            <p>{client.dateBirth}</p>

            {time <= 5 && (
              <Example />
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

const HeadWarnign = () => {
  return Swal.fire({
    title: <p>Hello World</p>,
    icon: 'warning',
    text: 'Poco tiempo'
  })
}
const HeadAlert = () => (<>Sin Tiempo</>)
const HeadNormal = () => (<>Sin Tiempo</>)