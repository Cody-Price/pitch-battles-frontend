import React, { Component } from "react";
import PropTypes from "prop-types";

import "./ChangePassword.css";

import { login, changePasswordFetch } from "../../utilities/fetchCalls";

class ChangePassword extends Component {
  constructor() {
    super();

    this.state = {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      incompleteError: false,
      incorrectPasswordError: false,
      passwordMatchError: false,
      error: false
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    if (
      !this.state.oldPassword ||
      !this.state.newPassword ||
      !this.state.confirmPassword
    ) {
      this.setState({
        incompleteError: true,
        incorrectPasswordError: false,
        passwordMatchError: false
      });
      return;
    }

    if (this.state.newPassword !== this.state.confirmPassword) {
      this.setState({
        passwordMatchError: true,
        incompleteError: false,
        error: false,
        incorrectPasswordError: false
      });
      return;
    }

    const passwordConfirmed = await this.confirmOldPassword();
    if (!passwordConfirmed) {
      return;
    }

    this.changePassword();
  };

  changePassword = async () => {
    this.setState({
      incompleteError: false,
      incorrectPasswordError: false,
      passwordMatchError: false,
      error: false
    });
    try {
      const response = await changePasswordFetch(
        this.state.oldPassword,
        this.state.newPassword,
        this.props.user.id,
        this.props.webToken
      );

      if (response) {
        this.setState({
          success: true,
          incompleteError: false,
          incorrectPasswordError: false,
          passwordMatchError: false
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        error: true
      });
    }
  };

  confirmOldPassword = async () => {
    const body = {
      email: this.props.user.attributes.email,
      password: this.state.oldPassword
    };

    console.log(body);

    try {
      const response = await login(body);
      if (response.error) {
        throw Error(response.error);
      }
      if (response.access_token) {
        this.props.updateWebToken(response.access_token);
        return true;
      }
    } catch (error) {
      console.log(error);
      this.setState({
        incompleteError: false,
        incorrectPasswordError: true,
        passwordMatchError: false
      });
      return false;
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <section className={`${this.props.userType} change-password`}>
        <form
          className={`${this.props.userType} change-password-form`}
          onSubmit={event => {
            this.handleSubmit(event);
          }}
        >
          <p className={`${this.props.userType} password-component-text`}>
            old password
          </p>
          <input
            type="password"
            name="oldPassword"
            value={this.state.oldPassword}
            placeholder="old password"
            onChange={event => this.handleChange(event)}
            className={`${this.props.userType} old-password-input`}
          />
          <p className={`${this.props.userType} password-component-text`}>
            new password
          </p>
          <input
            type="password"
            name="newPassword"
            value={this.state.newPassword}
            placeholder="new password"
            onChange={event => this.handleChange(event)}
            className={`${this.props.userType} new-password-input`}
          />

          <p className={`${this.props.userType} password-component-text`}>
            confirm password
          </p>
          <input
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            placeholder="confirm password"
            onChange={event => this.handleChange(event)}
            className={`${this.props.userType} new-password-confirm-input`}
          />

          <button type="submit">change password</button>
          <p
            className={`${this.props.userType} ${
              this.state.passwordMatchError
            } password-match-warning`}
          >
            new passwords do not match
          </p>
          <p
            className={`${this.props.userType} ${
              this.state.incorrectPasswordError
            } password-incorrect-warning`}
          >
            old password is incorrect
          </p>
          <p
            className={`${this.props.userType} ${
              this.state.success
            } password-change-success`}
          >
            successfully changed your password
          </p>
          <p
            className={`${this.props.userType} ${
              this.state.incompleteError
            } password-change-success`}
          >
            missing data in fields
          </p>
        </form>
      </section>
    );
  }
}

export default ChangePassword;

ChangePassword.propTypes = {
  changePassword: PropTypes.func,
  user: PropTypes.object,
  updateWebToken: PropTypes.func,
  webToken: PropTypes.string,
  id: PropTypes.number,
  userTypes: PropTypes.string
};
