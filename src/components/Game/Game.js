import React, { Component } from "react";

import Player from "../Player/Player";
import Monster from "../Monster/Monster";
import Staff from "../Staff/Staff";
import MonsterEffect from "../MonsterEffect/MonsterEffect";
import PlayerEffect from "../PlayerEffect/PlayerEffect";
import GameUserModal from "../GameUserModal/GameUserModal";
import Hearts from "../Hearts/Hearts";
import Victory from "../Victory/Victory";
import GameOver from "../GameOver/GameOver";
import "./Game.css";

import avatars from "../../utilities/avatars";
import { instruments } from "../../utilities/instruments";
import gameAnalysis from "../../utilities/postGameAnalysis";
// import { postGameAnalysis } from "../../utilities/postGameAnalysis";

class Game extends Component {
  constructor() {
    super();

    this.state = {
      clef: "treble",
      currentLevel: 1,
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
      finalVictory: false,
      times: [],
      perfectScores: [],
      userModal: false,
      kickedOff: false
    };
  }

  componentDidMount() {
    window.addEventListener("keyup", this.submitGuess);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.submitGuess);
  }

  // -- GAME SETUP -- //

  kickOff = () => {
    this.setupGame();
    this.startTimer();
  };

  setupGame = () => {
    const instrument = this.findInstrument();
    const monsterHearts = this.findMonsterHearts(instrument);
    this.setState(
      {
        monsterHearts,
        clef: instrument.clef,
        playerHearts: [0, 1, 2],
        playerHit: false,
        monsterHit: false,
        playerStatus: "idle",
        monsterStatus: "idle",
        gameOver: false,
        victory: false,
        finalVictory: false,
        kickedOff: true
      },
      this.setPitch(monsterHearts)
    );
  };

  findInstrument = () => {
    return instruments.find(instrument => {
      return this.props.instrument === instrument.instrument;
    });
  };

  findMonsterHearts = instrument => {
    return instrument.pitches.filter(pitch => {
      return pitch.level <= this.state.currentLevel;
    });
  };

  startTimer = () => {
    this.setState({
      currentTime: this.state.milliseconds / 1000,
      start: Date.now() - this.state.currentTime,
      running: true
    });

    this.timer = setInterval(() => {
      if (!this.state.running) {
        clearInterval(this.timer);
        return;
      }
      this.setState({
        currentTime: Math.ceil((Date.now() - this.state.start) / 1000),
        milliseconds: Date.now() - this.state.start
      });
    }, 200);
  };

  resetGame = () => {
    this.setState(
      {
        currentLevel: 1,
        perfectScores: [],
        times: []
      },
      this.setupGame
    );
    this.startTimer();
  };

  // -- GAME STATS HANDLING -- //

  setPitch = (monsterHearts = this.state.monsterHearts) => {
    const index = Math.floor(Math.random() * monsterHearts.length);
    const currentPitch = monsterHearts[index];

    this.setState({
      currentPitch
    });
  };

  submitGuess = (event, input) => {
    const check = this.checkStatus();

    if (!check) {
      return;
    }

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
      guess = event.key;
    } else if (event) {
      return;
    } else {
      guess = input;
    }

    if (guess === this.state.currentPitch.pitch) {
      this.playerAttack();
    } else {
      this.monsterAttack();
    }
  };

  checkStatus = () => {
    if (
      this.state.victory ||
      this.state.playerStatus === "attack" ||
      this.state.monsterStatus === "attack" ||
      this.state.playerStatus === "dead" ||
      this.state.monsterStatus === "dead" ||
      this.state.victory ||
      this.state.gameOver ||
      this.state.finalVictory
    ) {
      return false;
    } else {
      return true;
    }
  };

  // -- ANIMATION HANDLING -- //

  playerAttack = () => {
    this.setState({
      playerStatus: "attack",
      monsterStatus: "hit",
      monsterHit: true,
      playerHit: false
    });
    setTimeout(this.monsterHitResolve, 1000);
  };

  monsterAttack = () => {
    this.setState({
      playerStatus: "hit",
      monsterStatus: "attack",
      monsterHit: false,
      playerHit: true
    });

    setTimeout(this.playerHitResolve, 1000);
  };

  monsterHitResolve = () => {
    if (this.state.monsterHearts.length === 1) {
      this.monsterDeath();
    } else {
      this.monsterHitIdle();
    }
  };

  monsterDeath = () => {
    this.setState({
      times: [...this.state.times, this.state.milliseconds],
      running: false,
      monsterHearts: [],
      monsterStatus: "dead"
    });
    setTimeout(this.victory, 3000);
  };

  monsterHitIdle = () => {
    this.setState(
      {
        playerHit: false,
        monsterHit: false,
        playerStatus: "idle",
        monsterStatus: "idle",
        monsterHearts: this.state.monsterHearts.filter(
          heart => heart !== this.state.currentPitch
        )
      },
      this.setPitch
    );
  };

  playerHitResolve = () => {
    if (this.state.playerHearts.length === 1) {
      this.playerDeath();
    } else {
      this.playerHitIdle();
    }
  };

  playerDeath = () => {
    this.setState({
      playerHit: false,
      monsterHit: false,
      playerStatus: "dead",
      monsterStatus: "idle",
      playerHearts: []
    });
    setTimeout(this.gameOver, 3000);
  };

  playerHitIdle = () => {
    this.setState({
      playerHit: false,
      monsterHit: false,
      playerStatus: "idle",
      monsterStatus: "idle",
      playerHearts: this.state.playerHearts.filter((heart, index) => {
        return index > 0;
      })
    });
  };

  // -- END LEVEL/GAME -- //

  victory = () => {
    if (this.state.currentLevel === 4) {
      this.setState({
        finalVictory: true,
        playerStatus: "victory"
      });
    } else {
      this.setState({
        victory: true,
        playerStatus: "victory"
      });
    }

    this.checkPerfect();
  };

  checkPerfect() {
    if (this.state.playerHearts.length === 3) {
      this.setState({
        perfectScores: [...this.state.perfectScores, this.state.currentLevel]
      });
    }
  }

  gameOver = () => {
    this.setState(
      {
        gameOver: true,
        running: false
      },
      this.processGame
    );
  };

  processGame = () => {
    if (!this.props.user) {
      return;
    }

    const gameResults = {
      times: this.state.times,
      perfectScores: this.state.perfectScores
    };
    const update = gameAnalysis.postGameAnalysis(this.props.user, gameResults);
    console.log(update);
    if (!update) {
      return;
    } else {
      this.props.processGame(update);
    }

    // PUSH THESE RESULTS UP TO APP //
  };

  // -- MODAL HANDLING -- //

  toggleUserModal = () => {
    this.setState({
      userModal: !this.state.userModal
    });
  };

  levelUp = () => {
    this.setState(
      {
        currentLevel: this.state.currentLevel + 1,
        playerHit: false,
        monsterHit: false,
        playerStatus: "idle",
        monsterStatus: "idle",
        victory: false,
        running: true
      },
      this.setupGame
    );
    this.startTimer();
  };

  exitGame = () => {
    this.setState(
      {
        currentLevel: 1,
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
        finalVictory: false,
        times: [],
        perfectScores: [],
        userModal: false
      },
      this.props.endGame(false)
    );
  };

  render() {
    return (
      <main className="game-main">
        <div className="game-area-wrapper">
          <header className="game-header">
            <div
              className="game-avatar-circle"
              onClick={this.toggleUserModal}
            />
            <div className="avatar-border">
              <div
                className={`header-avatar ${avatars[this.props.user.avatar]}`}
              />
            </div>
            <GameUserModal
              endGame={this.exitGame}
              instrument={this.props.instrument}
              status={this.state.userModal}
              reset={this.resetGame}
            />
            <section className="hearts-and-timer">
              <Hearts
                hearts={this.state.playerHearts}
                character="player-hearts"
              />
              <div className="timer-frame">
                {this.state.running && (
                  <h3 className="timer">{this.state.currentTime}</h3>
                )}
                {!this.state.running && <h3 className="timer">-</h3>}
              </div>
              <Hearts
                hearts={this.state.monsterHearts}
                character="monster-hearts"
              />
            </section>
          </header>
          <section className="gameplay-frame">
            <Player
              avatar={this.props.user.avatar}
              status={this.state.playerStatus}
            />
            {this.state.playerHit && <PlayerEffect />}
            <Monster
              level={this.state.currentLevel}
              status={this.state.monsterStatus}
            />
            {this.state.monsterHit && <MonsterEffect />}
          </section>
          {this.state.gameOver && <GameOver />}
          {!this.state.kickedOff && (
            <button
              className={`kickoff-btn ${this.state.kickedOff}`}
              onClick={this.kickOff}
            >
              start
            </button>
          )}
          {this.state.currentPitch && !this.state.gameOver && (
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
              time={this.state.times}
            />
          )}
        </div>
      </main>
    );
  }
}

export default Game;
