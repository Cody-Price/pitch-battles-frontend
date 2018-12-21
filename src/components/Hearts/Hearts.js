import React, { Component } from "react";
import "./Hearts.css";

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
