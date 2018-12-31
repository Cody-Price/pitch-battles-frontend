import React, { Component } from "react";
import "./EditAvatar.css";
import avatars from "../../utilities/avatars";

class EditAvatar extends Component {
  constructor() {
    super();

    this.state = {
      avatar: 1,
      right: true,
      left: true
    };
  }
  componentDidMount() {
    this.checkAvatar();
  }

  checkAvatar = () => {
    if (this.props.user.attributes.avatar === 1) {
      this.setState({
        left: false,
        avatar: 1
      });
    } else if (this.props.user.attributes.avatar === 12) {
      this.setState({
        right: false,
        avatar: 12
      });
    } else {
      this.setState({
        right: true,
        left: true,
        avatar: this.props.user.attributes.avatar
      });
    }
  };

  handleRightClick = () => {
    if (this.state.avatar === 11) {
      this.setState({
        right: false,
        avatar: 12
      });
    } else {
      this.setState({
        left: true,
        avatar: this.state.avatar + 1
      });
    }
  };

  handleLeftClick = () => {
    if (this.state.avatar === 2) {
      this.setState({
        left: false,
        avatar: 1
      });
    } else {
      this.setState({
        right: true,
        avatar: this.state.avatar - 1
      });
    }
  };

  handleSubmit = () => {
    if (this.props.user.avatar === this.state.avatar) {
      return;
    }

    this.props.changeAvatar(this.state.avatar);
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
      </section>
    );
  }
}

export default EditAvatar;
