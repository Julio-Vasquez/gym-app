import React from 'react';
import { Tag } from 'antd';
import { ColorTab } from './../../../../components/ColorTab';

export const Columns = search => {
  return [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Apellido",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Tema",
      dataIndex: "theme",
      key: "theme",
      ...search("theme", "Tema"),
    },
    {
      title: "Calificacion",
      key: "cal",
      dataIndex: "cal",
    },
    {
      title: "Estado",
      key: "tag",
      dataIndex: "tag",
      ...search("tag", "Estado"),
      render: tag => (
        <span>
          <Tag
            color={ColorTab(tag)}
            key={tag}
          >
            {tag}
          </Tag>
        </span>
      ),
    }
  ]
}