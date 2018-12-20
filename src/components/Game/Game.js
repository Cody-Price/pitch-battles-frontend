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
      playerHearts: [0, 1, 2],
      monsterHearts: ["a", "b", "c", "d", "e"],
      currentTime: 0,
      start: 0,
      running: false,
      milliseconds: 0,
      playerHit: false,
      monsterHit: false
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  toggleUserModal = () => {
    this.setState({
      userModal: !this.state.userModal
    });
  };

  startTimer() {
    this.setState({
      currentTime: this.state.currentTime / 1000,
      start: Date.now() - this.state.currentTime,
      isOn: true
    });
    this.timer = setInterval(
      () =>
        this.setState({
          currentTime: Math.ceil((Date.now() - this.state.start) / 1000),
          milliseconds: Date.now() - this.state.start
        }),
      500
    );
  }

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
            <section className="hearts-and-timer">
              <Hearts
                hearts={this.state.playerHearts}
                character="player-hearts"
              />
              <div className="timer-frame">
                <h3 className="timer">{this.state.currentTime}</h3>
              </div>
              <Hearts
                hearts={this.state.monsterHearts}
                character="monster-hearts"
              />
            </section>
          </header>
          <section className="gameplay-frame">
            <Player avatar={avatar} status="idle" />
            {this.state.playerHit && <PlayerEffect />}
            <Monster level={this.state.currentLevel} status="idle" />
            {this.state.monsterHit && <MonsterEffect />}
          </section>
          <Staff />
        </div>
      </main>
    );
  }
}

export default Game;
