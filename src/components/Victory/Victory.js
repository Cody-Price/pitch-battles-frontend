import React, { Component } from "react";
import "./Victory.css";

class Victory extends Component {
  handleClick = () => {
    if (this.props.victory) {
      this.props.levelUp();
    }
  };

  render() {
    console.log(this.props.time);
    const totalTime = this.props.time.reduce((accu, num) => {
      console.log(num);
      accu += num;
      console.log(accu);
      return accu;
    }, 0);

    return (
      <section onClick={this.handleClick} className="victory-screen">
        <h3 className="victory-text">VICTORY!</h3>
        {this.props.victory && (
          <p className="proceed-text">Click to proceed to next level</p>
        )}
        {this.props.time[this.props.time.length - 1] !== totalTime && (
          <p className="total-time">total time: {totalTime / 1000}</p>
        )}
        <p className="level-time">
          level time: {this.props.time[this.props.time.length - 1] / 1000}
        </p>
        {this.props.finalVictory && <p>YOU WIN!</p>}
      </section>
    );
  }
}

export default Victory;
