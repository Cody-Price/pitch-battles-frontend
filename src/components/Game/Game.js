import React, { Component } from "react";

import Player from "../Player/Player";
import "./Game.css";

import avatars from "../../utilities/avatars";

class Game extends Component {
  render() {
    const avatar = "1";
    return (
      <main className="game-main">
        <header className="game-header">
          <div className="avatar-border">
            <div className={`header-avatar ${avatars[avatar]}`} />
          </div>
          <h4 className="exit-btn">exit</h4>
        </header>
        <h3 className="timer">25.01</h3>
        <section className="game-background">
          <section className="gameplay-frame">
            <Player avatar={avatar} status="idle" />
          </section>
        </section>
      </main>
    );
  }
}

export default Game;
