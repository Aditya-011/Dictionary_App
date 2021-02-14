import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
function App() {
  var date = new Date();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "November",
    "December",
  ];
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  function increment() {
    if (inputList !== "") {
      setCount(count + 1);
    }
  }
  const itemEvent = (e) => {
    setInputList(e.target.value);
  };
  function listOfItems() {
    increment();
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  }
  function deleteItems(id) {
    setCount(count - 1);
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
              <span className="dateUp1">{days[date.getDay()]}, </span>
              <span className="dateUp2">{date.getDate()}th</span>
            </div>
            <div className="dateDown">{months[date.getMonth()]}</div>
          </div>
          <div className="task">{count} tasks</div>
        </div>

        <div className="center_div">
          <ol>
            {/* */}
            {items.map((itemval, index) => {
              if (itemval !== "") {
                return (
                  <List
                    text={itemval}
                    key={index}
                    id={index}
                    hours={hours}
                    minutes={minutes}
                    onSelect={deleteItems}
                  ></List>
                );
              }
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
