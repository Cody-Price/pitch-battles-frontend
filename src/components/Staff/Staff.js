import React, { Component } from "react";
import NoteRow from "../NoteRow/NoteRow";

import "./Staff.css";

class Staff extends Component {
  render() {
    return (
      <div className="staff-buffer">
        <section className="staff">
          <div className="clef" />
          <div className={`pitch ${this.props.currentPitch}`} />
        </section>
        <NoteRow submitGuess={this.props.submitGuess} />
      </div>
    );
  }
}

export default Staff;
