import React, { Component } from "react";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import ForgotPassword from "../ForgotPassword/ForgotPassword";

import "./Landing.css";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      login: true,
      signup: false,
      forgotPassword: false
    };
  }

  landingChange = () => {
    this.setState({ login: !this.state.login, signup: !this.state.signup });
  };

  forgotPasswordScreen = () => {
    this.setState({
      login: !this.state.login,
      forgotPassword: !this.state.forgotPassword
    });
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
            loggingIn={this.props.loggingIn}
            forgotPasswordScreen={this.forgotPasswordScreen}
          />
          <Signup
            landingChange={this.landingChange}
            status={this.state.signup}
            signUpUser={this.props.signUpUser}
            signUpSuccessful={this.props.signUpSuccessful}
            badSignUp={this.props.badSignUp}
          />
          <ForgotPassword
            forgotPassword={this.props.forgotPassword}
            backToLogin={this.forgotPasswordScreen}
            status={this.state.forgotPassword}
          />
        </section>
      </main>
    );
  }
}

export default Landing;
