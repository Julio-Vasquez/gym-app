import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loading } from './../../../components/Loading';
import { CustomTable } from '../../../components/CustomTable';
import { Columns } from './components/Columns';

import { clients } from './../../../services/Clients/ClientsActions';

const Trainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clients.getClients('Entrenador'));
  }, [dispatch])

  const { listClients, loading } = useSelector(state => state.Clients);
  return loading
    ? <Loading />
    : <CustomTable
      title="Entrenadores"
      data={listClients}
      Columns={Columns}
    />
}

export default Trainer;
