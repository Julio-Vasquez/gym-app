import React from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';

import { Search } from '../Search';

export const CustomTable = ({ data, Columns, title }) => {
  return (
    <div className="table">
      <div className="table__title">
        <h2>{title}</h2>
      </div>
      <div className="table__body">
        <Table columns={Columns(Search)} dataSource={data} />
      </div>
    </div>
  )
}

CustomTable.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.any.isRequired,
  Columns: PropTypes.any.isRequired
}