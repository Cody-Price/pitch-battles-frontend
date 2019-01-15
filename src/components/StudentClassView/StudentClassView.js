import React, { Component } from "react";
import "./StudentClassView.css";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import { studentClassFetch } from "../../utilities/fetchCalls";
import PropTypes from "prop-types";
import avatars from "../../utilities/avatars";

class StudentClassView extends Component {
  constructor() {
    super();

    this.state = {
      classStats: undefined,
      loading: true,
      error: false
    };
  }

  componentDidMount() {
    this.studentViewClassFetch();
  }

  studentViewClassFetch = async () => {
    try {
      const response = await studentClassFetch(this.props.webToken);
      console.log(response);
      this.setState({
        classStats: response.data.attributes,
        loading: false,
        error: false
      });
    } catch (error) {
      console.log(error);
      this.setState({ error: true });
    }
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
                teacher -{" "}
                {this.state.classStats.teacher.data.attributes.first_name}{" "}
                {this.state.classStats.teacher.data.attributes.last_name}
              </h2>
            </header>

            <section className="class-view-fastest-times">
              {this.state.classStats.level_one_fastest_time.user.data[0] && (
                <h3 className="class-view-fastest-times-label">
                  fastest times
                </h3>
              )}
              <div className="class-view-fastest-times-row">
                {this.state.classStats.level_one_fastest_time.user.data[0] && (
                  <article className="class-view-fastest-time">
                    <h3 className="class-view-level">level one</h3>
                    <p className="class-view-fastest-time-number">
                      {this.state.classStats.level_one_fastest_time.score /
                        1000}
                    </p>
                    <p className="class-view-fastest-student">
                      {
                        this.state.classStats.level_one_fastest_time.user
                          .data[0].attributes.first_name
                      }{" "}
                      {
                        this.state.classStats.level_one_fastest_time.user
                          .data[0].attributes.last_name
                      }
                    </p>
                    <div
                      className={`avatar-class-view ${
                        avatars[
                          this.state.classStats.level_one_fastest_time.user
                            .data[0].attributes.avatar
                        ]
                      }`}
                    />
                  </article>
                )}
                {this.state.classStats.level_two_fastest_time.user.data[0] && (
                  <article className="class-view-fastest-time">
                    <h3 className="class-view-level">level two</h3>
                    <p className="class-view-fastest-time-number">
                      {this.state.classStats.level_two_fastest_time.score /
                        1000}
                    </p>
                    <p className="class-view-fastest-student">
                      {
                        this.state.classStats.level_two_fastest_time.user
                          .data[0].attributes.first_name
                      }{" "}
                      {
                        this.state.classStats.level_two_fastest_time.user
                          .data[0].attributes.last_name
                      }
                    </p>
                    <div
                      className={`avatar-class-view ${
                        avatars[
                          this.state.classStats.level_two_fastest_time.user
                            .data[0].attributes.avatar
                        ]
                      }`}
                    />
                  </article>
                )}
                {this.state.classStats.level_three_fastest_time.user
                  .data[0] && (
                  <article className="class-view-fastest-time">
                    <h3 className="class-view-level">level three</h3>
                    <p className="class-view-fastest-time-number">
                      {this.state.classStats.level_three_fastest_time.score /
                        1000}
                    </p>
                    <p className="class-view-fastest-student">
                      {
                        this.state.classStats.level_three_fastest_time.user
                          .data[0].attributes.first_name
                      }{" "}
                      {
                        this.state.classStats.level_three_fastest_time.user
                          .data[0].attributes.last_name
                      }
                    </p>
                    <div
                      className={`avatar-class-view ${
                        avatars[
                          this.state.classStats.level_three_fastest_time.user
                            .data[0].attributes.avatar
                        ]
                      }`}
                    />
                  </article>
                )}
                {this.state.classStats.level_four_fastest_time.user.data[0] && (
                  <article className="class-view-fastest-time">
                    <h3 className="class-view-level">level four</h3>
                    <p className="class-view-fastest-time-number">
                      {this.state.classStats.level_four_fastest_time.score /
                        1000}
                    </p>
                    <p className="class-view-fastest-student">
                      {
                        this.state.classStats.level_four_fastest_time.user
                          .data[0].attributes.first_name
                      }{" "}
                      {
                        this.state.classStats.level_four_fastest_time.user
                          .data[0].attributes.last_name
                      }
                    </p>
                    <div
                      className={`avatar-class-view ${
                        avatars[
                          this.state.classStats.level_four_fastest_time.user
                            .data[0].attributes.avatar
                        ]
                      }`}
                    />
                  </article>
                )}
                {this.state.classStats.overall_fastest_time.user.data[0] && (
                  <article className="class-view-fastest-time">
                    <h3 className="class-view-level">overall</h3>
                    <p className="class-view-fastest-time-number">
                      {this.state.classStats.overall_fastest_time.score / 1000}
                    </p>
                    <p className="class-view-fastest-student">
                      {
                        this.state.classStats.overall_fastest_time.user.data[0]
                          .attributes.first_name
                      }{" "}
                      {
                        this.state.classStats.overall_fastest_time.user.data[0]
                          .attributes.last_name
                      }
                    </p>
                    <div
                      className={`avatar-class-view ${
                        avatars[
                          this.state.classStats.overall_fastest_time.user
                            .data[0].attributes.avatar
                        ]
                      }`}
                    />
                  </article>
                )}
              </div>
            </section>
            <section className="most-games-badges-row">
              {this.state.classStats.most_games && (
                <article className="most-games game-badge">
                  <h3 className="most-games-badges-label">most games</h3>
                  {this.state.classStats.most_games.user.data[0].attributes
                    .first_name && (
                    <p className="class-view-most-student">
                      {
                        this.state.classStats.most_games.user.data[0].attributes
                          .first_name
                      }{" "}
                      {
                        this.state.classStats.most_games.user.data[0].attributes
                          .last_name
                      }{" "}
                      - {this.state.classStats.most_games.games_played}
                    </p>
                  )}
                  <div
                    className={`avatar-class-view ${
                      avatars[
                        this.state.classStats.most_games.user.data[0].attributes
                          .avatar
                      ]
                    }`}
                  />
                </article>
              )}
              {this.state.classStats.most_badges && (
                <article className="most-badges game-badge">
                  <h3 className="most-games-badges-label">most badges</h3>
                  {this.state.classStats.most_badges && (
                    <p className="class-view-most-student">
                      {
                        this.state.classStats.most_badges.user.data[0]
                          .attributes.first_name
                      }{" "}
                      {
                        this.state.classStats.most_badges.user.data[0]
                          .attributes.last_name
                      }{" "}
                      - {this.state.classStats.most_badges.badges}
                    </p>
                  )}
                  <div
                    className={`avatar-class-view ${
                      avatars[
                        this.state.classStats.most_badges.user.data[0]
                          .attributes.avatar
                      ]
                    }`}
                  />
                </article>
              )}
            </section>
          </article>
        )}
      </div>
    );
  }
}

export default StudentClassView;

StudentClassView.propTypes = {
  webToken: PropTypes.string,
  navigate: PropTypes.func
};
