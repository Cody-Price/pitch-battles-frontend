import React, { Component } from "react";
import Note from "../Note/Note";
import "./NoteRow.css";

class NoteRow extends Component {
  render() {
    const pitches = ["a", "b", "c", "d", "e", "f", "g"];
    const notes = pitches.map(pitch => {
      return <Note pitch={pitch} key={pitch} />;
    });

    return <ul className="note-row">{notes}</ul>;
  }
}

export default NoteRow;
