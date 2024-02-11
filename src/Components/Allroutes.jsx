import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Pages/Login";
import User from "../Pages/User";
import Singleuser from "../Pages/Singleuser";
import PrivateRoute from "./PrivateRoute";
import Notfound from "../Pages/Notfound";


const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />
        <Route
          path="/user/:userid"
          element={
            <PrivateRoute>
              <Singleuser />
            </PrivateRoute>
          }
        />
         <Route path="*" element={<Notfound/>}/>
      </Routes>
     
    </div>
  );
};

export default Allroutes;
