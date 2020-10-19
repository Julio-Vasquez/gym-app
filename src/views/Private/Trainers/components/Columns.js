import React, { useState } from "react";
import { Button, Tag, Tooltip } from "antd";
import { useDispatch } from "react-redux";
import { EditTwoTone, EyeOutlined, PlusOutlined } from "@ant-design/icons";

import { ColorTab } from "./../../../../components/ColorTab";
import { check } from "./../../../../services/Check/CheckActions";
import { ModalCheck } from "./../../../../components/ModalCheck";
import { AddTime } from "./../../../../components/AddTime";

import { ModalUpdateClient } from "../../../../components/ModalUpdateClient/ModalUpdateClient";

export const Columns = (search) => {
  const [open, setOpen] = useState(false);
  const [editable, setEditable] = useState(false);
  const [time, setTime] = useState(false);

  const closeModal = () => {
    setOpen(!open);
  };

  const closeEditable = () => {
    setEditable(!editable);
  };

  const closeTime = () => {
    setTime(!time);
  };

  const dispatch = useDispatch();

  const getPeople = (identification) => {
    dispatch(check.checkPeople(identification));
    setOpen(true);
  };

  const updatePeople = (identification) => {
    dispatch(check.checkPeople(identification));
    setEditable(true);
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
            <Button
              onClick={() => getPeople(record.identification)}
              danger
              icon={<EyeOutlined />}
              shape="circle"
            />
          </Tooltip>
          <Tooltip title="Editar">
            <Button
              onClick={() => updatePeople(record.identification)}
              type="primary"
              style={{ marginLeft: "5px" }}
              icon={<EditTwoTone />}
              shape="circle"
            />
          </Tooltip>
          <Tooltip title="Agregar Tiempo">
            <Button
              type="primary"
              style={{ marginLeft: "5px" }}
              onClick={() => setTime(true)}
              icon={<PlusOutlined />}
              shape="circle"
            />
          </Tooltip>
          <div style={{ display: "none" }}>
            <ModalCheck
              title="Detalle"
              open={open}
              close={closeModal}
              ok={closeModal}
              accept={true}
            />
            <ModalUpdateClient
              title="Edite la información personal"
              close={closeEditable}
              open={editable}
              identification={record.identification}
            />
            <AddTime
              open={time}
              close={closeTime}
              ok={closeTime}
              identification={record.identification}
            />
          </div>
        </>
      ),
    },
  ];
};
