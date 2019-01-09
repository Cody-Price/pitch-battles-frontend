import React, { Component } from "react";
import "./EditAvatar.css";
import avatars from "../../utilities/avatars";
import PropTypes from "prop-types";
import { changeAvatarFetch } from "../../utilities/fetchCalls";

class EditAvatar extends Component {
  constructor() {
    super();

    this.state = {
      avatar: 1,
      right: true,
      left: true,
      success: false,
      error: false
    };
  }
  componentDidMount() {
    this.checkAvatar();
  }

  checkAvatar = () => {
    if (this.props.user.attributes.avatar === 1) {
      this.setState({
        left: false,
        avatar: 1,
        success: false,
        error: false
      });
    } else if (this.props.user.attributes.avatar === 14) {
      this.setState({
        right: false,
        avatar: 14,
        success: false,
        error: false
      });
    } else {
      this.setState({
        right: true,
        left: true,
        avatar: this.props.user.attributes.avatar,
        success: false,
        error: false
      });
    }
  };

  handleRightClick = () => {
    if (this.state.avatar === 13) {
      this.setState({
        right: false,
        avatar: 14,
        success: false,
        error: false
      });
    } else {
      this.setState({
        left: true,
        avatar: this.state.avatar + 1,
        success: false,
        error: false
      });
    }
  };

  handleLeftClick = () => {
    if (this.state.avatar === 2) {
      this.setState({
        left: false,
        avatar: 1,
        success: false,
        error: false
      });
    } else {
      this.setState({
        right: true,
        avatar: this.state.avatar - 1,
        success: false,
        error: false
      });
    }
  };

  handleSubmit = () => {
    if (this.props.user.avatar === this.state.avatar) {
      return;
    }

    this.changeAvatar(this.state.avatar);
  };

  changeAvatar = async avatar => {
    try {
      await changeAvatarFetch(avatar, this.props.user.id, this.props.webToken);
      this.setState({
        success: true,
        error: false
      });
      this.props.getUpdatedUserData();
    } catch (error) {
      console.log(error);
      this.setState({
        success: false,
        error: true
      });
    }
  };

  render() {
    return (
      <section className={`edit-avatar-section ${this.props.status}`}>
        <h3 className="avatar-editor-label">change your avatar</h3>
        <div className="edit-avatar-circle" />
        <div className="avatar-editor-avatar-backer">
          <div
            className={`avatar-editor-current ${avatars[this.state.avatar]}`}
          />
        </div>
        <div
          className={`avatar-left-arrow ${this.state.left}`}
          onClick={this.handleLeftClick}
        />
        <div
          className={`avatar-right-arrow ${this.state.right}`}
          onClick={this.handleRightClick}
        />
        <button onClick={this.handleSubmit} className="change-avatar-button">
          choose avatar
        </button>
        <p className={`${this.state.success} avatar-success`}>success!</p>
        <p className={`${this.state.error} avatar-fail`}>server error...</p>
      </section>
    );
  }
}

export default EditAvatar;

EditAvatar.propTypes = {
  user: PropTypes.object,
  changeAvatar: PropTypes.func,
  status: PropTypes.string,
  avatar: PropTypes.number
};
