import React, { Component } from "react";
import "./Note.css";

class Note extends Component {
  render() {
    return <li className="note-name">{this.props.pitch}</li>;
  }
}

export default Note;
