import React from 'react';

import { Columns } from './components/Columns';
import { CustomTable } from '../../../components/CustomTable';

const Clients = () => {
  const scoreData = [];
  return <CustomTable
    data={scoreData}
    title="Mis Clientes"
    Columns={Columns}
  />
}

export default Clients;