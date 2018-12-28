import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.loginUser(this.state);
  };

  render() {
    return (
      <section className={`login-form ${this.props.status}`}>
        <h4 className="login-form-label">login</h4>
        <form
          className="login-form-form"
          onSubmit={e => {
            this.handleSubmit(e);
          }}
        >
          <div className="login-email-icon" />
          <input
            className="login-email-input"
            placeholder="email"
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <div className="login-pw-icon" />
          <input
            className="login-password-input"
            placeholder="password"
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button className="login-form-button">login</button>
          <p className={`${this.props.badLogin} login-warning`}>
            invalid email/password combination
          </p>
        </form>
        <button
          className="signup-form-switch-button"
          onClick={this.props.landingChange}
        >
          sign up
        </button>
      </section>
    );
  }
}

export default Login;
