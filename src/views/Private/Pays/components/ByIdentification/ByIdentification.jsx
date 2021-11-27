import { Tag } from 'antd'

import { Loading } from '../../../../../components/Loading'
import { ColorTab } from '../../../../../components/ColorTab'

import { Report } from '../../../../../services/Report/ReportSlice'
import { useData } from '../../../../../hooks/useData'

export const ByIdentification = () => {
  const { user, loading } = useData({ reducer: Report })

  return loading ? (
    <Loading />
  ) : (
    <div className="ContentById">
      <div className="Rpt-header">
        <h1>
          <span>
            {user.name} {user.lastName}{' '}
          </span>
          Identificaco con :<span>{user.identification}</span>
        </h1>
      </div>
      <div className="Rpt-body">
        <h2>Ha realizado los siguientes Pagos:</h2>
        <ul>
          {user.payment.map((item, key) => (
            <li key={key}>
              <h3>
                Concepto:{' '}
                <span>{item.days === 0 ? 'Abono' : `${item.days} Dias`} </span>
                Pago: <span>{item.cost} </span>
                Debiendo :{' '}
                {item.debt > 0 ? (
                  <span> {item.debt} </span>
                ) : (
                  <span>Sin Deuda </span>
                )}
                finalizando : <span>{item.createdAt.substr(0, 10)} </span>
                registrado por : <span>{item.username} </span>
              </h3>
              <Tag color={ColorTab(item.debt > 0 ? 'inactive' : 'active')}>
                {item.debt > 0 ? 'DEBE' : 'SIN DEUDA'}
              </Tag>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
