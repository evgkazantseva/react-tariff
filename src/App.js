import './App.scss';
import Tariff from './components/Tariff.jsx';


const Tariffs = [{
  "id": "tariff1",
  "cost": 300,
  "value": 10
}, {
  "id": "tariff2",
  "cost": 450,
  "value": 50
}, {
  "id": "tariff3",
  "cost": 550,
  "value": 100
}, {
  "id": "tariff4",
  "cost": 1000,
  "value": 200
}];


function App() {
  return (
    <div className="App">
      <header><h1>Тарифы</h1></header>
      <div className="container">
        {Tariffs.map((tariff) =>
          <Tariff
            id={tariff.id}
            key={tariff.id}
            cost={tariff.cost}
            value={tariff.value}
          >
          </Tariff>)}
      </div>
    </div>
  );
}

export default App;
