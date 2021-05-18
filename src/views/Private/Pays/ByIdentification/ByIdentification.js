import React from "react";

import { Tag } from "antd";
import { useSelector } from "react-redux";

import { Loading } from "./../../../../components/Loading";
import { ColorTab } from "../../../../components/ColorTab";

export const ByIdentification = () => {
  const { user, loading } = useSelector((state) => state.Report);
  return loading ? (
    <Loading />
  ) : (
    <div>
      <p>{`Usuario : ${user.name} ${user.lastName}`}</p>
      <p>{`Identificado con : ${user.identification}`}</p>
      <ul>
        <h4>Ha realizado los siguientes Pagos.</h4>
        {user.payments.map((item, key) => (
          <li key={key}>
            {console.log(key)}
            {item.days === 0 ? "Abono" : `${item.days} Dias`}, Pago: {item.cost}
            {item.debt > 0 ? `Debiendo : ${item.debt}` : "Sin Deuda"}
            finalizando : {item.createdAt.substr(0, 10)}
            registrado por :{item.username}
            <Tag color={ColorTab(item.debt > 0 ? "inactive" : "active")}>
              {item.debt > 0 ? "DEBE" : "SIN DEUDA"}
            </Tag>
          </li>
        ))}
      </ul>
    </div>
  );
};
