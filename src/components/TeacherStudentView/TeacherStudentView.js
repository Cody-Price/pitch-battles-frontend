import React, { Component } from "react";
import "./TeacherStudentView.css";

import GameRow from "../GameRow/GameRow";

import { teacherBadgeHelper } from "../../utilities/teacherBadgeHelper";

class TeacherStudentView extends Component {
  constructor() {
    super();
    this.state = {
      perfectScores: []
    };
  }

  componentDidMount() {
    this.findPerfects();
  }

  findPerfects = () => {
    const perfectScores = teacherBadgeHelper(
      this.props.student.attributes.badges.data
    );

    this.setState({ perfectScores });
  };

  render() {
    const { attributes } = this.props.student;

    const perfectScoreRow = this.state.perfectScores.map(perfectScore => {
      return (
        <div
          key={perfectScore.display}
          className="teacher-student-perfect-block"
        >
          <p>{perfectScore.display}</p>
          <div className={`${perfectScore.earned} perfect-score`} />
        </div>
      );
    });

    const gameRows = this.props.student.attributes.games.data.map(game => {
      return <GameRow game={game} />;
    });

    return (
      <section className="teacher-student-view">
        <header className="teacher-student-view-header">
          <button
            className="teacher-student-view-back-btn"
            onClick={this.props.navigate}
          >
            back
          </button>
          <section className="header-left-wrapper">
            <h2 className="teacher-student-view-name">
              {attributes.first_name} {attributes.last_name}
            </h2>
            <h3 className="teacher-student-view-class-name">
              {attributes.class.data.attributes.name}
            </h3>
          </section>
          <div className="teacher-student-view-total-games-container">
            <p className="ts-total-games">Total Games</p>
            <p className="teacher-student-view-total-games">
              {attributes.total_games_played}
            </p>
          </div>
        </header>
        <section className="teacher-student-view-times">
          <h3>Fastest Times</h3>
          <section className="teacher-student-times-row">
            <div className="teacher-student-time-block">
              <p>Level One</p>
              <p>{attributes.level_one_fastest_time / 1000}</p>
            </div>
            <div className="teacher-student-time-block">
              <p>Level Two</p>
              <p>{attributes.level_two_fastest_time / 1000}</p>
            </div>
            <div className="teacher-student-time-block">
              <p>Level Three</p>
              <p>{attributes.level_three_fastest_time / 1000}</p>
            </div>
            <div className="teacher-student-time-block">
              <p>Level Four</p>
              <p>{attributes.level_four_fastest_time / 1000}</p>
            </div>
          </section>
        </section>
        <section className="teacher-student-view-perfect-scores">
          <h3>Perfect Scores</h3>
          <section className="teacher-student-perfect-row">
            {perfectScoreRow}
          </section>
        </section>
        <section className="game-row row-topper">
          <p className="game-id-label">id</p>
          <p className="game-score-label">L1 Time</p>
          <p className="game-perfect-mark-label">L1 Perfect</p>
          <p className="game-score-label">L2 Time</p>
          <p className="game-perfect-mark-label">L2 Perfect</p>
          <p className="game-score-label">L3 Time</p>
          <p className="game-perfect-mark-label">L3 Perfect</p>
          <p className="game-score-label">L4 Time</p>
          <p className="game-perfect-mark-label">L4 Perfect</p>
        </section>
        <section className="teacher-student-game-scroll">{gameRows}</section>
      </section>
    );
  }
}

export default TeacherStudentView;
