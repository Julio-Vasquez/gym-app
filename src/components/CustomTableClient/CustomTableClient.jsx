import { useState } from 'react'
import { Table, Input, Button, Tag, Tooltip } from 'antd'
import {
  DeleteOutlined,
  EditTwoTone,
  EyeOutlined,
  PlusOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import Highlighter from 'react-highlight-words'
import PropTypes from 'prop-types'

import { ModalCheck } from '../ModalCheck'
import { AddTimeTicket } from '../AddTimeTicket'
import { ModalUpdateClient } from '../ModalUpdateClient'
import { ColorTab } from '../ColorTab'
import { RemoveTime } from '../RemoveTime/RemoveTime'

import { checkPeople } from '../../services/Check/CheckSlice'

export const CustomTable = ({ data, title }) => {
  const dispatch = useDispatch()

  let searchInput

  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')
  const [checkModal, setCheckModal] = useState(false)
  const [updateModal, setUpdateModal] = useState(false)
  const [timeModal, setTimeModal] = useState(false)
  const [removeModal, setRemoveModal] = useState(false)
  const [identification, setIdentification] = useState(null)

  const closeCheckModal = () => {
    setCheckModal(!checkModal)
  }

  const closeUpdateModal = () => {
    setUpdateModal(!updateModal)
  }

  const closeTimeModal = () => {
    setTimeModal(!timeModal)
  }

  const closeRemoveModal = () => {
    setRemoveModal(!removeModal)
  }

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm()
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)
  }

  const handleReset = clearFilters => {
    clearFilters()
    setSearchText('')
  }

  const handleGetPeople = identification => {
    dispatch(checkPeople(identification))
    setCheckModal(true)
  }

  const handleUpdatePeople = identification => {
    dispatch(checkPeople(identification))
    setIdentification(identification)
    setUpdateModal(true)
  }

  const handleAddTime = identification => {
    setIdentification(identification)
    setTimeModal(true)
  }

  const handleRemoveTime = identification => {
    setIdentification(identification)
    setRemoveModal(true)
  }

  const getColumnSearchProps = (dataIndex, title) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => (searchInput = node)}
          placeholder={`Buscar por ${title}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          <SearchOutlined />
          Buscar
        </Button>
        <Button
          onClick={() => handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          <DeleteOutlined />
          Limpiar
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) setTimeout(() => searchInput.select())
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  })

  const columns = [
    {
      title: 'Identificación',
      dataIndex: 'identification',
      key: 'identification',
      ...getColumnSearchProps('identification', 'Identificación'),
    },
    {
      title: 'Nombres',
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps('name', 'Nombre'),
    },
    {
      title: 'Apellidos',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Telefono',
      dataIndex: 'phone',
      key: 'phone',
      ...getColumnSearchProps('phone', 'Telefono'),
    },
    {
      title: 'Fin suscripción',
      dataIndex: 'end',
      key: 'end',
    },
    {
      title: 'Estado',
      key: 'state',
      dataIndex: 'state',
      ...getColumnSearchProps('state', 'Estado'),
      render: tag => (
        <span>
          <Tag color={ColorTab(tag)} key={tag}>
            {tag}
          </Tag>
        </span>
      ),
    },
    {
      title: 'Acciones',
      key: 'btn-view',
      dataIndex: 'btn-view',
      render: (_, record) => (
        <>
          <Tooltip title="Ver informacion personal">
            <Button
              onClick={() => handleGetPeople(record.identification)}
              style={{ borderColor: '#39FF14' }}
              icon={<EyeOutlined style={{ color: '#39FF14' }} />}
              shape="circle"
            />
          </Tooltip>
          <Tooltip title="Editar">
            <Button
              onClick={() => handleUpdatePeople(record.identification)}
              type="primary"
              shape="circle"
              style={{ marginLeft: '5px' }}
              icon={<EditTwoTone />}
            />
          </Tooltip>
          <Tooltip title="Agregar Tiempo">
            <Button
              type="primary"
              style={{ marginLeft: '5px' }}
              onClick={() => handleAddTime(record.identification)}
              icon={<PlusOutlined />}
              shape="circle"
            />
          </Tooltip>
          <Tooltip title="Restar Tiempo">
            <Button
              icon={<DeleteOutlined />}
              shape="circle"
              onClick={() => handleRemoveTime(record.identification)}
              danger
              style={{ marginLeft: '5px' }}
            />
          </Tooltip>
        </>
      ),
    },
  ]

  return (
    <div className="table">
      <div className="table__title">
        <h2>{title}</h2>
      </div>
      <div className="table__body">
        <Table columns={columns} dataSource={data} rowKey="identification" />
      </div>
      <div style={{ display: 'none' }}>
        <ModalCheck
          title="Detalle"
          open={checkModal}
          close={closeCheckModal}
          ok={closeCheckModal}
          visible={false}
        />
        <ModalUpdateClient
          title="Edite la información personal"
          close={closeUpdateModal}
          open={updateModal}
          identification={identification}
        />
        <AddTimeTicket
          open={timeModal}
          close={closeTimeModal}
          ok={closeTimeModal}
          identification={identification}
        />
        <RemoveTime
          open={removeModal}
          close={closeRemoveModal}
          ok={closeRemoveModal}
          identification={identification}
        />
      </div>
    </div>
  )
}

CustomTable.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.any.isRequired,
}
