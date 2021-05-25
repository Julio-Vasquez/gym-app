import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";

import { Loading } from "./../../../components/Loading";
import { CustomTable } from "../../../components/CustomTable";
import { FloatingButton } from "../../../components/FloatingButton";
import { ModalNewClient } from "../../../components/ModalNewClient";

import { clients } from "./../../../services/Clients/ClientsActions";

const Trainer = () => {
  const [openModalNewTrainer, setOpenModalNewTrainer] = useState(false);

  const dispatch = useDispatch();

  const { listClients, loading, successCreate, successUpdate } = useSelector(
    (state) => state.Clients
  );

  const { success, successRemove } = useSelector((state) => state.Suscription);

  useEffect(() => {
    dispatch(clients.getClients("Entrenador"));
  }, [dispatch, successCreate, successUpdate, success, successRemove]);

  useEffect(() => {
    if (successCreate) message.success("Entrenador creado");
  }, [successCreate]);

  return loading ? (
    <Loading />
  ) : (
    <div className="trainer-bg">
      <CustomTable title="Entrenadores" data={listClients} />
      <FloatingButton
        title="Agregar Nuevo Entrenador"
        state={openModalNewTrainer}
        setState={setOpenModalNewTrainer}
      />
      <ModalNewClient
        open={openModalNewTrainer}
        close={setOpenModalNewTrainer}
        title="Registrar nuevo Entrenador"
      />
    </div>
  );
};

export default Trainer;
