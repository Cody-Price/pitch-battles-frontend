import React, { Component } from "react";
import "./Victory.css";
import PropTypes from "prop-types";

class Victory extends Component {
  handleClick = () => {
    if (this.props.victory && !this.props.finalVictory) {
      this.props.levelUp();
    }
  };

  render() {
    const totalTime = this.props.time.reduce((accu, num) => {
      accu += num;
      return accu;
    }, 0);

    return (
      <section onClick={this.handleClick} className="victory-screen">
        <h3 className="victory-text">VICTORY!</h3>
        {!this.props.finalVictory && (
          <p className="proceed-text">Click to proceed to next level</p>
        )}
        {this.props.time[this.props.time.length - 1] !== totalTime && (
          <p className="total-time">total time: {totalTime / 1000}</p>
        )}
        <p className="level-time">
          level time: {this.props.time[this.props.time.length - 1] / 1000}
        </p>
        {this.props.finalVictory && <p>YOU WIN!</p>}
        {this.props.finalVictory && (
          <p className="victory-exit-text" onClick={this.props.exit}>
            click here to exit...
          </p>
        )}
      </section>
    );
  }
}

export default Victory;

Victory.propTypes = {
  finalVictory: PropTypes.bool,
  time: PropTypes.array,
  exit: PropTypes.func,
  victory: PropTypes.bool,
  levelUp: PropTypes.func
};
