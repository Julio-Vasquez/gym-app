import { Button, Tooltip } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { string, bool, func } from 'prop-types'

export const FloatingButton = ({ title, state, setState }) => {
  const onCLickBtn = () => setState(!state)

  return (
    <div style={{ padding: '20px 0' }}>
      <Tooltip title={title}>
        <Button
          className="floating-button-add"
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          onClick={onCLickBtn}
        />
      </Tooltip>
    </div>
  )
}

FloatingButton.propTypes = {
  title: string.isRequired,
  state: bool.isRequired,
  setState: func.isRequired,
}
