import React, { Component } from "react";
import "./ForgotPassword.css";
import PropTypes from "prop-types";

import { forgotMyPasswordCall } from "../../utilities/fetchCalls";

class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      success: false,
      error: false,
      fetch: false
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({
      fetching: true
    });

    try {
      const response = await forgotMyPasswordCall(this.state.email);
      console.log(response);
      this.setState({
        success: true,
        fetching: false,
        error: false
      });
    } catch (error) {
      console.log(error.message);
      this.setState({ error: true, fetching: false, success: false });
    }
  };

  render() {
    return (
      <article className={`forgot-pw-wrapper ${this.props.status}`}>
        <p className="forgot-my-pw-label">forgot my password:</p>
        <form
          onSubmit={e => this.handleSubmit(e)}
          className="forgot-password-form"
        >
          <div className="password-flexbox">
            <p className="enter-email-for-new-pw">email</p>
            <div className="forgot-pw-lock-icon" />
            <input
              type="email"
              name="email"
              value={this.state.email}
              className="forgot-email-input"
              placeholder="enter your email address"
              onChange={event => {
                this.handleChange(event);
              }}
            />
          </div>
          <p className={`pw-sent-success ${this.state.success}`}>
            new password sent - check your email
          </p>
          <p className={`pw-sent-failure ${this.state.error}`}>
            email does not match any account
          </p>

          <button className="send-new-pw-btn">send new password</button>
        </form>
        <button onClick={this.props.resetPassword} className="have-reset-token">
          I have a reset token
        </button>
        <button
          onClick={this.props.backToLogin}
          className="backup-from-forgot-pw"
        >
          login
        </button>
      </article>
    );
  }
}

export default ForgotPassword;

ForgotPassword.propTypes = {
  status: PropTypes.bool,
  backToLogin: PropTypes.func,
  resetPassword: PropTypes.func
};
