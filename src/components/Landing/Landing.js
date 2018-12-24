import React, { Component } from "react";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";

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
        <AnimatedBackground instance="animated-landing-backer" />
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
          />
          <Signup
            landingChange={this.landingChange}
            status={this.state.signup}
            signUpUser={this.props.signUpUser}
          />
        </section>
      </main>
    );
  }
}

export default Landing;
