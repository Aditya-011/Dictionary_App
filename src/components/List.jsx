import React,{useEffect} from "react";
import { AiFillDelete } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
const List = ({data,setItems,items}) => {
  const handleDelete = async()=>
  {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/task/delete/${data._id}`);
      toast.success("Task deleted!")

      const updatedTasks = items.filter((task) => task._id !== data._id);
      setItems(updatedTasks);
    } catch (error) {
      toast.error('Error deleting task');
    }
  }
  const handleEdit = async()=>
  {
    try {
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/task/edit/${data._id}`,{status : "completed"});
      toast.success("Task Updated!")

      const updatedTasks = items.filter((task) => task._id !== data._id);
      setItems([...updatedTasks,response.data]);

    } catch (error) {
      toast.error('Error updating!');
    } 
  }

  return (
    <>
      <li className="taskWrapper">
        <div className="t1">
          <input
            type="checkbox"
            disabled = {data.status == 'completed' ? true : false}
            checked={data.status == 'completed' ? true : false}
            id="tick"
            className="tick"
            onChange={handleEdit}
          ></input>
        </div>
        <b className="mainText">{data.title}</b>
        <div className="time">
          <span>{`${new Date(data.createdAt).getHours()}:${new Date(data.createdAt).getMinutes()}`} </span>{" "}
          <AiFillDelete
            className="delete"
            onClick={handleDelete}
          ></AiFillDelete>
        </div>
      </li>
    </>
  );
};
export default List;
