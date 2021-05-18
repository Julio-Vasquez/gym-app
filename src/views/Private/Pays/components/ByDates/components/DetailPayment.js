import PropTypes from "prop-types";

export const DetailPayment = ({ data }) => {
  return (
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
  );
};

DetailPayment.propTypes = {
  data: PropTypes.array.isRequired,
};
