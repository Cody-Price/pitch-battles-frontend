import React, { Component } from "react";

import {
  login,
  signUp,
  postGameUserUpdate,
  userFetch,
  changeAvatarFetch
} from "../../utilities/fetchCalls";

import Game from "../Game/Game";
import Landing from "../Landing/Landing";
import StudentDash from "../StudentDash/StudentDash";
import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";
import Onboarding from "../Onboarding/Onboarding";
import StudentAccount from "../StudentAccount/StudentAccount";
import StudentClassView from "../StudentClassView/StudentClassView";
import TeacherDash from "../TeacherDash/TeacherDash";

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
      this.setState(
        {
          webToken: data.access_token,
          fetchError: false,
          activePage: "onboarding",
          loading: false
        },
        this.getUpdatedUserData
      );
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
      if (data.error) {
        this.setState({
          badSignUp: true,
          fetchError: false,
          signUpSuccessful: false
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
      const data = await postGameUserUpdate(update, this.state.webToken);
      this.setState({
        fetchError: false
      });
      console.log(data);
      this.getUpdatedUserData();
    } catch (error) {
      console.log(error);
      this.setError();
    }
  };

  // -- FETCH ERROR HANDLING -- //
  setError = error => {
    this.setState({
      fetchError: true,
      loading: false
    });
  };

  // -- ACCOUNT UPDATES -- //

  getUpdatedUserData = async () => {
    try {
      const { data } = await userFetch(this.state.webToken);
      this.setState({
        user: data
      });
    } catch (error) {
      console.log(error);
    }
  };

  changeAvatar = async avatar => {
    try {
      await changeAvatarFetch(avatar, this.state.user.id, this.state.webToken);
      this.getUpdatedUserData();
    } catch (error) {
      console.log(error);
    }
  };

  updateWebToken = webToken => {
    this.setState({
      webToken
    });
  };

  render() {
    return (
      <div className={`App ${this.state.loading}`}>
        {!this.state.gameActive && !this.state.user && (
          <section className="name-game-student-wrapper">
            <AnimatedBackground instance="main-floating-backer" />
            {!this.state.user && (
              <Landing
                loginUser={this.loginUser}
                signUpUser={this.signUpUser}
                badLogin={this.state.badLogin}
                badSignUp={this.state.badSignUp}
                signUpSuccessful={this.state.signUpSuccessful}
                loggingIn={this.state.loading}
                forgotPassword={this.state.forgotPassword}
              />
            )}
            }
          </section>
        )}
        {!this.state.gameActive &&
          this.state.user &&
          this.state.user.attributes.role === "student" && (
            <main className="student-facing-ui">
              <AnimatedBackground instance="main-floating-backer" />

              {this.state.activePage === "onboarding" && (
                <Onboarding navigate={this.navigate} />
              )}

              {this.state.activePage === "student dash" && (
                <StudentDash
                  webToken={this.state.webToken}
                  getUpdatedUserData={this.getUpdatedUserData}
                  navigate={this.navigate}
                  startGame={this.toggleGame}
                  user={this.state.user}
                />
              )}

              {this.state.activePage === "student account" && (
                <StudentAccount
                  user={this.state.user}
                  changeProfile={this.changeProfile}
                  changeAvatar={this.changeAvatar}
                  changePassword={this.changePassword}
                  navigate={this.navigate}
                  logout={this.logout}
                  updateWebToken={this.updateWebToken}
                  webToken={this.state.webToken}
                  getUpdatedUserData={this.getUpdatedUserData}
                />
              )}
              {this.state.activePage === "student class view" && (
                <StudentClassView
                  webToken={this.state.webToken}
                  navigate={this.navigate}
                />
              )}
            </main>
          )}

        {this.state.gameActive && (
          <Game
            user={this.state.user}
            processGame={this.processGame}
            endGame={this.toggleGame}
            instrument={this.state.instrument}
          />
        )}
        {this.state.user && this.state.user.attributes.role === "teacher" && (
          <TeacherDash
            user={this.state.user}
            webToken={this.state.webToken}
            changeProfile={this.changeProfile}
            changePassword={this.changePassword}
            passwordChangeSuccessful={this.passwordChangeSuccessful}
            getUpdatedUserData={this.getUpdatedUserData}
            updateWebToken={this.updateWebToken}
            logout={this.logout}
          />
        )}
      </div>
    );
  }
}

export default App;
