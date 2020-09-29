import React from 'react'
import { Table } from "antd";

import { Columns } from './components/Columns';
import { Search } from './components/Search';

const Clients = () => {
  const scoreData = [];
  return (
    <div className="list-clients">
      <div className="list-clients__title">
        <h2>Mis Calificaciones</h2>
      </div>
      <div className="list-clients__body">
        <Table columns={Columns(Search)} dataSource={scoreData} />
      </div>
    </div>
  )
}

export default Clients