import "./Search.css";
import { useState } from "react";

function Search() {
  return (
    <div className="search">
      <div
        className="icon"
        onClick={() => {
          const search = document.querySelector(".search");
          search.classList.toggle("active");
        }}
      ></div>
      <div className="input">
        <input
          type="text"
          placeholder="Buscar en el mundo"
          onChange={() => {
            let content = document.getElementById("mysearch").value;
            let pirn = () => {
              console.log(content);
            };

            setTimeout(pirn, 2000);
          }}
          id="mysearch"
        ></input>
      </div>
      <span
        className="clear"
        onClick={() => {
          document.getElementById("mysearch").value = "";
        }}
      />
    </div>
  );
}

export default Search;
