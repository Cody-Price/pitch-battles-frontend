import React, { Component } from "react";
import "./StudentDash.css";

import avatars from "../../utilities/avatars";
import { instruments } from "../../utilities/instruments";

class StudentDash extends Component {
  constructor() {
    super();

    this.state = {
      instrument: "choose your instrument...",
      dropdownDeploy: false
    };
  }

  handleInstrumentDropdown = () => {
    this.setState({
      dropdownDeploy: !this.state.dropdownDeploy
    });
  };

  selectInstrument = instrument => {
    this.setState({
      instrument,
      dropdownDeploy: false
    });
  };

  render() {
    const instrumentList = instruments.map(instrument => {
      return (
        <li
          onClick={() => {
            this.selectInstrument(instrument.instrument);
          }}
          className="instrument-list-item"
          key={instrument.instrument}
        >
          {instrument.instrument}
        </li>
      );
    });

    return (
      <main className="student-dash">
        <div className="student-dash-floating-backer">
          <div className="landing-char1" />
          <div className="landing-char2" />
          <div className="landing-birb" />
          <div className="standing-char1" />
          <div className="standing-char2" />
          <div className="crystal1" />
          <div className="crystal2" />
          <div className="crystal3" />
          <div className="crystal4" />
          <div className="crystal5" />
          <div className="crystal6" />
          <div className="crystal7" />
          <div className="crystal8" />
          <div className="crystal9" />
          <div className="crystal10" />
          <div className="crystal11" />
          <div className="crystal12" />
        </div>
        <section className="student-dash-wrapper">
          <header className="student-dash-header">
            <div className="student-dash-avatar-backer">
              <div
                className={`student-dash-avatar ${
                  avatars[this.props.user.avatar]
                }`}
              />
            </div>
            <section className="header-data">
              <h2 className="student-name">
                {this.props.user.first_name} {this.props.user.last_name}
              </h2>
              <h2 className="student-class-link">
                class: <span>{this.props.user.class}</span>
              </h2>
            </section>
            <button className="onboarding-link" />
          </header>
          <section className="new-game-section">
            <button className="start-game">to battle!</button>
            <h3
              onClick={this.handleInstrumentDropdown}
              className="instrument-dropdown"
            >
              {this.state.instrument}
            </h3>
            <ul
              className={`instrument-dropdown-list ${
                this.state.dropdownDeploy
              }`}
            >
              {instrumentList}
            </ul>
          </section>
          <section className="student-dash-stats">
            <h2 className="total-games-played">
              total battles fought: <span>{this.props.user.games_played}</span>
            </h2>
            <h2 className="most-recent-badges">most recent badges:</h2>
            <div className="badge-row">
              <div />
            </div>
          </section>
        </section>
      </main>
    );
  }
}

export default StudentDash;
