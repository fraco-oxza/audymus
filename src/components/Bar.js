import "./Bar.css";

import music_notation from "./icons/icons8-music-notation-96.png";

import Search from "./Search";

function Bar() {
  return (
    <div id="main-bar">
      <a id="main-logo" href="#">
        <img id="image" src={music_notation} />
        <span id="text">Audymus</span>
      </a>
      <Search />
    </div>
  );
}

export default Bar;
