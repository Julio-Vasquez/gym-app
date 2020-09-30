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
      title: "Resultado",
      key: "tag",
      dataIndex: "tag",
      ...search("tag", "Resultado"),
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