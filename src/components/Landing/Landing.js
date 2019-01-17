import React, { Component } from "react";
import PropTypes from "prop-types";

import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import ResetPassword from "../ResetPassword/ResetPassword";
import DevMessages from "../DevMessages/DevMessages";

import { version } from "../../content/version";

import "./Landing.css";
import "./LandingVendorPF.css";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      login: true,
      signup: false,
      forgotPassword: false,
      resetPassword: false,
      showDevMessage: false
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

  toggleDevMessage = () => {
    if (this.state.showDevMessage) {
      this.setState({
        login: true,
        signup: false,
        forgotPassword: false,
        resetPassword: false,
        showDevMessage: false
      });
    } else {
      this.setState({
        login: false,
        signup: false,
        forgotPassword: false,
        resetPassword: false,
        showDevMessage: true
      });
    }
  };

  render() {
    return (
      <main className="landing-page">
        <button
          className="toggle-dev-message-button"
          onClick={this.toggleDevMessage}
        />
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
            resetPassword={this.resetPasswordScreen}
          />
          <ResetPassword
            status={this.state.resetPassword}
            toLogin={this.loginScreen}
          />
          {this.state.showDevMessage && (
            <DevMessages closeDevMessage={this.toggleDevMessage} />
          )}
        </section>
        <p className="landing-version-number">
          ver. {version.versionNumber} {version.date}
        </p>
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
