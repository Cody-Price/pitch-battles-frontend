import React, { Component } from "react";

import Player from "../Player/Player";
import Monster from "../Monster/Monster";
import Staff from "../Staff/Staff";
import MonsterEffect from "../MonsterEffect/MonsterEffect";
import PlayerEffect from "../PlayerEffect/PlayerEffect";
import "./Game.css";

import avatars from "../../utilities/avatars";

class Game extends Component {
  constructor() {
    super();

    this.state = {
      currentLevel: 2
    };
  }

  render() {
    const avatar = "1";
    return (
      <main className="game-main">
        <div className="game-area-wrapper">
          <header className="game-header">
            <div className="avatar-border">
              <div className={`header-avatar ${avatars[avatar]}`} />
            </div>
            <div className="timer-frame">
              <h3 className="timer">25.01</h3>
            </div>
          </header>
          <section className="gameplay-frame">
            <Player avatar={avatar} status="hit" />
            <PlayerEffect />
            <Monster level={this.state.currentLevel} status="attack" />
            {/* <MonsterEffect /> */}
          </section>
          <Staff />
        </div>
      </main>
    );
  }
}

export default Game;
