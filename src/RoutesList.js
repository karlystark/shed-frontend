import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./About.js";
import Home from "./Home.js";
import ResourceList from "./ResourceList.js";
import ResourceDetail from "./ResourceDetail.js";
import UserProfile from "./UserProfile.js";
import NewResourceForm from "./NewResourceForm.js";

function RoutesList({resources, handleAddResource}) {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/users/karlystark" element={<UserProfile resources={resources} />} />
      <Route path="/resources" element={<ResourceList resources={resources}/>} />
      <Route path="/resources/:id" element={<ResourceDetail resources={resources}/>} />
      <Route path="/resources/upload" element={<NewResourceForm resources={resources} handleAddResource={handleAddResource}/>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );


}

export default RoutesList;