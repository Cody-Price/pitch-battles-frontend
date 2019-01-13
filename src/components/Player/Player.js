import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Player.css";

class Player extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(./spritesheets/char${this.props.avatar}/${
            this.props.status
          }.png)`
        }}
        className={`player  ${this.props.status}`}
      >
        <div
          style={{
            backgroundImage: `url(./spritesheets/char${
              this.props.avatar
            }/attack.png)`
          }}
          className="hidden-preload"
        />
        <div
          style={{
            backgroundImage: `url(./spritesheets/char${
              this.props.avatar
            }/idle.png)`
          }}
          className="hidden-preload"
        />
        <div
          style={{
            backgroundImage: `url(./spritesheets/char${
              this.props.avatar
            }/hit.png)`
          }}
          className="hidden-preload"
        />
        <div
          style={{
            backgroundImage: `url(./spritesheets/char${
              this.props.avatar
            }/dead.png)`
          }}
          className="hidden-preload"
        />
        <div
          style={{
            backgroundImage: `url(./spritesheets/char${
              this.props.avatar
            }/victory.png)`
          }}
          className="hidden-preload"
        />
      </div>
    );
  }
}

export default Player;

Player.propTypes = {
  avatar: PropTypes.number,
  status: PropTypes.string
};
