import { useState } from "react";
import "./App.css";

function App() {
  const [addOne, setAddOne] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [toggle, setToggle] = useState(false);
  const [list, setList] = useState([
    { id: 1, todo: "walk the cat" },
    { id: 2, todo: "walk the dragon" },
    { id: 3, todo: "walk the eagle" },
  ]);

  function addItemToList() {
    let newArray = [
      ...list,
      { id: list.length + 1, todo: "walk more animals" },
    ];

    setList(newArray);
  }

  return (
    <div className="App">
      Starting Value: {addOne}
      <button onClick={() => setAddOne(addOne + 1)}>+</button>
      <button onClick={() => setAddOne(addOne - 1)}>-</button>
      <hr />
      <input
        name="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <button onClick={() => console.log(firstName)}>Submit</button>
      <hr />
      {toggle ? <span>Show Me</span> : <span>Don't show me</span>}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <button onClick={() => setToggle((preValue) => !preValue)}>Toggle</button>
      <hr />
      {list.map((item) => {
        return <div key={item.id}>{item.todo}</div>;
      })}
      <button onClick={addItemToList}>Add To List</button>
    </div>
  );
}

// this.setState(prevState => {
//   return {

//   }
// })

export default App;
