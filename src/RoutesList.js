import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./About.js";
import Home from "./Home.js";
import ResourceList from "./ResourceList.js";
import ResourceDetail from "./ResourceDetail.js";

function RoutesList({resources}) {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resources" element={<ResourceList resources={resources}/>} />
      <Route path="/resources/:id" element={<ResourceDetail resources={resources}/>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );


}

export default RoutesList;