import "./Search.css";
import { useState } from "react";

function Search() {
  return (
    <div class="search">
      <div
        class="icon"
        onClick={() => {
          const search = document.querySelector(".search");
          search.classList.toggle("active");
        }}
      ></div>
      <div class="input">
        <input
          type="text"
          placeholder="Buscar en el mundo"
          id="mysearch"
        ></input>
      </div>
      <span
        class="clear"
        onClick={() => {
          document.getElementById("mysearch").value = "";
        }}
      />
    </div>
  );
}

export default Search;
