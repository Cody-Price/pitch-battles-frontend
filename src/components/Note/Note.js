import React, { Component } from "react";
import "./Note.css";

class Note extends Component {
  render() {
    return (
      <li
        onClick={() => {
          this.props.submitGuess(null, this.props.pitch);
        }}
        className="note-name"
      >
        {this.props.pitch}
      </li>
    );
  }
}

export default Note;
