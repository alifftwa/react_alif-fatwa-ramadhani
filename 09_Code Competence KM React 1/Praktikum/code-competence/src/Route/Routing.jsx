import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/homepage/Homepage";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route element={<Homepage />} path="/" />
      </Routes>
    </>
  );
};

export default Routing;
