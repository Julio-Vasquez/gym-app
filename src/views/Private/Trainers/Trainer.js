import React from 'react';

import { Columns } from './components/Columns';
import { CustomTable } from './../../../components/CustomTable';

const Trainer = () => {
  const scoreData = [];
  return <CustomTable
    title="Entrenadores"
    data={scoreData}
    Columns={Columns}
  />

}

export default Trainer;
