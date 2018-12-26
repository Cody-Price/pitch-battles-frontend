import React, { Component } from "react";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

import "./Landing.css";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      login: true,
      signup: false
    };
  }

  landingChange = () => {
    this.setState({ login: !this.state.login, signup: !this.state.signup });
  };

  render() {
    return (
      <main className="landing-page">
        <header className="landing-page-header">
          <div className="logo" />
          <h1 className="game-title">
            Pitch
            <br /> Battles
          </h1>
        </header>
        <section className="login-signup-container">
          <Login
            loginUser={this.props.loginUser}
            landingChange={this.landingChange}
            status={this.state.login}
            badLogin={this.props.badLogin}
          />
          <Signup
            landingChange={this.landingChange}
            status={this.state.signup}
            signUpUser={this.props.signUpUser}
            signUpSuccessful={this.props.signUpSuccessful}
            badSignUp={this.props.badSignUp}
          />
        </section>
      </main>
    );
  }
}

export default Landing;
