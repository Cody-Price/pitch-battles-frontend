import React, { Component } from "react";
import "./TeacherAccount.css";
import PropTypes from "prop-types";
import EditProfile from "../EditProfile/EditProfile";
import ChangePassword from "../ChangePassword/ChangePassword";

class TeacherAccount extends Component {
  render() {
    console.log(this.props.webToken);
    return (
      <main className="teacher-account">
        <p onClick={this.props.logout} className="teacher-logout-label">
          logout
        </p>
        <h3 className="teacher-account-label">Teacher Account Info</h3>
        <EditProfile
          userType="teacher"
          user={this.props.user}
          changeProfile={this.props.changeProfile}
          getUpdatedUserData={this.props.getUpdatedUserData}
          webToken={this.props.webToken}
        />
        <h3 className="teacher-password-label">Change Password</h3>
        <ChangePassword
          userType="teacher"
          user={this.props.user}
          updateWebToken={this.props.updateWebToken}
          webToken={this.props.webToken}
        />
      </main>
    );
  }
}

export default TeacherAccount;


TeacherAccount.propTypes = {
  logout: PropTypes.func,
  user: PropTypes.object,
  webToken: 'string',
  updateWebToken: PropTypes.func
  changeProfile: PropTypes.func
};