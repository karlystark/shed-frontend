import React from 'react';
import ResourceCard from "./ResourceCard.js";
import Filter from "./Filter.js";
import "./ResourceList.css";


function ResourceList({ resources }) {

  return (
    <div className="ResourceList">
      <div className="ResourceList-banner">
        <img src="orangesquiggle.png" alt="" />
        <h1 className="ResourceList-banner-title"> shared resources </h1>
        <img src="carrots.png" alt="" />
      </div>
      <div className="ResourceList-body">
        <Filter />
        <div className="ResourceList-list">
          {resources.map(resource =>
            <ResourceCard resource={resource} />)}
        </div>
      </div>
    </div>
  );
}

export default ResourceList;
