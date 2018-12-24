import React, { Component } from "react";
import "./Onboarding.css";

class Onboarding extends Component {
  constructor() {
    super();

    this.state = {
      page: 1
    };
  }

  render() {
    return (
      <main className="onboarding">
        <section className="article-row">
          <article />
        </section>
      </main>
    );
  }
}

export default Onboarding;
