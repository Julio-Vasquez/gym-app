import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loading } from './../../../components/Loading';
import { CustomTable } from '../../../components/CustomTable';
import { Columns } from './components/Columns';

import { clients } from './../../../services/Clients/ClientsActions';

const Clients = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clients.getClients('Cliente'));
  }, [dispatch])

  const { listClients, loading } = useSelector(state => state.Clients);

  return loading
    ? <Loading />
    : <CustomTable
      data={listClients}
      title="Mis Clientes"
      Columns={Columns}
    />
}

export default Clients;