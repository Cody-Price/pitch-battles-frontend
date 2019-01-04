import React, { Component } from "react";
import "./ResetPassword.css";
import PropTypes from "prop-types";

import { resetPasswordFetch } from "../../utilities/fetchCalls";

class ResetPassword extends Component {
  constructor() {
    super();

    this.state = {
      password: "",
      confirmPassword: "",
      webToken: "",
      passwordMatchError: false,
      webTokenError: false,
      success: false
    };
  }

  componentWillUnmount() {
    clearTimeout(this._timeout);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        passwordMatchError: true,
        webTokenError: false,
        success: false
      });
      this._timeout = setTimeout(this.clearErrors, 5000);
      return;
    }

    try {
      const data = await resetPasswordFetch(
        this.state.password,
        this.state.webToken
      );
      if (data.error) {
        throw data.error;
      } else {
        this.setState({
          webTokenError: false,
          passwordMatchError: false,
          success: true
        });
      }
      console.log(data);
    } catch (error) {
      this.setState({
        passwordMatchError: false,
        webTokenError: true,
        success: false
      });
      console.log(error);
      this._timeout = setTimeout(this.clearErrors, 5000);
    }
  };

  clearError = () => {
    this.setState({
      passwordMatchError: false,
      webTokenError: false
    });
  };

  render() {
    return (
      <article
        className={`reset-password-container-frame ${this.props.status}`}
      >
        <form
          onSubmit={e => {
            this.handleSubmit(e);
          }}
          className={`reset-password-form `}
        >
          <p className="reset-pw-label">reset password</p>
          <div className="password-reset-icon-one" />
          <input
            name="password"
            value={this.state.password}
            className="reset-pw-input pw-reset-field"
            placeholder="password"
            onChange={e => {
              this.handleChange(e);
            }}
          />
          <div className="password-reset-icon-two" />
          <input
            name="confirmPassword"
            value={this.state.confirmPassword}
            className="reset-pw-input confirm-pw-reset-field"
            placeholder="confirm password"
            onChange={e => {
              this.handleChange(e);
            }}
          />
          <div className="webtoken-icon" />
          <input
            name="webToken"
            value={this.state.webToken}
            className="reset-pw-input webtoken-pw-reset-field"
            placeholder="reset token"
            onChange={e => {
              this.handleChange(e);
            }}
          />
          <button className="reset-pw-button">reset password</button>
        </form>
        <p className={`success-message-reset ${this.state.success}`}>
          password succesfully changed!
        </p>
        <p className={`fail-message-reset ${this.state.webTokenError}`}>
          attempt failed - check your webtoken!
        </p>
        <p className={`no-pw-match-reset ${this.state.passwordMatchError}`}>
          passwords do not match!
        </p>

        <button onClick={this.props.toLogin} className="back-to-login-btn">
          login
        </button>
      </article>
    );
  }
}

export default ResetPassword;

ResetPassword.propTypes = {
  toLogin: PropTypes.func
};
