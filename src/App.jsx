import React, { useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import { Toaster } from "react-hot-toast";
function App() {
  
  
  return (
    <>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
    <Routes>
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/" element={<Home></Home>} ></Route>
    </Routes>
    </>
  );
}

export default App;
