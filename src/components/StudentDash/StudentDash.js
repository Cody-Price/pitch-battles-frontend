import React, { Component } from "react";
import "./StudentDash.css";

import avatars from "../../utilities/avatars";
import { instruments } from "../../utilities/instruments";
import { timesHelper } from "../../utilities/timesHelper";
import { badgeHelper } from "../../utilities/badgeHelper";
import { fastestTimes } from "../../utilities/fastestTimes";

import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

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

    let badges = this.props.user.attributes.badges.data.filter(badge => {
      return badge[Object.keys(badge)[0]];
    });

    if (badges.length > 10) {
      badges.sort((a, b) => {
        return b.id - a.id;
      });
      let newBadges = [];
      for (let i = 0; i < 10; i++) {
        newBadges.push(badges[i]);
      }
      badges = newBadges;
    }

    badges = badges.map((badge, index) => {
      const badgeClass = badgeHelper.find(helperBadge => {
        return helperBadge.rank == badge.id;
      });

      return (
        <div key={badge.attributes.name} className={`badge ${badgeClass.name}`}>
          <h4 className="badge-descriptor">{badge.attributes.name}</h4>
        </div>
      );
    });

    const displayTimes = fastestTimes(this.props.user);

    const times = displayTimes.map(time => {
      return (
        <div key={time.name} className={"time-container ${time.klass}"}>
          <h3 className="time-label">
            {time.name} - {time.time}
          </h3>
        </div>
      );
    });

    return (
      <main className="student-dash">
        {!this.props.user && <LoadingAnimation />}
        {this.props.user && (
          <section className="student-dash-wrapper">
            <header className="student-dash-header">
              <div
                className="avatar-circle"
                onClick={() => {
                  this.props.navigate("student account");
                }}
              >
                {" "}
                <h3 className="account-link-text">account page</h3>
              </div>
              <div className="student-dash-avatar-backer">
                <div
                  className={`student-dash-avatar ${
                    avatars[this.props.user.attributes.avatar]
                  }`}
                />
              </div>
              <section className="header-data">
                <h2 className="student-name">
                  {this.props.user.attributes.first_name}{" "}
                  {this.props.user.attributes.last_name}
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
                total battles fought:{" "}
                <span>{this.props.user.attributes.total_games_played}</span>
              </h2>
              <h2 className="fastest-times">fastest times:</h2>
              <div className="times-row">{times}</div>
              <h2 className="most-recent-badges">top badges:</h2>
              <div className="badge-row">{badges}</div>
            </section>
          </section>
        )}
      </main>
    );
  }
}

export default StudentDash;
