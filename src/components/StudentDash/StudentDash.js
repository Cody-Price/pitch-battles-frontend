import React, { Component } from "react";
import "./StudentDash.css";

import avatars from "../../utilities/avatars";
import { instruments } from "../../utilities/instruments";
import { timesHelper } from "../../utilities/timesHelper";
import { badgeHelper } from "../../utilities/badgeHelper";

class StudentDash extends Component {
  constructor() {
    super();

    this.state = {
      instrument: "choose your instrument...",
      dropdownDeploy: false,
      noInstrumentError: false
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

  handleNewGame = () => {
    if (this.state.instrument === "choose your instrument...") {
      this.setState({ noInstrumentError: true });
      setTimeout(this.clearNoInstrumentError, 5000);
    } else {
      this.props.startGame(true, this.state.instrument);
    }
  };

  clearNoInstrumentError = () => {
    this.setState({ noInstrumentError: false });
  };

  render() {
    const instrumentList = instruments.map(instrument => {
      return (
        <li
          onClick={() => {
            this.selectInstrument(instrument.instrument);
          }}
          className={`instrument-list-item ${instrument.instrument}`}
          key={instrument.instrument}
        >
          {instrument.instrument}
        </li>
      );
    });

    let badges = this.props.user.badges.filter(badge => {
      return badge[Object.keys(badge)[0]];
    });

    if (badges.length > 10) {
      badges.sort((a, b) => {
        return (
          badgeHelper[Object.keys(b)].rank - badgeHelper[Object.keys(a)].rank
        );
      });
      let newBadges = [];
      for (let i = 0; i < 10; i++) {
        newBadges.push(badges[i]);
      }
      badges = newBadges;
    }

    badges = badges.map((badge, index) => {
      return (
        <div key={Object.keys(badge)} className={`badge ${Object.keys(badge)}`}>
          <h4 className="badge-descriptor">
            {badgeHelper[Object.keys(badge)].badge}
          </h4>
        </div>
      );
    });

    const times = this.props.user.fastest_times.map(time => {
      return (
        <div
          key={Object.keys(time)}
          className={"time-container {$Objecy.keys(time)}"}
        >
          <h3 className="time-label">
            {timesHelper[Object.keys(time)]} - {time[Object.keys(time)]}
          </h3>
        </div>
      );
    });

    return (
      <main className="student-dash">
        <section className="student-dash-wrapper">
          <header className="student-dash-header">
            <div className="student-dash-avatar-backer">
              <div
                className={`student-dash-avatar ${
                  avatars[this.props.user.avatar]
                }`}
              />
              <h3 className="account-link-text">account page</h3>
            </div>
            <section className="header-data">
              <h2 className="student-name">
                {this.props.user.first_name} {this.props.user.last_name}
              </h2>
              <h2 className="student-class-link">{this.props.user.class}</h2>
            </section>
            <button
              onClick={() => {
                this.props.navigate("onboarding");
              }}
              className="onboarding-link"
            />
          </header>
          <section className="new-game-section">
            <button className="start-game" onClick={this.handleNewGame}>
              to battle!
            </button>
            <h2
              className={`no-instrument-warning ${
                this.state.noInstrumentError
              }`}
            >
              you must select an instrument before playing...
            </h2>
            <h2 className="instrument-label">instrument:</h2>
            <h3
              onClick={this.handleInstrumentDropdown}
              className="instrument-dropdown"
            >
              {this.state.instrument}
            </h3>
            <div
              onClick={this.handleInstrumentDropdown}
              className={`deploy-arrow ${this.state.dropdownDeploy}`}
            />
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
            <h2 className="fastest-times">fastest times:</h2>
            <div className="times-row">{times}</div>
            <h2 className="most-recent-badges">most recent badges:</h2>
            <div className="badge-row">{badges}</div>
          </section>
        </section>
      </main>
    );
  }
}

export default StudentDash;
