import React, { Component } from "react";
import "./EditProfile.css";

class EditProfile extends Component {
  constructor() {
    super();

    this.state = {
      first_name: "",
      last_name: "",
      email: ""
    };
  }

  componentDidMount() {
    this.populateOnLoad();
  }

  populateOnLoad = () => {
    this.setState({
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      email: this.props.user.email
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (
      this.state.first_name === "" &&
      this.state.last_name === "" &&
      this.state.email === ""
    ) {
      return;
    }
    const update = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email
    };

    this.props.changeProfile(update);
  };

  render() {
    return (
      <section className="edit-profile">
        <form
          className="edit-profile-form"
          onSubmit={event => {
            this.handleSubmit(event);
          }}
        >
          <p className="first-name-edit-label">first name:</p>
          <input
            name="first_name"
            className="profile-first-name-input"
            value={this.state.first_name}
            placeholder="first name"
            onChange={event => {
              this.handleChange(event);
            }}
          />
          <p className="last-name-edit-label">last name:</p>

          <input
            name="last_name"
            className="profile-last-name-input"
            value={this.state.last_name}
            placeholder="last name"
            onChange={event => {
              this.handleChange(event);
            }}
          />
          <p className="email-edit-label">email:</p>

          <input
            type="email"
            name="email"
            className="profile-email-input"
            value={this.state.email}
            placeholder="email"
            onChange={event => {
              this.handleChange(event);
            }}
          />
          <button type="submit" className="profile-submit-btn">
            submit new info
          </button>
        </form>
      </section>
    );
  }
}

export default EditProfile;
