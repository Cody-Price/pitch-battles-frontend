import React, { Component } from "react";
import "./StudentDash.css";

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
      instrument
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
        >
          {instrument.instrument}
        </li>
      );
    });

    return (
      <main className="student-dash">
        <header className="student-dash-header">
          <div className="student-dash-avatar-backer">
            <div className="student-dash-avatar" />
          </div>
          <h2 className="student-name">
            name: <span>{this.props.user.first_name}</span>
          </h2>
          <h2 className="student-class-link">
            class: <span>{this.props.user.class}</span>
          </h2>
          <div className="onboarding-link" />
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
            className={`instrument-dropdown-list ${this.state.dropdownDeploy}`}
          >
            {instrumentList}
          </ul>
        </section>
        <section className="student-dash-stats">
          <h2 className="total-games-played">
            total battles fought: <span />
          </h2>
          <h2 className="most-recent-badges">most recent badges:</h2>
          <div className="badge-row">
            <div />
          </div>
        </section>
      </main>
    );
  }
}

export default StudentDash;
