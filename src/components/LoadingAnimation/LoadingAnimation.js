import React, { Component } from "react";
import "./LoadingAnimation.css";

class LoadingAnimation extends Component {
  render() {
    return (
      <div className="loading-animation">
        <div className="cat" />
        <div className="walkway" />
        <div className="cloud1" />
        <div className="cloud2" />
      </div>
    );
  }
}

export default LoadingAnimation;
