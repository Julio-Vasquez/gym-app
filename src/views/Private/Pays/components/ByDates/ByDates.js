import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Loading } from "../../../../../components/Loading";
import { DetailPayment } from "./components/DetailPayment";

export const ByDates = () => {
  const { peoples, loading } = useSelector((state) => state.Report);

  const [expandible, setExpandible] = useState(false);

  const handleExpandible = (id) => {
    setExpandible(!expandible);
  };
  return loading ? (
    <Loading />
  ) : (
    <div>
      <h3>Registro de reportes de fechas.</h3>
      <table className="table-layout: auto;">
        <thead className="ant-table-thead">
          <tr>
            <th className="ant-table-cell">X</th>
            <th className="ant-table-cell">Identificacion</th>
            <th className="ant-table-cell">Nombre</th>
            <th className="ant-table-cell">Rol</th>
          </tr>
        </thead>
        <tbody className="ant-table-tbody">
          {peoples.data.map((item, key) => (
            <tr key={key}>
              <td className="ant-table-cell ant-table-row-expand-icon-cell">
                <button
                  onClick={() => handleExpandible(item.identification)}
                  type="button"
                  className="ant-table-row-expand-icon ant-table-row-expand-icon-collapsed"
                  aria-label="Expand row"
                ></button>
              </td>
              <td className="ant-table-cell">{item.identification}</td>
              <td className="ant-table-cell">
                {item.name} - {item.lastName}
              </td>
              <td className="ant-table-cell">{item.role}</td>

              <td
                className={expandible ? "show-expandible" : "hidden-expandible"}
              >
                <DetailPayment data={item.payment} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
