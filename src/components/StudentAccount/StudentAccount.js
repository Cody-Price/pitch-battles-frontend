import React, { Component } from "react";
import "./StudentAccount.css";

import EditAvatar from "../EditAvatar/EditAvatar";
import EditProfile from "../EditProfile/EditProfile";
import ChangePassword from "../ChangePassword/ChangePassword";

class StudentAccount extends Component {
  constructor() {
    super();

    this.state = {
      activePage: "edit-profile-active"
    };
  }

  navigate = string => {
    if (string !== this.state.activePage) {
      this.setState({
        activePage: string
      });
    } else {
      return;
    }
  };

  render() {
    return (
      <main className="student-account-page">
        <button
          onClick={() => {
            this.props.navigate("student dash");
          }}
          className="back-to-dash-button"
        >
          back
        </button>
        <h3 className="student-account-label">user account settings</h3>
        <ul className="student-account-nav">
          <li
            className={`profile-link ${this.state.activePage}`}
            onClick={() => {
              this.navigate("edit-profile-active");
            }}
          >
            edit profile
          </li>
          <li
            className={`avatar-link ${this.state.activePage}`}
            onClick={() => {
              this.navigate("edit-avatar-active");
            }}
          >
            edit avatar
          </li>
          <li
            className={`password-link ${this.state.activePage}`}
            onClick={() => {
              this.navigate("change-password-active");
            }}
          >
            change password
          </li>
        </ul>
        <section className="student-account-active-tab">
          {this.state.activePage === "edit-profile-active" && (
            <EditProfile
              user={this.props.user}
              changeProfile={this.props.changeProfile}
            />
          )}
          {this.state.activePage === "edit-avatar-active" && (
            <EditAvatar
              user={this.props.user}
              changeAvatar={this.props.changeAvatar}
            />
          )}
          {this.state.activePage === "change-password-active" && (
            <ChangePassword
              user={this.props.user}
              changePassword={this.props.changePassword}
            />
          )}
        </section>
      </main>
    );
  }
}

export default StudentAccount;
