import React, { Component } from "react";
import "./App.css";

// Components import
import Bar from "./components/Bar";
import Songs from "./Songs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bar />
        <Songs />
      </div>
    );
  }
}

export default App;
