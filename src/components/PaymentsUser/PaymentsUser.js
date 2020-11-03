import React from "react";
import PropTypes from "prop-types";

export const PaymentsUser = ({ name, lastName, identification, payments }) => {
  console.log(name);
  return (
    <div>
      <p>{`Usuario : ${name} ${lastName}`}</p>
      <p>{`Identificado con : ${identification}`}</p>
      <ul>
        <h4>Ha realizado los siguientes Pagos.</h4>
        {payments.map((item, key) => (
          <li key={key}>
            {console.log(key)}
            {item.days} días, por un costo de : {item.cost}, registrado por :{" "}
            {item.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

PaymentsUser.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  identification: PropTypes.string.isRequired,
  payments: PropTypes.array.isRequired,
};
