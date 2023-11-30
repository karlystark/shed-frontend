import "./Filter.css";
import { useState } from "react";

function Filter({ filterResources, filterSheds, resetFilter }) {
  const [typeIsClicked, setTypeIsClicked] = useState(null);
  const [friendIsClicked, setFriendIsClicked] = useState(null);

  console.log("isClicked", typeIsClicked);

  const tags = [
    "tools",
    "foods",
    "services",
    "auto/bike",
    "outdoors",
    "tech",
  ];

  const friends = [
    "whitney",
    "jen",
    "george",
    "bug"
  ];

  function handleTypeClick(el, idx) {
    setTypeIsClicked(idx);
    filterResources(el);
  }

  function handleFriendClick(el, idx) {
    setFriendIsClicked(idx);
    filterSheds(el);
  }


  function resetFilters() {
    setTypeIsClicked(null);
    setFriendIsClicked(null);
    resetFilter();
  }

  return (
    <div className="Filter">
      <p className="Filter-head">filter</p>
      <div className="Filter-category">
        <p className="Filter-title">TYPE</p>
        {tags.map((el, idx) =>
          <div key={idx} className="Filter-tag">
            <button type="button" onClick={() => handleTypeClick(el, idx)}>
              <i className={typeIsClicked === idx ? "bi bi-square-fill" : "bi bi-square"} />
            </button>
            <p>{el}</p>
          </div>)}
      </div>
      <div className="Filter-friends">
        <p className="Filter-title">FRIENDS</p>
        {friends.map((el, idx) =>
          <div key={idx} className="Filter-tag">
            <button type="button" onClick={() => handleFriendClick(el, idx)}>
              <i className={friendIsClicked === idx ? "bi bi-square-fill" : "bi bi-square"} />
            </button>
            <p>{el}</p>
          </div>)}
      </div>
      <button type="button" className="btn btn-outline-dark Filter-reset"
        onClick={() => resetFilters()}>reset filters</button>
    </div>
  );
}

export default Filter;