import React, { Component } from "react";

import "./PlayerEffect.css";

class PlayerEffect extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(./spritesheets/effects/claw.png)`
        }}
        className="player-effect"
      />
    );
  }
}

export default PlayerEffect;
