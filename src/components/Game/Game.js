import React, { Component } from "react";

import Player from "../Player/Player";
import Monster from "../Monster/Monster";
import Staff from "../Staff/Staff";
import MonsterEffect from "../MonsterEffect/MonsterEffect";
import PlayerEffect from "../PlayerEffect/PlayerEffect";
import GameUserModal from "../GameUserModal/GameUserModal";
import Hearts from "../Hearts/Hearts";
import Victory from "../Victory/Victory";
import "./Game.css";

import avatars from "../../utilities/avatars";
import { instruments } from "../../utilities/instruments";

class Game extends Component {
  constructor() {
    super();

    this.state = {
      clef: "treble",
      currentLevel: 1,
      userModal: false,
      playerHearts: [0, 1, 2],
      monsterHearts: [],
      currentTime: 0,
      start: 0,
      running: false,
      milliseconds: 0,
      playerHit: false,
      monsterHit: false,
      playerStatus: "idle",
      monsterStatus: "idle",
      currentPitch: null,
      gameOver: false,
      victory: false,
      finalVictory: false
    };
  }

  componentDidMount() {
    this.startTimer();
    this.setupGame();
    window.addEventListener("keyup", this.submitGuess);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.submitGuess);
  }

  setupGame = () => {
    const instrument = instruments.find(instrument => {
      return this.props.instrument === instrument.instrument;
    });

    const monsterHearts = instrument.pitches.filter(pitch => {
      return pitch.level <= this.state.currentLevel;
    });

    this.setState(
      {
        monsterHearts,
        clef: instrument.clef
      },
      this.setPitch(monsterHearts)
    );
  };

  submitGuess = (event, input) => {
    let guess;

    if (
      event &&
      (event.key === "a" ||
        event.key === "b" ||
        event.key === "c" ||
        event.key === "d" ||
        event.key === "e" ||
        event.key === "f" ||
        event.key === "g")
    ) {
      console.log("key");
      guess = event.key;
    } else if (event) {
      return;
    } else {
      guess = input;
      console.log("click", event);
    }

    if (guess === this.state.currentPitch.pitch) {
      this.playerAttack();
    } else {
      this.monsterAttack();
    }
  };

  setPitch = (monsterHearts = this.state.monsterHearts) => {
    const index = Math.floor(Math.random() * monsterHearts.length);
    const currentPitch = monsterHearts[index];

    this.setState({
      currentPitch
    });
  };

  playerAttack = () => {
    if (this.state.monsterHearts.length === 1) {
      this.setState(
        {
          playerStatus: "attack",
          monsterStatus: "hit",
          monsterHit: true,
          playerHit: false,
          monsterHearts: this.state.monsterHearts.filter(
            heart => heart !== this.state.currentPitch
          )
        },
        this.startVictory
      );
    } else {
      this.setState({
        playerStatus: "attack",
        monsterStatus: "hit",
        monsterHit: true,
        playerHit: false,
        monsterHearts: this.state.monsterHearts.filter(
          heart => heart !== this.state.currentPitch
        )
      });
    }

    setTimeout(this.setIdle, 1000);
  };

  startVictory = () => {
    setTimeout(this.victory, 1000);
  };

  victory = () => {
    if (this.state.currentLevel === 4) {
      this.setState({ finalVictory: true });
    } else {
      this.setState({ victory: true });
    }
  };

  monsterAttack = () => {
    this.setState({
      playerStatus: "hit",
      monsterStatus: "attack",
      monsterHit: false,
      playerHit: true
    });

    setTimeout(this.setIdle, 1000);
  };

  setIdle = () => {
    this.setState(
      {
        playerHit: false,
        monsterHit: false,
        playerStatus: "idle",
        monsterStatus: "idle"
      },
      this.setPitch
    );
  };

  toggleUserModal = () => {
    this.setState({
      userModal: !this.state.userModal
    });
  };

  startTimer() {
    this.setState({
      currentTime: this.state.currentTime / 1000,
      start: Date.now() - this.state.currentTime,
      running: true
    });
    this.timer = setInterval(() => {
      if (!this.state.running) {
        console.log("notrunning");
        clearInterval(this.timer);
        return;
      }
      this.setState({
        currentTime: Math.ceil((Date.now() - this.state.start) / 1000),
        milliseconds: Date.now() - this.state.start
      });
    }, 500);
  }

  levelUp = () => {
    this.setState(
      {
        currentLevel: this.state.currentLevel + 1,
        playerHit: false,
        monsterHit: false,
        playerStatus: "idle",
        monsterStatus: "idle",
        victory: false
      },
      this.setupGame
    );
  };

  render() {
    const avatar = "4";
    return (
      <main className="game-main">
        <div className="game-area-wrapper">
          <header className="game-header">
            <div className="avatar-border" onClick={this.toggleUserModal}>
              <div className={`header-avatar ${avatars[avatar]}`} />
            </div>
            <GameUserModal
              instrument={this.props.instrument}
              status={this.state.userModal}
            />
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
            <Player avatar={avatar} status={this.state.playerStatus} />
            {this.state.playerHit && <PlayerEffect />}
            <Monster
              level={this.state.currentLevel}
              status={this.state.monsterStatus}
            />
            {this.state.monsterHit && <MonsterEffect />}
          </section>
          {this.state.currentPitch && (
            <Staff
              clef={this.state.clef}
              submitGuess={this.submitGuess}
              currentPitch={this.state.currentPitch.position}
            />
          )}
          {this.state.victory && (
            <Victory
              levelUp={this.levelUp}
              finalVictory={this.state.finalVictory}
              victory={this.state.victory}
            />
          )}
        </div>
      </main>
    );
  }
}

export default Game;
