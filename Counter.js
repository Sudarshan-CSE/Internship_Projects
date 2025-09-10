
import { useState } from 'react';
import './App.css';

function App() {

  let [counter,setCounter]=useState(0);

  function increament(){
    setCounter(counter+1);
  }
  function decrement(){
    setCounter(counter-1);

  }
  function reset(){
    setCounter(0);

  }
  return (
    <div className="App">

    <h3>The Value is:{counter}</h3>
    <button onClick={increament}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
    
    </div>
  );
}

export default App;
