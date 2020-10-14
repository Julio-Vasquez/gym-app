import React, { useState } from "react";
import { Button, Tag, Tooltip } from "antd";
import { useDispatch } from "react-redux";

import { ColorTab } from "./../../../../components/ColorTab";
import { check } from "./../../../../services/Check/CheckActions";
import { ModalCheck } from "./../../../../components/ModalCheck";

export const Columns = (search) => {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(!open);
  };

  const dispatch = useDispatch();

  const getPeople = (identification) => {
    dispatch(check.checkPeople(identification));
    setOpen(true);
  };

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
      title: "Fin suscripción",
      dataIndex: "end",
      key: "end",
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
          <Tooltip title="Ver informacion personal">
            <Button onClick={() => getPeople(record.identification)} danger>
              ver
            </Button>
          </Tooltip>
          <Button type="primary" style={{ marginLeft: "20px" }}>
            Agregar Tiempo
          </Button>
          <ModalCheck
            title="Detalle"
            open={open}
            close={closeModal}
            ok={closeModal}
            accept={true}
          />
        </>
      ),
    },
  ];
};
