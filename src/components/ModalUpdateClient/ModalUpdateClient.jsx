import { Modal, Space } from 'antd'
import { bool, func, string, any } from 'prop-types'

import { Loading } from '../Loading'
import { FormModal } from './components/Form'

import { useData } from './../../hooks/useData'
import { Check } from '../../services/Check/CheckSlice'

export const ModalUpdateClient = ({ open, close, title, identification }) => {
  const { client, loading } = useData({ reducer: Check })

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
  )
}

ModalUpdateClient.propTypes = {
  open: bool.isRequired,
  close: func.isRequired,
  title: string.isRequired,
  identification: any,
}

ModalUpdateClient.defaulrProps = {
  identification: 0,
}
