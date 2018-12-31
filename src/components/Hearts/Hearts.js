import React, { Component } from "react";
import "./Hearts.css";
import PropTypes from "prop-types";

class Hearts extends Component {
  render() {
    const hearts = this.props.hearts.map(heart => {
      if (heart.position) {
        return <div key={heart.position} className="heart" />;
      } else {
        return <div key={heart} className="heart" />;
      }
    });
    return (
      <section className={`hearts ${this.props.character}`}>{hearts}</section>
    );
  }
}

export default Hearts;

Hearts.propTypes = {
  hearts: PropTypes.array,
  character: PropTypes.string
};
