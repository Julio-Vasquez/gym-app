import React from "react";
import { Tag } from "antd";
import { useSelector } from "react-redux";

import { Loading } from "../../../../../components/Loading";
import { ColorTab } from "../../../../../components/ColorTab";

export const ByIdentification = () => {
  const { user, loading } = useSelector((state) => state.Report);

  return loading ? (
    <Loading />
  ) : (
    <div className="ContentById">
      <div className="Rpt-header">
        <h1>Usuario:</h1>
        <p>
          {user.name} {user.lastName}
        </p>
        <h1>Identificación: </h1>
        <p>{user.identification}</p>
      </div>
      <div className="Rpt-body">
        <h2>Ha realizado los siguientes Pagos:</h2>
        <ul>
          {user.payment.map((item, key) => (
            <li key={key}>
              <h3>
                Concepto: {item.days === 0 ? "Abono" : `${item.days} Dias`}
              </h3>
              <h3>Pago: {item.cost}</h3>
              <h3>{item.debt > 0 ? `Debiendo : ${item.debt}` : "Sin Deuda"}</h3>
              <h3>finalizando : {item.createdAt.substr(0, 10)}</h3>
              <h3>registrado por : {item.username} </h3>
              <Tag color={ColorTab(item.debt > 0 ? "inactive" : "active")}>
                {item.debt > 0 ? "DEBE" : "SIN DEUDA"}
              </Tag>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
