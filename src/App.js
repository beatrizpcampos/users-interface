import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import backgroundImg from '../src/assets/background-img.webp'
import Register from "./components/Register";
import "./styles.css";
import User from "./components/User";

function App() {
  return (
    <Router>
      <div className="container">
      <img src={backgroundImg} className="background-img"/>        
       <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;