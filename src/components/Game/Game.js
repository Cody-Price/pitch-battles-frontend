import React, { Component } from "react";

import Player from "../Player/Player";
import Monster from "../Monster/Monster";
import "./Game.css";

import avatars from "../../utilities/avatars";

class Game extends Component {
  constructor() {
    super();

    this.state = {
      currentLevel: 1
    };
  }

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
            <Monster level={this.state.currentLevel} status="idle" />
          </section>
        </section>
      </main>
    );
  }
}

export default Game;
