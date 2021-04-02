import React from "react";
import { AiFillDelete } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";

const List = (props) => {
  const [flag, setFlag] = React.useState(true);
  return (
    <>
      <Toaster />
      <li className="taskWrapper">
        <div className="t1">
          <input
            type="checkbox"
            id="tick"
            className="tick"
            onClick={() => {
              if (flag) {
                toast.success("Task Completed !!!");
                setFlag(false);
              } else {
                setFlag(true);
              }
            }}
          ></input>
        </div>
        <b className="mainText">{props.text}</b>
        <div className="time">
          <span>{`${props.hours}:${props.minutes}`} </span>{" "}
          <AiFillDelete
            className="delete"
            onClick={() => {
              props.onSelect(props.id);
            }}
          ></AiFillDelete>
        </div>
      </li>
    </>
  );
};
export default List;
