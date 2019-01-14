import React, { Component } from "react";

import "./MonsterEffect.css";

class MonsterEffect extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(./spritesheets/effects/slash.png)`
        }}
        className="monster-effect"
      />
    );
  }
}

export default MonsterEffect;
