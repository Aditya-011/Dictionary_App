import React, { useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import { Toaster } from "react-hot-toast";
function App() {
  const login = (token,userId)=>
  {
    localStorage.setItem('token',token)
    localStorage.setItem('userId',userId)
  }
  
  return (
    <>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
    <Routes>
    <Route path="/login" element={<Login login={login}/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/" element={<Home></Home>} ></Route>
    </Routes>
    </>
  );
}

export default App;
