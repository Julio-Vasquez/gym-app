import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Radio, Button, DatePicker, Row, InputNumber } from "antd";

import { report } from "./../../../services/Report/ReportActions";
import { ByIdentification } from "./ByIdentification";
import { ByDates } from "./ByDates/ByDates";

const Pays = () => {
  const { success, user } = useSelector((state) => state.Report);
  const { Group } = Radio;
  const { RangePicker } = DatePicker;

  const [type, setType] = useState("identification");
  const [identification, setIdentification] = useState();
  const [dates, setDates] = useState();
  const [sms, setSms] = useState();

  const dispatch = useDispatch();

  const onChangeRadio = (e) => setType(e.target.value);

  const onChangeInput = (value) => setIdentification(value);

  const onChangeRange = (_, value) => setDates(value);

  const checkId = () => {
    if (identification < 100000)
      setSms("El valor minimo de la Identificación es : 100000 => 6 digitos");
    else setSms();
  };

  const handlePays = () => {
    if (type === "identification")
      dispatch(report.getPayIdentification(identification));
    else dispatch(report.getPayDates(...dates));
  };

  return (
    <Fragment>
      <Row>
        <Group onChange={onChangeRadio} value={type}>
          <Radio value="identification">Identificación</Radio>
          <Radio value="dates">Fechas</Radio>
        </Group>
        {type === "dates" ? (
          <RangePicker format="YYYY-MM-DD" onChange={onChangeRange} />
        ) : (
          <InputNumber
            max={999999999999}
            onChange={onChangeInput}
            required
            onKeyUp={checkId}
            placeholder="Número Documento"
            style={{ width: "160px" }}
          />
        )}
        <Button
          onClick={handlePays}
          type="primary"
          shape="round"
          disabled={sms !== undefined ? true : false}
        >
          Buscar
        </Button>
        <div className="error_sms_id">{sms}</div>
      </Row>
      {success.byIdentification && (
        <Row
          className={
            type === "identification"
              ? "visible_data_payment"
              : "hidden_data_payment"
          }
        >
          <ByIdentification
            name={user.name}
            lastName={user.lastName}
            identification={user.identification}
            payments={user.payment}
          />
        </Row>
      )}
      {success.byDates && (
        <Row
          className={
            type === "dates" ? "visible_data_payment" : "hidden_data_payment"
          }
        >
          <ByDates identification={1117542316} />
        </Row>
      )}
    </Fragment>
  );
};

export default Pays;
