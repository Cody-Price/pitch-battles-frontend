import React, { Component } from "react";

import Player from "../Player/Player";
import Monster from "../Monster/Monster";
import Staff from "../Staff/Staff";
import MonsterEffect from "../MonsterEffect/MonsterEffect";
import PlayerEffect from "../PlayerEffect/PlayerEffect";
import GameUserModal from "../GameUserModal/GameUserModal";
import Hearts from "../Hearts/Hearts";
import "./Game.css";

import avatars from "../../utilities/avatars";

class Game extends Component {
  constructor() {
    super();

    this.state = {
      currentLevel: 2,
      userModal: false,
      playerHearts: [0, 0, 0],
      monsterHearts: [0, 0, 0, 0, 0]
    };
  }

  toggleUserModal = () => {
    this.setState({
      userModal: !this.state.userModal
    });
  };

  render() {
    const avatar = "1";
    return (
      <main className="game-main">
        <div className="game-area-wrapper">
          <header className="game-header">
            <div className="avatar-border" onClick={this.toggleUserModal}>
              <div className={`header-avatar ${avatars[avatar]}`} />
            </div>
            <GameUserModal status={this.state.userModal} />
            <div className="timer-frame">
              <h3 className="timer">25.01</h3>
            </div>
          </header>
          <section className="gameplay-frame">
            <Hearts
              hearts={this.state.playerHearts}
              character="player-hearts"
            />
            <Player avatar={avatar} status="idle" />
            {/* <PlayerEffect /> */}
            <Monster level={this.state.currentLevel} status="idle" />
            <Hearts
              hearts={this.state.monsterHearts}
              character="monster-hearts"
            />

            {/* <MonsterEffect /> */}
          </section>
          <Staff />
        </div>
      </main>
    );
  }
}

export default Game;
