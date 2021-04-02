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
      <li className="taskWrapper">
        <div className="t1">
          <input type="checkbox" id="tick" className="tick"></input>
        </div>
        <b className="mainText">{props.text}</b>
        <div className="time">
          <span>{`${props.hours}:${props.minutes}`} </span>{" "}
          <i
            className="fa fa-trash"
            onClick={() => {
              props.onSelect(props.id);
            }}
            aria-hidden="true"
          ></i>
        </div>
      </li>
    </>
  );
};
export default List;
