import React, { Component } from "react";

import Game from "../Game/Game";
// import Landing from "../Landing/Landing";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game instrument="flute" />
        {/* <Landing /> */}
      </div>
    );
  }
}

export default App;
