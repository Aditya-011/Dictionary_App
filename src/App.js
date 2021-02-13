import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const itemEvent = (e) => {
    setInputList(e.target.value);
  };
  function listOfItems() {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  }
  function deleteItems(id) {
    setItems((oldItems) => {
      return oldItems.filter((arrEl, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="App">
      <h1 className="title">ToDo List</h1>
      <div className="wrapper">
        <div className="head">
          <div className="dateNtime">
            <div className="dateUp">
              <span className="dateUp1">Thursday, </span>
              <span className="dateUp2">10th</span>
            </div>
            <div className="dateDown">December</div>
          </div>
          <div className="task">12 tasks</div>
        </div>

        <div className="center_div">
          <ol>
            {/* */}
            {items.map((itemval, index) => {
              return (
                <List
                  text={itemval}
                  key={index}
                  id={index}
                  onSelect={deleteItems}
                ></List>
              );
            })}
          </ol>
        </div>
        <div className="bottom">
          <input
            type="text"
            value={inputList}
            placeholder="Add Items"
            onChange={itemEvent}
          />
          <button onClick={listOfItems}> + </button>
        </div>
      </div>
    </div>
  );
}

export default App;
