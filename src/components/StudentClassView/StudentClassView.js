import React, { Component } from "react";
import "./StudentClassView.css";
import mockClass from "../../utilities/mockClass";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

class StudentClassView extends Component {
  constructor() {
    super();

    this.state = {
      classStats: undefined,
      loading: false
    };
  }

  componentDidMount() {
    this.studentViewClassFetch();
  }

  studentViewClassFetch = () => {
    this.setState({
      classStats: mockClass
    });
  };

  render() {
    return (
      <div className="student-class-view-wrapper">
        {!this.state.classStats && <LoadingAnimation animals="cat" />}
        {this.state.classStats && (
          <article className="student-class-view">
            <header className="student-class-view-header">
              <button
                className="class-view-back-btn"
                onClick={() => this.props.navigate("student dash")}
              >
                exit
              </button>
              <h1 className="student-class-view-class-name">
                {this.state.classStats.name}
              </h1>
              <h2 className="student-class-view-teacher-name">
                teacher - {this.state.classStats.teacher.first_name}{" "}
                {this.state.classStats.teacher.last_name}
              </h2>
            </header>
            <section className="class-view-fastest-times">
              <h3 className="class-view-fastest-times-label">fastest times</h3>
              <div className="class-view-fastest-times-row">
                <article className="class-view-fastest-time">
                  <h3 className="class-view-level">level one</h3>
                  <p className="class-view-fastest-time-number">
                    {this.state.classStats.fastest_times.level_one.time / 1000}
                  </p>
                  <p className="class-view-fastest-student">
                    {this.state.classStats.fastest_times.level_one.first_name}{" "}
                    {this.state.classStats.fastest_times.level_one.last_name}
                  </p>
                </article>
                <article className="class-view-fastest-time">
                  <h3 className="class-view-level">level two</h3>
                  <p className="class-view-fastest-time-number">
                    {this.state.classStats.fastest_times.level_two.time / 1000}
                  </p>
                  <p className="class-view-fastest-student">
                    {this.state.classStats.fastest_times.level_two.first_name}{" "}
                    {this.state.classStats.fastest_times.level_two.last_name}
                  </p>
                </article>
                <article className="class-view-fastest-time">
                  <h3 className="class-view-level">level three</h3>
                  <p className="class-view-fastest-time-number">
                    {this.state.classStats.fastest_times.level_three.time /
                      1000}
                  </p>
                  <p className="class-view-fastest-student">
                    {this.state.classStats.fastest_times.level_three.first_name}{" "}
                    {this.state.classStats.fastest_times.level_three.last_name}
                  </p>
                </article>
                <article className="class-view-fastest-time">
                  <h3 className="class-view-level">level four</h3>
                  <p className="class-view-fastest-time-number">
                    {this.state.classStats.fastest_times.level_four.time / 1000}
                  </p>
                  <p className="class-view-fastest-student">
                    {this.state.classStats.fastest_times.level_four.first_name}{" "}
                    {this.state.classStats.fastest_times.level_four.last_name}
                  </p>
                </article>
                <article className="class-view-fastest-time">
                  <h3 className="class-view-level">overall</h3>
                  <p className="class-view-fastest-time-number">
                    {this.state.classStats.fastest_times.overall.time / 1000}
                  </p>
                  <p className="class-view-fastest-student">
                    {this.state.classStats.fastest_times.overall.first_name}{" "}
                    {this.state.classStats.fastest_times.overall.last_name}
                  </p>
                </article>
              </div>
            </section>
            <section className="most-games-badges-row">
              <article className="most-games game-badge">
                <h3 className="most-games-badges-label">most games</h3>
                <p className="class-view-most-student">
                  {this.state.classStats.most_games.first_name}{" "}
                  {this.state.classStats.most_games.last_name} -{" "}
                  {this.state.classStats.most_games.games}
                </p>
              </article>
              <article className="most-badges game-badge">
                <h3 className="most-games-badges-label">most badges</h3>
                <p className="class-view-most-student">
                  {this.state.classStats.most_badges.first_name}{" "}
                  {this.state.classStats.most_badges.last_name} -{" "}
                  {this.state.classStats.most_badges.games}
                </p>
              </article>
            </section>
          </article>
        )}
      </div>
    );
  }
}

export default StudentClassView;
