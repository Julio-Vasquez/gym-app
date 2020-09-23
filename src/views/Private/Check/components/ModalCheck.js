import React from 'react';
import { Modal, Space } from 'antd';
import PropTypes from 'prop-types'

export const ModalCheck = ({ title, close, ok, open, accept }) => {
  //const [open, setOpen] = useState(false);


  return (
    <div className="modal-check">
      <Space>
        <Modal
          centered={true}
          title={title}
          onCancel={close}
          onOk={ok}
          visible={open}
        >
          F
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
