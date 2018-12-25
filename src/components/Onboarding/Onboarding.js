import React, { Component } from "react";
import "./Onboarding.css";
import { onboardingContent } from "../../utilities/onboardingContent";
import { dotsHelper } from "../../utilities/dotsHelper";

import OnboardingArticle from "../OnboardingArticle/OnboardingArticle";

class Onboarding extends Component {
  constructor() {
    super();

    this.state = {
      dot: 0,
      left: false,
      right: true
    };
  }

  clickRight = () => {
    if (this.state.dot < 5) {
      this.setState({
        dot: this.state.dot + 1
      });
    }
  };

  clickLeft = () => {
    if (this.state.dot !== 0) {
      this.setState({
        dot: this.state.dot - 1
      });
    }
  };

  render() {
    const articles = onboardingContent.map(article => {
      return <OnboardingArticle data={article} key={article.key} />;
    });
    return (
      <main className="onboarding">
        <h3
          onClick={() => {
            this.props.navigate("student dash");
          }}
          className="skip-to-dash"
        >
          skip
        </h3>
        <div
          onClick={this.clickLeft}
          className={`arrow-left ${this.state.left}`}
        />
        <div
          onClick={this.clickRight}
          className={`arrow-right ${this.state.right}`}
        />
        <section className="article-wrapper">
          <section className={`article-row ${dotsHelper[this.state.dot]}`}>
            {articles}
          </section>
        </section>
        <div className="dots-wrapper">
          <div className={`dots ${dotsHelper[this.state.dot]}`} />
        </div>
      </main>
    );
  }
}

export default Onboarding;
