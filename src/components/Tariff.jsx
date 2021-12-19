import './Tariff.scss';


function Tariff(props) {
  return (
    <div className="tariff-card" id={props.id}>
    <div className="tariff-name">Безлимитный {props.cost}
      </div> 
      <div className="tariff-cost">
          <span className="tariff-cost_span-currency">руб</span> {props.cost} 
          <span className="tariff-cost_span">{'/'}мес</span>
      </div> 
      <div className="tariff-value">до {props.value} Мбит/сек
      </div> 
      <div className="tariff-description">
      Объем включенного траффика не ограничен</div>  
    </div>
  )
}

export default Tariff
