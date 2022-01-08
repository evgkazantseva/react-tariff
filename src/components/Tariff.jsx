import "./Tariff.scss";
import React, { useState } from "react";

function Tariff(props) {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!checked);
  };

  return checked ? (
    <div className="tariff-card" id={props.id} onClick={handleClick}>
      <div className="tariff-name selected-tariff-name">
        Безлимитный {props.cost}
      </div>
      <div className="tariff-cost">
        <span className="tariff-cost_span-currency">руб</span> {props.cost}
        <span className="tariff-cost_span">{"/"}мес</span>
      </div>
      <div className="tariff-value">до {props.value} Мбит/сек</div>
      <div className="tariff-description selected-tariff-description">
        Объем включенного траффика не ограничен
      </div>
    </div>
  ) : (
    <div className="tariff-card" id={props.id} onClick={handleClick}>
      <div className="tariff-name">Безлимитный {props.cost}</div>
      <div className="tariff-cost">
        <span className="tariff-cost_span-currency">руб</span> {props.cost}
        <span className="tariff-cost_span">{"/"}мес</span>
      </div>
      <div className="tariff-value">до {props.value} Мбит/сек</div>
      <div className="tariff-description">
        Объем включенного траффика не ограничен
      </div>
    </div>
  );
}

export default Tariff;
