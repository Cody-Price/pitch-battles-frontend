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
      <main>
        <header>
          <h1 className="game-title">Pitch Battles</h1>
          <div className="logo" />
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
