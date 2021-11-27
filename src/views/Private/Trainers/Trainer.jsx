import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { message } from 'antd'

import { Loading } from '../../../components/Loading'
import { CustomTable } from '../../../components/CustomTable'
import { FloatingButton } from '../../../components/FloatingButton'
import { ModalNewClient } from '../../../components/ModalNewClient'

import { getClients, Clients } from '../../../services/Clients/ClientsSlice'
import { Suscription } from '../../../services/Suscription/SuscriptionSlice'
import { useData } from '../../../hooks/useData'

const Trainer = () => {
  const [openModalNewTrainer, setOpenModalNewTrainer] = useState(false)

  const dispatch = useDispatch()

  const { listClients, loading, successCreate, successUpdate } = useData({
    reducer: Clients,
  })
  const { success, successRemove } = useData({ reducer: Suscription })

  useEffect(() => {
    dispatch(getClients('Entrenador'))
  }, [dispatch, successCreate, successUpdate, success, successRemove])

  useEffect(() => {
    if (successCreate) message.success('Entrenador creado')
  }, [successCreate])

  return loading ? (
    <Loading />
  ) : (
    <div className="trainer-bg">
      <CustomTable title="Entrenadores" data={listClients} />
      <FloatingButton
        title="Agregar Nuevo Entrenador"
        state={openModalNewTrainer}
        setState={setOpenModalNewTrainer}
      />
      <ModalNewClient
        open={openModalNewTrainer}
        close={setOpenModalNewTrainer}
        title="Registrar nuevo Entrenador"
      />
    </div>
  )
}

export default Trainer
