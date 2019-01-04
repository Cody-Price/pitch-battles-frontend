import React, { Component } from "react";
import PropTypes from "prop-types";

import "./EditProfile.css";

import { changeProfileFetch } from "../../utilities/fetchCalls";

class EditProfile extends Component {
  constructor() {
    super();

    this.state = {
      first_name: "",
      last_name: "",
      success: false,
      error: false
    };
  }

  componentDidMount() {
    this.populateOnLoad();
  }

  populateOnLoad = () => {
    this.setState({
      first_name: this.props.user.attributes.first_name,
      last_name: this.props.user.attributes.last_name
    });
  };

  changeProfileFetch = async () => {
    this.setState({
      success: false,
      error: false
    });
    const name = {
      first_name: this.state.first_name,
      last_name: this.state.last_name
    };
    try {
      const response = await changeProfileFetch(
        name,
        this.props.user.id,
        this.props.webToken
      );
      console.log(response);
      this.setState(
        {
          success: true,
          error: false
        },
        this.props.getUpdatedUserData
      );
    } catch (error) {
      this.setState({
        error: true,
        success: false
      });
      console.log(error);
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.first_name === "" && this.state.last_name === "") {
      return;
    }
    const update = {
      first_name: this.state.first_name,
      last_name: this.state.last_name
    };

    this.changeProfileFetch(update);
  };

  render() {
    return (
      <section className={`${this.props.userType} edit-profile`}>
        <form
          className={`${this.props.userType} edit-profile-form`}
          onSubmit={event => {
            this.handleSubmit(event);
          }}
        >
          <p className={`${this.props.userType} first-name-edit-label`}>
            first name:
          </p>
          <input
            name="first_name"
            className={`${this.props.userType} profile-first-name-input`}
            value={this.state.first_name}
            placeholder="first name"
            onChange={event => {
              this.handleChange(event);
            }}
          />
          <p className={`${this.props.userType} last-name-edit-label`}>
            last name:
          </p>

          <input
            name="last_name"
            className={`${this.props.userType} profile-last-name-input`}
            value={this.state.last_name}
            placeholder="last name"
            onChange={event => {
              this.handleChange(event);
            }}
          />

          <button
            type="submit"
            className={`${this.props.userType} profile-submit-btn`}
          >
            submit new info
          </button>
        </form>
        <p
          className={`${this.props.userType} ${
            this.state.success
          } profile-error-success-messaging`}
        >
          success!
        </p>
        <p
          className={`${this.props.userType} ${
            this.state.error
          } profile-error-success-messaging`}
        >
          server error - please try again later
        </p>
      </section>
    );
  }
}

export default EditProfile;

EditProfile.propTypes = {
  user: PropTypes.object,
  changeProfile: PropTypes.func,
  userTypes: PropTypes.string,
  getUpdatedUserData: PropTypes.func,
  webToken: PropTypes.string,
  id: PropTypes.number,
  first_name: PropTypes.string,
  last_name: PropTypes.string
};
