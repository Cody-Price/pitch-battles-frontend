import React, { Component } from "react";
import PropTypes from "prop-types";

import { signUp } from "../../utilities/fetchCalls";

import "./Signup.css";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
      role: "student",
      badSignUp: false,
      signUpSuccessful: false,
      fetching: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      badSignUp: false,
      signUpSuccessful: false
    });
  };

  changeRole = role => {
    this.setState({
      role,
      badSignUp: false,
      signUpSuccessful: false
    });
  };

  handleSubmit = e => {
    // ADD VALIDATION //
    // Unique Email, passwords match, passwords min 6 chars //
    e.preventDefault();
    this.signUpUser({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
      role: this.state.role
    });
  };

  signUpUser = async body => {
    this.setFetching();

    if (body.role === "student") {
      body.role = 0;
    } else {
      body.role = 1;
    }

    try {
      const data = await signUp(body);
      if (data.error) {
        throw Error;
      } else {
        this.setState({
          signUpSuccessful: true,
          badSignUp: false,
          fetching: false
        });
      }
    } catch (error) {
      this.setState({
        badSignUp: true,
        signUpSuccessful: false,
        fetching: false
      });
    }
  };

  setFetching = () => {
    this.setState({
      fetching: !this.state.fetching,
      badSignUp: false,
      signUpSuccessful: false
    });
  };

  render() {
    return (
      <section className={`signup-form ${this.props.status}`}>
        <h4 className="signup-form-label">signup</h4>

        <form className="signup-form-form" onSubmit={e => this.handleSubmit(e)}>
          <div className="fn-icon name-icon" />
          <input
            className="signup-firstname-input"
            placeholder="first name"
            type="text"
            name="first_name"
            onChange={this.handleChange}
            value={this.state.first_ame}
          />
          <div className="ln-icon name-icon" />
          <input
            className="signup-lastname-input"
            placeholder="last name"
            type="text"
            name="last_name"
            onChange={this.handleChange}
            value={this.state.last_name}
          />
          <div className="email-icon" />

          <input
            className="signup-email-input"
            placeholder="email"
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <div className="pw1-icon pw-icon" />

          <input
            className="signup-password-input"
            placeholder="password"
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <div className="pw2-icon pw-icon" />

          <input
            className="signup-password-confirm-input"
            placeholder="confirm password"
            type="password"
            name="password_confirmation"
            onChange={this.handleChange}
            value={this.state.password_confirmation}
          />

          <section className="student-teacher-radio">
            <p className="role-label">I am a</p>

            <div
              aria-label="choose student role"
              className={`student-button ${this.state.role}`}
              onClick={() => this.changeRole("student")}
            >
              student
            </div>
            <div
              aria-label="choose teacher role"
              className={`teacher-button ${this.state.role}`}
              onClick={() => this.changeRole("teacher")}
            >
              teacher
            </div>
          </section>
          <button className="sign-up-button" type="submit">
            sign up
          </button>
          <p className={`bad-signup-warning ${this.state.badSignUp}`}>
            signup failed
          </p>
          <p
            className={`signup-successful-message ${
              this.state.signUpSuccessful
            }`}
          >
            signup successful - return to login
          </p>
          <p className={`signing-up-message ${this.state.fetching}`}>
            signing you up...
          </p>
        </form>
        <button
          className="return-to-login-button"
          onClick={this.props.landingChange}
        >
          login
        </button>
      </section>
    );
  }
}

export default Signup;

Signup.propTypes = {
  status: PropTypes.bool,
  landingChange: PropTypes.func
};
