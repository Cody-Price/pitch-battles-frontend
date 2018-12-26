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

  render() {
    return (
      <main className="student-account-page">
        <nav className="student-account-nav" />
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
