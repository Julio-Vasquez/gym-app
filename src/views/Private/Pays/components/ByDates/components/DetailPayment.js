import React from "react";
import PropTypes from "prop-types";

export const DetailPayment = ({ data }) => {
  return (
    <div className="DetailPayment">
      <div className="User-table">
        <table className="table-layout: auto;">
          <thead className="ant-table-thead">
            <tr>
              <th className="ant-table-cell">Concepto</th>
              <th className="ant-table-cell">Costo</th>
              <th className="ant-table-cell">Dias</th>
              <th className="ant-table-cell">Mora</th>
              <th className="ant-table-cell">Usuario</th>
            </tr>
          </thead>
        </table>
      </div>

      <div className="indexed-table">
        <table>
          <tbody className="ant-table-tbody">
            {data.map((i, k) => (
              <tr key={k}>
                <td className="ant-table-cell">{i.concept}</td>
                <td className="ant-table-cell">{i.cost}</td>
                <td className="ant-table-cell">{i.days}</td>
                <td className="ant-table-cell">{i.debt}</td>
                <td className="ant-table-cell">{i.username.toUpperCase()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

DetailPayment.propTypes = {
  data: PropTypes.array.isRequired,
};
