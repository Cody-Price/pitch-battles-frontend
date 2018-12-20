import React, { Component } from "react";
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
      role: 0
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  changeRole = role => {
    if (role === "student" && this.state.role !== "student") {
      this.setState({ role });
    } else if (role === "teacher" && this.state.role !== "teacher") {
      this.setState({ role });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUpUser({'first_name': this.state.firstName, 
                          'last_name': this.state.lastName,
                          'email': this.state.email,
                          'password': this.state.passwordOne,
                          'password_confirmation': this.state.passwordTwo,
                          'role': this.state.role 
                          })

  }

  render() {
    return (
      <section className={`signup-form ${this.props.status}`}>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            placeholder="first name"
            type="text"
            name="firstName"
            onChange={this.handleChange}
            value={this.state.firstName}
          />
          <input
            placeholder="last name"
            type="text"
            name="lastName"
            onChange={this.handleChange}
            value={this.state.lastName}
          />
          <input
            placeholder="email"
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <input
            placeholder="password"
            type="password"
            name="passwordOne"
            onChange={this.handleChange}
            value={this.state.passwordOne}
          />
          <input
            placeholder="confirm password"
            type="password"
            name="passwordTwo"
            onChange={this.handleChange}
            value={this.state.passwordTwo}
          />
          <section className="student-teacher-radio">
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
        </form>
        <button onClick={this.props.landingChange}>Login</button>
      </section>
    );
  }
}

export default Signup;
