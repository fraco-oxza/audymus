import { Component } from "react";
import "./Songs.css";

import Song from "./components/Song";

class Songs extends Component {
  constructor() {
    super();
    this.state = { songs: [] };
  }

  componentDidMount() {
    fetch("https://api.audymus.ml/songs").then((songs) =>
      songs.json().then((x) => this.setState({ songs: x }))
    );
  }

  render() {
    const songs_elements = this.state.songs?.map((song) => (
      <Song
        key={song.id}
        name={song.name}
        link={song.link}
        image={song.image}
      />
    ));
    return <div id="songs_container">{songs_elements}</div>;
  }
}

export default Songs;
