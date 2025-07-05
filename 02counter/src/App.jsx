import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  let [counter, setCounter] = useState(10);
  //  let counter=15;


  let addValue = () => {
    console.log("add value", counter);
    if(counter<20) {
      counter = counter + 1;
      setCounter(counter);
    }else{
      alert('you reached 20 So you not going forward');
    }
    // counter = counter + 1;
   
  };
  let removeValue = () => {
   
    if(counter>0){
      setCounter(counter-1);
    }else{
      alert('so not going in negative numbers');
    }
    
  };
  return (
    <>
      <h1>hello react js in counter project</h1>
      <h2>Counter Value is : {counter}</h2>
      <button onClick={addValue}>add value {counter}</button>
      <br /> <br />
      <button onClick={removeValue}>remove value {counter} </button>
    </>
  );
}

export default App;
