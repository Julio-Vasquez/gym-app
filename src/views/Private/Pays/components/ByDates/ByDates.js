import { useState, Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col } from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'

import { Loading } from '../../../../../components/Loading'
import { DetailPayment } from './components/DetailPayment'

export const ByDates = () => {
  const { peoples, loading } = useSelector(state => state.Report)

  const [expanded, setExpanded] = useState(false)
  const [id, setId] = useState(0)

  const handleExpanded = id => {
    setId(id)
    setExpanded(!expanded)
  }

  return loading ? (
    <Loading />
  ) : (
    <div className="ByDatesTable">
      <Row>
        <Col span={24} className="ByDatesTableCol">
          <h3>Registro de reportes de fechas.</h3>
        </Col>

        <Col className="ByDatesTableTable">
          <div className="ant-table-wrapper">
            <div className="ant-table">
              <div className="ant-table-container">
                <table className="table-layout: fixed; tm">
                  <thead className="ant-table-thead">
                    <tr className="ant-table-expanded-row">
                      <th className="ant-table-cell ant-table-row-expand-icon-cell"></th>
                      <th className="ant-table-cell th-center">
                        Identificacion
                      </th>
                      <th className="ant-table-cell th-center">Nombre</th>
                      <th className="ant-table-cell th-center">Rol</th>
                    </tr>
                  </thead>

                  <tbody className="ant-table-tbody">
                    {peoples.data.map((item, key) => (
                      <Fragment key={key}>
                        <tr
                          data-row-key={key}
                          key={key}
                          className={`ant-table-expanded-row ant-table-row-level-0`}
                        >
                          <td className="ant-table-cell ant-table-row-expand-icon-cell">
                            <button
                              onClick={() =>
                                handleExpanded(item.identification)
                              }
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
                          <td className="ant-table-cell">
                            {item.identification}
                          </td>
                          <td className="ant-table-cell">
                            {item.name} {item.lastName}
                          </td>
                          <td className="ant-table-cell">{item.role}</td>
                        </tr>
                        <tr
                          className={
                            expanded && id === item.identification
                              ? 'show-expandible ant-table-expanded-row ant-table-expanded-row-level-1'
                              : 'hidden-expandible ant-table-expanded-row ant-table-expanded-row-level-1'
                          }
                        >
                          <td colSpan="8" className="ant-table-cell">
                            <DetailPayment data={item.payment} />
                          </td>
                        </tr>
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
