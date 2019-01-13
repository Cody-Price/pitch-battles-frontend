import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Monster.css";

class Monster extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(./spritesheets/monsters/monster${
            this.props.level
          }.png)`
        }}
        className={`monster ${this.props.status}`}
      />
    );
  }
}

export default Monster;

Monster.propTypes = {
  level: PropTypes.number,
  status: PropTypes.string
};
