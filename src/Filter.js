import "./Filter.css";
import { useState } from "react";

function Filter() {
  const [typeIsClicked, setTypeIsClicked] = useState(null);
  const [friendIsClicked, setFriendIsClicked] = useState(null);

  console.log("isClicked", typeIsClicked);

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
  ];

  function handleTypeClick(idx) {
    setTypeIsClicked(idx);
  }

  function handleFriendClick(idx) {
    setFriendIsClicked(idx);
  }

  function resetFilters() {
    setTypeIsClicked(null);
    setFriendIsClicked(null);
  }

  return (
    <div className="Filter">
      <p className="Filter-head">filter</p>
      <div className="Filter-category">
        <p className="Filter-title">TYPE</p>
        {tags.map((el, idx) =>
          <div className="Filter-tag">
            <button type="button" onClick={() => handleTypeClick(idx)}>
              <i className={typeIsClicked === idx ? "bi bi-square-fill" : "bi bi-square"} />
            </button>
            <p>{el}</p>
          </div>)}
      </div>
      <div className="Filter-friends">
        <p className="Filter-title">FRIENDS</p>
        {friends.map((el, idx) =>
          <div className="Filter-tag">
            <button type="button" onClick={() => handleFriendClick(idx)}>
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