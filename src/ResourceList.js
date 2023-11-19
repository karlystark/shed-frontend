import React, { useState } from 'react';
import ResourceCard from "./ResourceCard.js";
import "./ResourceList.css";


function ResourceList({ resources }) {
  const [isClicked, setIsClicked] = useState(null);

  console.log("isClicked", isClicked);

  const tags = [
    "tools",
    "foods",
    "services",
    "auto/bike",
    "outdoors"
  ];

  const friends = [
    "whitney",
    "jen",
    "george",
    "bug"
  ]

  function handleClick(idx) {
    setIsClicked(idx);
  }

  function resetFilters(){
    setIsClicked(null);
  }

  return (
    <div className="ResourceList">
      <div className="ResourceList-banner">
        <img src="orangesquiggle.png" alt="" />
        <h1 className="ResourceList-banner-title"> available resources </h1>
        <img src="carrots.png" alt="" />
      </div>
      <div className="ResourceList-body">

        <div className="ResourceList-filter">
          <p className="ResourceList-filter-head">filter</p>
          <div className="ResourceList-filter-category">
            <p className="ResourceList-filter-title">TYPE</p>
            {tags.map((el, idx) =>
              <div className="ResourceList-filter-tag">
                <button type="button" onClick={() => handleClick(idx)}>
                  <i className={isClicked === idx ? "bi bi-square-fill" : "bi bi-square"} />
                </button>
                <p>{el}</p>
              </div>)}
          </div>
          <div className="ResourceList-filter-friends">
            <p className="ResourceList-filter-title">FRIENDS</p>
            {friends.map((el, idx) =>
              <div className="ResourceList-filter-tag">
                <button type="button" onClick={() => handleClick(idx)}>
                  <i className={isClicked === idx ? "bi bi-square-fill" : "bi bi-square"} />
                </button>
                <p>{el}</p>
              </div>)}
          </div>
          <button type="button" className="btn btn-outline-dark ResourceList-filter-reset" onClick={() => resetFilters()}>reset filters</button>
        </div>

        <div className="ResourceList-list">
          {resources.map(resource =>
            <ResourceCard resource={resource} />)}
        </div>
      </div>
    </div>
  );
}

export default ResourceList;
