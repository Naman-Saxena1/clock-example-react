import {useState} from "react";
import logo from './logo.svg';
import './App.css';

let initialTime = new Date().toLocaleString();

function App() {
  let [time, setTime] = useState(initialTime)
  function tick()
  {
    setTime(new Date().toLocaleString())
  }

  setInterval(tick, 1000)
  
  return (
    <div className="App">
      <h1>React Clock</h1>
      <div>
          <span id="jsClock">
            {time}
          </span>
      </div>
    </div>
  );
}



export default App;
