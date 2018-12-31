import React, { Component } from "react";
import "./Note.css";
import PropTypes from "prop-types";

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

Note.propTypes = {
  pitch: PropTypes.string,
  submitGuess: PropTypes.func
};
