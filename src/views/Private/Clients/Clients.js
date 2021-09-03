import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { message } from 'antd'

import { Loading } from './../../../components/Loading'
import { CustomTable } from '../../../components/CustomTableClient'
import { ModalNewClient } from '../../../components/ModalNewClient'
import { FloatingButton } from '../../../components/FloatingButton'

import { getClients } from './../../../services/Clients/ClientsSlice'

const Clients = () => {
  const [openModalNewClient, setOpenModalNewClient] = useState(false)

  const dispatch = useDispatch()

  const { listClients, loading, successCreate, successUpdate } = useSelector(
    state => state.Clients
  )

  const { success, successRemove } = useSelector(state => state.Suscription)

  useEffect(() => {
    dispatch(getClients('Cliente'))
  }, [dispatch, successCreate, successUpdate, success, successRemove])

  useEffect(() => {
    if (successCreate) message.success('cliente creado')
  }, [successCreate])

  useEffect(() => {
    if (successRemove) message.success('Tiempo removido')
  }, [successRemove])

  useEffect(() => {
    if (success) message.success('Tiempo Agregado')
  }, [success])

  return loading ? (
    <Loading />
  ) : (
    <div className="client-bg">
      <CustomTable data={listClients} title="Mis Clientes" />
      <FloatingButton
        title="Agregar nuevo cliente"
        state={openModalNewClient}
        setState={setOpenModalNewClient}
      />
      <ModalNewClient
        open={openModalNewClient}
        close={setOpenModalNewClient}
        title="Registrar Nuevo Cliente"
      />
    </div>
  )
}

export default Clients
