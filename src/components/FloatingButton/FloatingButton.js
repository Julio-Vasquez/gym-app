import React from 'react';
import { Button, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types'

export const FloatingButton = ({ title, state, setState}) => {

  const onCLickBtn = () => setState(!state);

  return (
    <Tooltip title={title}>
      <Button 
        className="floating-button-add"
        type="primary" 
        shape="circle" 
        icon={<PlusOutlined />} 
        onClick={onCLickBtn}
      />
    </Tooltip>
  )
}

FloatingButton.propTypes = {
  title: PropTypes.string.isRequired,
  state: PropTypes.bool.isRequired,
  setState: PropTypes.func.isRequired
}