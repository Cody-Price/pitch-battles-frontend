import React, { Component } from "react";
import PropTypes from "prop-types";

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
        <div className={`loading-animation ${animals[this.props.animals]}`}>
          <div className={this.props.animals} />
          <div className={`walkway ${animals[this.props.animals]}`} />
          <div className={`cloud1 ${animals[this.props.animals]}`} />
          <div className={`cloud2 ${animals[this.props.animals]}`} />
        </div>
        <p> loading...</p>
      </section>
    );
  }
}

export default LoadingAnimation;

LoadingAnimation.propTypes = {
  animals: PropTypes.string
};
