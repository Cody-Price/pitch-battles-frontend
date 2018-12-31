import React, { Component } from "react";
import PropTypes from "prop-types";

import "./OnboardingArticle.css";

class OnboardingArticle extends Component {
  render() {
    return (
      <article className="onboarding-article">
        <img
          src={this.props.data.imageUrl}
          className="onboarding-image"
          alt={this.props.data.key}
        />
        <p className="onboarding-content">{this.props.data.content}</p>
      </article>
    );
  }
}

export default OnboardingArticle;

OnboardingArticle.propTypes = {
  data: PropTypes.object
};
