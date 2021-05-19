import React, { useState } from "react";
import { useSelector } from "react-redux";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

import { Loading } from "../../../../../components/Loading";
import { DetailPayment } from "./components/DetailPayment";

export const ByDates = () => {
  const { peoples, loading } = useSelector((state) => state.Report);

  const [expanded, setExpanded] = useState(false);
  const [id, setId] = useState(0);

  const handleExpanded = (id) => {
    setId(id);
    setExpanded(!expanded);
  };

  return loading ? (
    <Loading />
  ) : (
    <div>
      <h3>Registro de reportes de fechas.</h3>
      <table className="table-layout: auto;">
        <thead className="ant-table-thead">
          <tr className="ant-table-expanded-row">
            <th className="ant-table-cell ant-table-row-expand-icon-cell">X</th>
            <th className="ant-table-cell">Identificacion</th>
            <th className="ant-table-cell">Nombre</th>
            <th className="ant-table-cell">Rol</th>
          </tr>
        </thead>
        <tbody className="ant-table-tbody">
          {peoples.data.map((item, key) => (
            <tr
              key={key}
              className={`ant-table-expanded-row ant-table-expanded-row-level-${key}`}
            >
              <td className="ant-table-cell ant-table-row-expand-icon-cell">
                <button
                  onClick={() => handleExpanded(item.identification)}
                  type="button"
                  className=""
                >
                  {expanded && id === item.identification ? (
                    <MinusOutlined />
                  ) : (
                    <PlusOutlined />
                  )}
                </button>
              </td>
              <td className="ant-table-cell">{item.identification}</td>
              <td className="ant-table-cell">
                {item.name} - {item.lastName}
              </td>
              <td className="ant-table-cell">{item.role}</td>
              <td
                className={
                  expanded && id === item.identification
                    ? "show-expandible"
                    : "hidden-expandible"
                }
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
