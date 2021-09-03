import PropTypes from 'prop-types'

export const DetailPayment = ({ data }) => {
  return (
    <div className="ant-table-wrapper">
      <div className="ant-table">
        <div className="ant-table-container">
          <table className="table-layout: fixed;">
            <thead className="ant-table-thead">
              <tr>
                <th className="ant-table-cell th-center th-700">Concepto</th>
                <th className="ant-table-cell th-center th-700">Costo</th>
                <th className="ant-table-cell th-center th-700">Dias</th>
                <th className="ant-table-cell th-center th-700">Mora</th>
                <th className="ant-table-cell th-center th-700">Usuario</th>
              </tr>
            </thead>
            <tbody className="ant-table-tbody">
              {data.map((i, k) => (
                <tr key={k}>
                  <td className="ant-table-cell">{i.concept}</td>
                  <td className="ant-table-cell">{i.cost}</td>
                  <td className="ant-table-cell">{i.days}</td>
                  <td className="ant-table-cell">{!i.debt ? '0' : i.debt}</td>
                  <td className="ant-table-cell">{i.username.toUpperCase()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

DetailPayment.propTypes = {
  data: PropTypes.array.isRequired,
}
