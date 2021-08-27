import { Link } from "react-router-dom";

import "./Bar.css";

import music_notation from "./icons/icons8-music-notation-96.png";

import Search from "./Search";

function Bar() {
  return (
    <div id="main-bar">
      <Link id="main-logo" to="/">
        <img id="image" alt="Audymus logo" src={music_notation} />
        <span id="text">Audymus</span>
      </Link>
      <Search />
    </div>
  );
}

export default Bar;
