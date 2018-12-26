import React, { Component } from "react";
import { login } from "../../utilities/fetchCalls";
import "./ChangePassword.css";

class ChangePassword extends Component {
  constructor() {
    super();

    this.state = {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      incompleteError: false,
      incorrectPasswordError: false,
      passwordMatchError: false
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
        incompleteError: true
      });
    }

    if (this.state.newPassword !== this.state.confirmPassword) {
      this.setState({
        passwordMatchError: true
      });
      return;
    }

    const passwordConfirmed = await this.confirmOldPassword();
    if (!passwordConfirmed) {
      return;
    }

    this.props.updatePassword(this.state.newPassword);
  };

  confirmOldPassword = async () => {
    const body = {
      email: this.props.user.email,
      password: this.state.oldPassword
    };

    try {
      const response = await login(body);
      if (response.access_token) {
        this.props.updateWebToken(response.access_token);
        return true;
      }
    } catch (error) {
      console.log(error);
      this.setState({
        incorrectPasswordError: true
      });
      return false;
    }

    // this.props.updateWebToken(body.)
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <section className={`change-password`}>
        <form
          className="change-password-form"
          onSubmit={event => {
            this.handleSubmit(event);
          }}
        >
          <p className="password-component-text">old password</p>
          <input
            type="password"
            name="oldPassword"
            value={this.state.oldPassword}
            placeholder="old password"
            onChange={event => this.handleChange(event)}
            className="old-password-input"
          />
          <p className="password-component-text">new password</p>
          <input
            type="password"
            name="newPassword"
            value={this.state.newPassword}
            placeholder="new password"
            onChange={event => this.handleChange(event)}
            className="new-password-input"
          />

          <p className="password-component-text">confirm password</p>
          <input
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            placeholder="confirm password"
            onChange={event => this.handleChange(event)}
            className="new-password-confirm-input"
          />

          <button type="submit">change password</button>
        </form>
      </section>
    );
  }
}

export default ChangePassword;
