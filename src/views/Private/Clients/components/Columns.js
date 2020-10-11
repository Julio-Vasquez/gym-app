import React from "react";
import { Button, Tag } from "antd";
import { ColorTab } from "./../../../../components/ColorTab";

export const Columns = (search) => {
  return [
    {
      title: "Identificación",
      dataIndex: "identification",
      key: "identification",
      ...search("identification", "Identificación"),
    },
    {
      title: "Nombres",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Apellidos",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Telefono",
      dataIndex: "phone",
      key: "phone",
      ...search("phone", "Telefono"),
    },
    {
      title: "Fecha Nacimiento",
      dataIndex: "dateBirth",
      key: "dateBirth",
      ...search("dateBirth", "Fecha Nacimiento"),
    },
    {
      title: "Estado",
      key: "state",
      dataIndex: "state",
      ...search("state", "Estado"),
      render: (tag) => (
        <span>
          <Tag color={ColorTab(tag)} key={tag}>
            {tag}
          </Tag>
        </span>
      ),
    },
    {
      title: "Acciones",
      key: "btn-view",
      dataIndex: "btn-view",
      render: (_, record) => (
        <>
          <a href={`/clients/${record.identification}`}>ver</a>
          <Button>add Time</Button>
        </>
      ),
    },
  ];
};
