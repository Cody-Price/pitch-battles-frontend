import React, { Component } from "react";
import "./Victory.css";

class Victory extends Component {
  handleClick = () => {
    if (this.props.victory) {
      this.props.levelUp();
    }
  };

  render() {
    return (
      <section onClick={this.handleClick} className="victory-screen">
        <h3 className="victory-text">VICTORY!</h3>
        {this.props.victory && <p>Click to proceed to next level</p>}
        {this.props.finalVictory && <p>YOU WIN!</p>}
      </section>
    );
  }
}

export default Victory;
