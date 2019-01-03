import React, { Component } from "react";
import "./ClassCard.css";

class ClassCard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <article className="class-card">
        <header className="class-card-header">
          <h3 className="class-card-name">{this.props.data.attributes.name}</h3>
        </header>
        <p className="class-card-key">
          key: {this.props.data.attributes.class_key}
        </p>
        <button
          className="class-select-button"
          onClick={() => this.props.classSelect(this.props.data.id)}
        >
          select
        </button>
      </article>
    );
  }
}

export default ClassCard;
