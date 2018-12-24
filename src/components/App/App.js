import React, { Component } from "react";
import mockUser from "../../utilities/mockUser";

import { login, signUp, postGameUserUpdate } from "../../utilities/fetchCalls";

import Game from "../Game/Game";
import Landing from "../Landing/Landing";
import StudentDash from "../StudentDash/StudentDash";
import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: undefined,
      webToken: undefined,
      newAcheivements: [],
      newFastestTimes: [],
      fetchError: false,
      gameActive: false,
      instrument: undefined
    };
  }

  // -- LOGIN AND SIGNUP -- //

  loginUser = async body => {
    try {
      const data = await login(body);
      this.setState({
        webToken: data.access_token,
        user: data.user,
        fetchError: false
      });
      console.log(data);
    } catch (error) {
      this.setError();
      console.log(error);
    }
  };

  signUpUser = async body => {
    if (body.role === "student") {
      body.role = 0;
    } else {
      body.role = 1;
    }

    try {
      const data = await signUp(body);
      console.log(data);
      this.setState({
        fetchError: false
      });
    } catch (error) {
      this.setError();
      console.log(error);
    }
  };

  // -- PROCESS GAME RESULTS -- //

  toggleGame = (gameActive, instrument) => {
    console.log(gameActive, instrument);
    this.setState({
      gameActive,
      instrument
    });
  };

  clearAchievmentsAndTimes = () => {
    this.setState({
      newAcheivements: [],
      newFastestTimes: []
    });
  };

  processGame = async update => {
    if (!this.state.user) {
      return;
    }
    try {
      const data = await postGameUserUpdate(update, this.state.user);
      this.setState({
        fetchError: false
      });
      console.log(data);
    } catch (error) {
      console.log(error);
      this.setError();
    }
  };

  // -- FETCH ERROR HANDLING -- //
  setError = () => {
    this.setState({
      fetchError: true
    });
  };

  render() {
    return (
      <div className="App">
        {!this.state.gameActive && (
          <section className="name-game-student-wrapper">
            <AnimatedBackground instance="main-floating-backer" />
            {!this.state.user && (
              <Landing
                loginUser={this.loginUser}
                signUpUser={this.signUpUser}
              />
            )}
            {this.state.user && (
              <StudentDash startGame={this.toggleGame} user={mockUser} />
            )}
            }
          </section>
        )}

        {this.state.gameActive && (
          <Game
            user={mockUser}
            processGame={this.processGame}
            endGame={this.toggleGame}
            instrument={this.state.instrument}
          />
        )}
      </div>
    );
  }
}

export default App;
