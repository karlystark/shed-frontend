import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./About.js";
import Home from "./Home.js";
import ResourceList from "./ResourceList.js";
import ResourceDetail from "./ResourceDetail.js";
import UserProfile from "./UserProfile.js";
import NewResourceForm from "./NewResourceForm.js";
import SignupForm from "./SignupForm.js";
import LoginForm from "./LoginForm.js";

function RoutesList({resources, handleAddResource, handleAddUser, isLoggedIn, handleLogin}) {

  return (
    <Routes>
      <Route path="/" element={<Home resources={resources} isLoggedIn={isLoggedIn}/>} />
      <Route path="/about" element={<About />} />
      <Route path="/users/karlystark" element={<UserProfile resources={resources} />} />
      <Route path="/resources" element={<ResourceList resources={resources}/>} />
      <Route path="/resources/:id" element={<ResourceDetail resources={resources}/>} />
      <Route path="/resources/upload" element={<NewResourceForm resources={resources} handleAddResource={handleAddResource}/>} />
      <Route path="/signup" element={<SignupForm handleAddUser={handleAddUser}/>} />
      <Route path="/login" element={<LoginForm handleLogin={handleLogin}/>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );


}

export default RoutesList;