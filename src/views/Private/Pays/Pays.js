import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Radio, Button, DatePicker, Row, InputNumber, message } from "antd";

import { report } from "./../../../services/Report/ReportActions";
import { ByIdentification } from "./ByIdentification";
import { ByDates } from "./ByDates/ByDates";

const Pays = () => {
  const { success } = useSelector((state) => state.Report);
  const { Group } = Radio;
  const { RangePicker } = DatePicker;

  const [type, setType] = useState("identification");
  const [sms, setSms] = useState();
  const [identification, setIdentification] = useState();
  const [dates, setDates] = useState();

  const dispatch = useDispatch();

  const onChangeRadio = (e) => {
    setType(e.target.value);
    setSms();
  };

  const onChangeInput = (value) => {
    if (value < 100000)
      setSms("El valor minimo de la Identificación es : 100000 => 6 digitos");
    else {
      setIdentification(value);
      setSms();
    }
  };

  const onChangeRange = (_, value) => setDates(value);

  const handlePays = () => {
    if (type === "identification") {
      if (!identification) message.error("Debe llenar el formulario");
      else dispatch(report.getPayIdentification(identification));
    } else {
      if (!dates || dates.length === 0)
        message.error("Debe llenar el formulario");
      else dispatch(report.getPayDates(...dates));
    }
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
          <ByIdentification />
        </Row>
      )}
      {success.byDates && (
        <Row
          className={
            type === "dates" ? "visible_data_payment" : "hidden_data_payment"
          }
        >
          <ByDates />
        </Row>
      )}
    </Fragment>
  );
};

export default Pays;
