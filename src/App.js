import './App.css';
import Calc from './Calc';

function App() {
  return (
    <div className="App">
      <h1>SPLITTER</h1>
      <Calc tipAmts={[5, 10, 15, 25, 50]} />
    </div>
  );
}

export default App;
