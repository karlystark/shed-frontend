import React from 'react';
import ResourceCard from "./ResourceCard.js";
import Filter from "./Filter.js";
import "./ResourceList.css";
import { useState } from "react";


function ResourceList({ resources }) {
  const [filteredResources, setFilteredResources] = useState(resources);

  console.log("filteredResources=", filteredResources);

  function filterSheds(username) {
    const filteredSheds = resources.filter(resource => resource.user === username);
    setFilteredResources(filteredSheds);
  }

  function filterResources(type) {
    const filteredItems = resources.filter(resource => resource.category === type);
    setFilteredResources(filteredItems);

  }

  function resetFilter() {
    setFilteredResources(resources);
  }

  return (
    <div className="ResourceList">
      <div className="ResourceList-banner">
        <img src="orangesquiggle.png" alt="" />
        <h1 className="ResourceList-banner-title"> shared resources </h1>
        <img src="carrots.png" alt="" />
      </div>
      <div className="ResourceList-body">
        <Filter filterResources={filterResources}
          filterSheds={filterSheds}
          resetFilter={resetFilter} />
        <div className="ResourceList-list">
          {filteredResources.map(resource =>
            <ResourceCard resource={resource} />)}
        </div>
      </div>
    </div>
  );
}

export default ResourceList;
