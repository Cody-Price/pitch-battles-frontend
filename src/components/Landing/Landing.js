import React, { Component } from "react";
import PropTypes from "prop-types";

import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import ResetPassword from "../ResetPassword/ResetPassword";

import "./Landing.css";
import "./LandingVendorPF.css";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      login: true,
      signup: false,
      forgotPassword: false,
      resetPassword: false
    };
  }

  landingChange = () => {
    this.setState({ login: !this.state.login, signup: !this.state.signup });
  };

  forgotPasswordScreen = () => {
    this.setState({
      login: !this.state.login,
      forgotPassword: !this.state.forgotPassword,
      resetPassword: false
    });
  };

  resetPasswordScreen = () => {
    this.setState({
      login: false,
      signup: false,
      forgotPassword: false,
      resetPassword: true
    });
  };

  loginScreen = () => {
    this.setState({
      login: true,
      signup: false,
      forgotPassword: false,
      resetPassword: false
    });
  };

  render() {
    return (
      <main className="landing-page">
        <header className="landing-page-header">
          <div
            className="logo"
            style={{
              backgroundImage: "url(./spritesheets/bard/bard.png"
            }}
          />
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
            resetPassword={this.resetPasswordScreen}
          />
          <ResetPassword
            status={this.state.resetPassword}
            toLogin={this.loginScreen}
          />
        </section>
        <p className="landing-version-number">ver. 0.5.0 2018-01-17</p>
      </main>
    );
  }
}

export default Landing;

Landing.propTypes = {
  loginUser: PropTypes.func,
  badLogin: PropTypes.bool,
  logginIn: PropTypes.string,
  signUpUser: PropTypes.func,
  signUpSuccessful: PropTypes.bool,
  badSignUp: PropTypes.bool,
  forgotPassword: PropTypes.func
};
