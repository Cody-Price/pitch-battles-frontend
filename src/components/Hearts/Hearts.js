import React, { Component } from "react";
import "./Hearts.css";

class Hearts extends Component {
  render() {
    const hearts = this.props.hearts.map(heart => {
      return <div className="heart" />;
    });
    return (
      <section className={`hearts ${this.props.character}`}>{hearts}</section>
    );
  }
}

export default Hearts;
