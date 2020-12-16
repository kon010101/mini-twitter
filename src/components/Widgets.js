import React, { useState } from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = ({ keyCode }) => {
    if (keyCode === 13) {
    }
  };

  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input
          onChange={(e) => console.log(e.target.value)}
          onKeyDown={handleSearch}
          placeholder="Search Twitter"
          type="text"
        />
      </div>
      <div className="widgets__widgetContainer">
        <h2>Whats Happening</h2>
      </div>
    </div>
  );
}

export default Widgets;
