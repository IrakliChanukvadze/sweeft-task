import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Context } from "./Context/Context";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./Components/UserProfile";

function App() {
  return (
    <div className="App pt-6">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
