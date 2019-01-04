import React, { Component } from "react";
import "./GameRow.css";
import PropTypes from 'prop-types';

import "../../utilities/gameHelper";

class GameRow extends Component {
  render() {
    const { game } = this.props;
    return (
      <article className="game-row">
        <p className="game-id-code">{game.id}</p>
        <p className="game-score">
          {game.attributes.level_one_duration / 1000 || "none"}
        </p>
        <div
          className={`game-perfect-mark ${game.attributes.level_one_perfect}`}
        />
        <p className="game-score">
          {game.attributes.level_two_duration / 1000 || "none"}
        </p>
        <div
          className={`game-perfect-mark ${game.attributes.level_two_perfect}`}
        />
        <p className="game-score">
          {game.attributes.level_three_duration / 1000 || "none"}
        </p>
        <div
          className={`game-perfect-mark ${game.attributes.level_three_perfect}`}
        />
        <p className="game-score">
          {game.attributes.level_four_duration / 1000 || "none"}
        </p>
        <div
          className={`game-perfect-mark ${game.attributes.level_four_perfect}`}
        />
      </article>
    );
  }
}

export default GameRow;

GameRow.propTypes = {
  game: PropTypes.object,
  level_one_duration: PropTypes.number,
  level_one_perfect: PropTypes.bool,
  level_two_duration: PropTypes.number,
  level_two_perfect: PropTypes.bool,
  level_three_duration: PropTypes.number,
  level_three_perfect: PropTypes.bool,
  level_four_duration: PropTypes.number,
  level_four_perfect: PropTypes.bool
}
