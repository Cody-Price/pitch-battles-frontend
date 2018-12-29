import React, { Component } from "react";
import "./ForgotPassword.css";

import { forgotMyPasswordCall } from "../../utilities/fetchCalls";

class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      success: false,
      error: false
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await forgotMyPasswordCall(this.state.email);
      const parsedResponse = await response.json();
      this.setState({
        success: true
      });
    } catch (error) {
      // console.log(error.message);
      this.setState({ error: true });
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
            <input
              type="email"
              name="email"
              value={this.state.email}
              className="forgot-email-input"
              onChange={event => {
                this.handleChange(event);
              }}
            />
          </div>
          <input
            type="submit"
            className="send-new-pw-btn"
            value="send new password"
          />
        </form>
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
