import React, { Component } from "react";
import "./JoinClass.css";
import PropTypes from 'prop-types';

import { joinClassFetch } from "../../utilities/fetchCalls";

class JoinClass extends Component {
  constructor() {
    super();
    this.state = {
      classKey: ""
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
      const data = await joinClassFetch(
        this.state.classKey,
        this.props.user.id,
        this.props.webToken
      );

      this.props.getUpdatedUserData();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)} className="join-class-form">
        <p>Join a class - </p>
        <input
          type="text"
          name="classKey"
          className="class-key-input"
          value={this.state.classKey}
          placeholder="class key"
          onChange={e => this.handleChange(e)}
        />
        <button className="join-class-submit">join</button>
      </form>
    );
  }
}

export default JoinClass;

JoinClass.propTypes = {
  id: PropTypes.number,
  webToken: PropTypes.string,
  getUpdatedUserData: PropTypes.func
}
