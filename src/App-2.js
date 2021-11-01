import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    console.log("line 6");
  }, [number]);

  return (
    <div className="App">
      {number}
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
      <hr />
      {anotherNumber}
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>+</button>
      <button onClick={() => setAnotherNumber(anotherNumber - 1)}>-</button>
    </div>
  );
}

export default App;

/*

  useEffect is ComponentDidMount + ComponentDidUpdate + ComponentWillUnmount

*/
