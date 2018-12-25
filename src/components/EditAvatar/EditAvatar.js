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
    if (this.props.user.avatar === 1) {
      this.setState({
        left: false,
        avatar: 1
      });
    } else if (this.props.user.avatar === 10) {
      this.setState({
        right: false,
        avatar: 10
      });
    } else {
      this.setState({
        right: true,
        left: true,
        avatar: this.props.user.avatar
      });
    }
  }

  handleRightClick = () => {
    if (this.state.avatar === 9) {
      this.setState({
        right: false,
        avatar: 10
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

  render() {
    return (
      <section className={`edit-avatar-section ${this.props.status}`}>
        <div
          className={`avatar-editor-current ${avatars[this.state.avatar]}`}
        />
        <div className="avatar-left-arrow" onClick={this.handleLeftClick} />
        <div className="avatar-right-arrow" onClick={this.handleRightClick} />
        <button onClick={this.handleSelect} className="change-avatar-button">
          choose avatar
        </button>
      </section>
    );
  }
}

export default EditAvatar;
