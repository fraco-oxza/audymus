import "./AddSong.css";
import { Component } from "react";
import axios from "axios";

import Song from "./components/Song";

class AddSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      song_name: "",
      song_link: "",
      song_image: "",
    };
    this.handle_toggle_menu = this.toggle_menu.bind(this);
    this.handle_handleChangeName = this.handleChangeName.bind(this);
    this.handle_handleChangeImage = this.handleChangeImage.bind(this);
    this.handle_handleChangeLink = this.handleChangeLink.bind(this);
    this.handle_handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const new_song = {
      name: this.state.song_name,
      link: this.state.song_link,
      image: this.state.song_image,
    };
    axios
      .post("https://api.audymus.ml/songs", new_song)
      .then((res) => window.location.reload());
  };

  handleChangeName = (event) => {
    this.setState({ song_name: event.target.value });
  };

  handleChangeImage = (event) => {
    this.setState({ song_image: event.target.value });
  };

  handleChangeLink = (event) => {
    this.setState({ song_link: event.target.value });
  };

  toggle_menu = () => {
    console.log("You click me");
    this.setState({ active: !this.state.active });
  };

  render() {
    return (
      <div>
        <button
          id="plus-button"
          className="clickeable"
          onClick={this.toggle_menu}
        >
          +
        </button>
        <div id={this.state.active ? "add-menu-active" : "add-menu"}>
          <button
            id="close-button"
            className="clickeable"
            onClick={this.toggle_menu}
          >
            X
          </button>
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Nombre de la canción
                <br />
                <input
                  type="text"
                  id="song_name"
                  name="song_name"
                  value={this.state.song_name}
                  onChange={this.handleChangeName}
                />
              </label>
              <br />
              <label>
                Link de la imagen
                <input
                  type="text"
                  id="song_image"
                  name="song_image"
                  value={this.state.song_image}
                  onChange={this.handleChangeImage}
                />
              </label>
              <br />
              <label>
                Link de la canción
                <input
                  type="text"
                  id="song_link"
                  name="song_link"
                  value={this.state.song_link}
                  onChange={this.handleChangeLink}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
            <div id="song_container">
              <Song
                key="0"
                name={this.state.song_name}
                link={this.state.song_link}
                image={this.state.song_image}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddSong;
