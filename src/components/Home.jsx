import React,{useState,useEffect} from 'react';
import toast, { Toaster } from "react-hot-toast";
import List from "./List";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const Home = () => {
    const navigate = useNavigate()
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

    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);
    const fetchTasksByUser = async (userId) => {
              toast("Fetching user, please wait!")

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/task/gettasks/${userId}`
        );
        //console.log(response);
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    const addItem = async () => {
      if (!inputList) {
        toast.error("Please Enter a task!");
        return;
      }
      toast("Creating task, please wait!")

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/task/create`,
          {
            title: inputList,
            createdBy: localStorage.getItem('userId'),
            createdAt: new Date(),
            status: "todo",
          }
        );

        setItems([...items, response.data.task]);
        // console.log(response);
        toast.success(response.data.message);
        setInputList("")
      } catch (error) {
        toast.error("Error creating task");
      }
    };
    const logout = ()=>
    {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      navigate('/login')
    }
    useEffect(() => {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem('userId')
      // console.log(userId);
      if (token && userId) {
        // Decode the token
        const decodedToken = jwtDecode(token);

        // Check token expiration
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime) {
          // Token has expired
          logout();
        }
      } else {
        // No token in local storage
        logout();
      }
      fetchTasksByUser(userId);
    }, []);
    return (
        <div>
          <button type="button" className=" absolute top-2.5 right-2.5 font-medium tex-xl text-indigo-500 bg-stone-50 hover:bg-stone-100 focus:ring-4 focus:ring-stone-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-stone-50 dark:hover:bg-stone-200 focus:outline-none" onClick={logout}> Log Out</button>
      <h1 className="title text-4xl font-bold">ToDo List</h1>
      <div className="wrapper">
        <div className="head ">
          <div className="dateNtime">
            <div className="dateUp">
              <span className="dateUp1">{days[new Date().getDay()]}, </span>
              <span className="dateUp2">{new Date().getDate()}th</span>
            </div>
            <div className="dateDown">{months[new Date().getMonth()]}</div>
          </div>
          <div className="task">{items ? items.length : 0} tasks</div>
        </div>

        <div className="center_div">
          <ol>
            {items ? (
              items.map((itemval, index) => {
                return <List data={itemval} key={index} setItems={setItems} items={items}></List>;
              })
            ) : (
              <></>
            )}
          </ol>
        </div>
        <div className="bottom">
          <input
            type="text"
            value={inputList}
            placeholder="Add Items"
            onChange={(e) => {
              setInputList(e.target.value);
            }}
          />
          <button onClick={addItem}> + </button>
        </div>
      </div>

        </div>
    );
}

export default Home;
