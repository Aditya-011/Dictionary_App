import React from "react";

const List = (props) => {
  return (
    <>
      {/*<i
        className="fa fa-times"
        onClick={() => {
          props.onSelect(props.id);
        }}
        aria-hidden="true"
    ></i>*/}
      <li>
        <span>
          <input type="checkbox" id="tick" className="tick"></input>
          <label for="tick">
            <b className="mainText">{props.text}</b>
          </label>
        </span>
        <span className="time">
          <span>11:14 PM</span>{" "}
          <i
            className="fa fa-trash"
            onClick={() => {
              props.onSelect(props.id);
            }}
            aria-hidden="true"
          ></i>
        </span>
      </li>
    </>
  );
};
export default List;
