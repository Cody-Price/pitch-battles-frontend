import React, { Component } from "react";
import PropTypes from "prop-types";

import "./GameUserModal.css";

class GameUserModal extends Component {
  render() {
    return (
      <aside className={`game-user-modal ${this.props.status}`}>
        <h4 className="game-modal-username">{this.props.username}</h4>
        <p className="current-instrument-label">instrument</p>
        <p className="current-instrument">{this.props.instrument}</p>
        <p className={`${this.props.resetting} resetting-message`}>
          resetting...
        </p>
        <p className={`${this.props.exiting} exiting-message`}>exiting...</p>
        <button onClick={this.props.reset} className="reset-game-button">
          reset
        </button>
        <button
          onClick={() => this.props.endGame(false)}
          className="exit-game-button"
        >
          exit
        </button>
      </aside>
    );
  }
}

export default GameUserModal;

GameUserModal.propTypes = {
  status: PropTypes.bool,
  username: PropTypes.string,
  instrument: PropTypes.string,
  resetting: PropTypes.bool,
  exiting: PropTypes.bool,
  reset: PropTypes.func,
  endGame: PropTypes.func
};
