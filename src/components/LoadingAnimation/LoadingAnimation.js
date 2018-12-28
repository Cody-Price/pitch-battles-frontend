import React, { Component } from "react";
import "./LoadingAnimation.css";

class LoadingAnimation extends Component {
  render() {
    const animals = {
      duck: false,
      cat: true
    };
    return (
      <section className="loading-animation-wrapper">
        <div className="circle-border" />

        <div className="loading-animation">
          <div className={this.props.animal} />
          <div className={`walkway ${animals[this.props.animal]}`} />
          <div className="cloud1" />
          <div className="cloud2" />
        </div>
      </section>
    );
  }
}

export default LoadingAnimation;
