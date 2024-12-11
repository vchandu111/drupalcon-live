import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Deals from "../Pages/Deals";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/deals" element={<Deals />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default AppRoutes;
