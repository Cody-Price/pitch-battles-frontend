import React, { Component } from "react";
import mockUser from "../../utilities/mockUser";

import { login, signUp, postGameUserUpdate } from "../../utilities/fetchCalls";

import Game from "../Game/Game";
import Landing from "../Landing/Landing";
import StudentDash from "../StudentDash/StudentDash";
import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";
import Onboarding from "../Onboarding/Onboarding";
import StudentAccount from "../StudentAccount/StudentAccount";
// import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loadingAnimal: "duck",
      user: undefined,
      webToken: undefined,
      newAcheivements: [],
      newFastestTimes: [],
      fetchError: false,
      gameActive: false,
      instrument: undefined,
      activePage: "",
      badLogin: false,
      signUpSuccessful: false,
      badSignUp: false,
      loading: false
    };
  }

  // -- LOGIN AND SIGNUP -- //

  loginUser = async body => {
    this.setState({
      fetchError: false,
      badLogin: false,
      loading: true
    });
    try {
      const data = await login(body);
      this.setState({
        webToken: data.access_token,
        user: data.user,
        fetchError: false,
        activePage: "onboarding",
        loading: false
      });
      console.log(data);
      if (data.error) {
        this.setState({
          badLogin: true,
          fetchError: false,
          badSignUp: false,
          loading: false
        });
      } else {
        this.setState({
          webToken: data.access_token,
          fetchError: false,
          badSignUp: false,
          badLogin: false,
          loading: false
        });
      }
    } catch (error) {
      this.setError(error);
      // console.log(error);
    }
  };

  updateWebToken = webToken => {
    this.setState({
      webToken
    });
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
      if (data.error) {
        this.setState({
          badSignUp: true
        });
      } else {
        this.setState({
          fetchError: false,
          signUpSuccessful: true,
          badSignUp: false
        });
      }
    } catch (error) {
      this.setError();
      console.log(error);
    }
  };

  logout = () => {
    this.setState({
      loadingAnimal: "duck",
      user: undefined,
      webToken: undefined,
      newAcheivements: [],
      newFastestTimes: [],
      fetchError: false,
      gameActive: false,
      instrument: undefined,
      activePage: "",
      badLogin: false,
      signUpSuccessful: false,
      badSignUp: false,
      loading: false
    });
  };

  // -- NAVIGATOR -- //
  toggleGame = (gameActive, instrument) => {
    console.log(gameActive, instrument);
    this.setState({
      gameActive,
      instrument
    });
  };

  navigate = location => {
    this.setState({
      activePage: location
    });
  };

  // -- PROCESS GAME RESULTS -- //

  clearAchievmentsAndTimes = () => {
    this.setState({
      newAcheivements: [],
      newFastestTimes: []
    });
  };

  processGame = async update => {
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
  setError = error => {
    console.log(error.user_authentication);
    this.setState({
      fetchError: true,
      loading: false
    });
  };

  // -- ACCOUNT UPDATES -- //
  changeProfile = () => {};

  changeAvatar = () => {};

  changePassword = () => {};

  render() {
    return (
      <div className={`App ${this.state.loading}`}>
        {!this.state.gameActive && (
          <section className="name-game-student-wrapper">
            <AnimatedBackground instance="main-floating-backer" />
            {!this.state.user && (
              <Landing
                loginUser={this.loginUser}
                signUpUser={this.signUpUser}
                badLogin={this.state.badLogin}
                badSignUp={this.state.badSignUp}
                signUpSuccessful={this.state.signUpSuccessful}
              />
            )}
            {this.state.activePage === "onboarding" && this.state.user && (
              <Onboarding navigate={this.navigate} />
            )}
            {this.state.activePage === "student dash" && this.state.user && (
              <StudentDash
                navigate={this.navigate}
                startGame={this.toggleGame}
                user={mockUser}
              />
            )}
            {this.state.activePage === "student account" && this.state.user && (
              <StudentAccount
                user={mockUser}
                changeProfile={this.changeProfile}
                changeAvatar={this.changeAvatar}
                changePassword={this.changePassword}
                navigate={this.navigate}
                logout={this.logout}
              />
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
