import React from "react";
import PropTypes from "prop-types";
import "./AnimatedBackground.css";

const AnimatedBackground = props => {
  return (
    <div>
      <div className="animated-background">
        <div className="snow-backer" />
        <div className="landing-char1" />
        <div className="landing-char2" />
        <div className="landing-birb" />
        <div className="standing-char1" />
        <div className="standing-char2" />
        <div className="crystal1" />
        <div className="crystal2" />
        <div className="crystal3" />
        <div className="crystal4" />
        <div className="crystal5" />
        <div className="crystal6" />
        <div className="crystal7" />
        <div className="crystal8" />
        <div className="crystal9" />
        <div className="crystal10" />
        <div className="crystal11" />
        <div className="crystal12" />
      </div>
    </div>
  );
};

export default AnimatedBackground;

AnimatedBackground.propTypes = {
  instance: PropTypes.string
};
