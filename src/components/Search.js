import "./Search.css";
import React from "react";
import { useState } from "react";

function Search() {
  const [searchStr, setSearchStr] = useState("");
  return (
    <div className="search">
      <div
        className="icon"
        onClick={() => {
          const search = document.querySelector(".search");
          search.classList.toggle("active");
          setTimeout(() => {
            if (search.classList.contains("active")) {
              document.getElementById("mysearch").focus();
            }
          }, 100);
        }}
      ></div>
      <div className="input">
        <input
          type="text"
          placeholder="Buscar en el mundo"
          id="mysearch"
          value={searchStr}
          onChange={(event) => {
            setSearchStr(event.target.value);
          }}
        ></input>
      </div>
      <span
        className="clear"
        onClick={() => {
          setSearchStr("");
        }}
      />
    </div>
  );
}

export default Search;
