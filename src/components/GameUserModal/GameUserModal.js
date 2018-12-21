import React, { Component } from "react";
import "./GameUserModal.css";

class GameUserModal extends Component {
  render() {
    return (
      <aside className={`game-user-modal ${this.props.status}`}>
        <h4 className="game-modal-username">{this.props.username}Steve</h4>
        <p className="current-instrument-label">instrument</p>
        <p className="current-instrument">{this.props.instrument}</p>

        <button onClick={this.props.reset} className="reset-game-button">
          reset
        </button>
        <button className="exit-game-button">exit game</button>
      </aside>
    );
  }
}

export default GameUserModal;
