import React from "react";
import { useSelector } from "react-redux";

import { Loading } from "./../../../../components/Loading";

export const ByDates = () => {
  const { peoples, loading } = useSelector((state) => state.Report);
  console.log(peoples);
  return loading ? (
    <Loading />
  ) : (
    <div>
      {peoples.data.map((item, key) => (
        <div key={key}>
          Nombre:{item.name} - {item.lastName}
          id: {item.identification}
          <ul key={key}>
            {item.payment.map((i, k) => (
              <li key={k}>
                <p>
                  * {i.concept} *{i.cost} *{i.days} *{i.username}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
