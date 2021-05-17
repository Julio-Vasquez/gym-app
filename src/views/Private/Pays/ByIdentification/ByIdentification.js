import React from "react";
import { useSelector } from "react-redux";

import { Loading } from "./../../../../components/Loading";

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
        {user.payment.map((item, key) => (
          <li key={key}>
            {console.log(key)}
            {item.days === 0 ? "Abono" : "Dias"}, Pago: {item.cost}
            Debiendo : {item.debt}
            finalizando : {item.createdAt.substr(0, 10)}
            registrado por :{item.username}
          </li>
        ))}
      </ul>
    </div>
  );
};
