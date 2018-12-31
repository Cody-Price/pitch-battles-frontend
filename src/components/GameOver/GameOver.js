import React, { Component } from "react";
import "./GameOver.css";

class GameOver extends Component {
  render() {
    return (
      <section className="game-over" onClick={this.props.exit}>
        <h4 className="game-over-text">GAME OVER</h4>
        <p className="exit-message">click here to exit...</p>
      </section>
    );
  }
}

export default GameOver;
