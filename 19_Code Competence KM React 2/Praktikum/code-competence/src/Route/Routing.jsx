import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/homepage/Homepage";
import About from "../pages/about/About";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route element={<Homepage />} path="/" />
        <Route element={<About />} path="/about" />
      </Routes>
    </>
  );
};

export default Routing;
