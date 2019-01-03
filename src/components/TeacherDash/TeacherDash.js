import React, { Component } from "react";
import "./TeacherDash.css";
import PropTypes from "prop-types";
import ClassCard from "../ClassCard/ClassCard";
import mockClassGroup from "../../utilities/mockClassGroup.js";
import TeacherClassView from "../TeacherClassView/TeacherClassView.js";

import { teacherAllClassesFetch } from "../../utilities/fetchCalls";

class TeacherDash extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: "class cards",
      classes: [],
      error: false,
      selectedClass: null
    };
  }

  componentDidMount() {
    this.generateClassCards();
  }

  generateClassCards = async () => {
    try {
      const response = await teacherAllClassesFetch(this.props.webToken);

      console.log(response);
      this.setState({
        classes: response.data
      });
    } catch (error) {
      this.setState({
        error: true
      });
    }
  };

  navigate = currentPage => {
    this.setState({ currentPage });
  };

  navigateToClassPage = () => {
    this.navigate("selected class");
  };

  classSelect = id => {
    this.setState(
      {
        selectedClass: id
      },
      this.navigateToClassPage
    );
  };

  render() {
    const classes = this.state.classes.map(klass => {
      return <ClassCard data={klass} classSelect={this.classSelect} />;
    });
    return (
      <main className="teacher-dash">
        <header className="teacher-dash-header">
          <h1>Pitch Battles for Teachers</h1>

          <aside className="teacher-account-icon">
            <div className="teacher-dash-icon">
              <p className="teacher-dash-teacher-name">Kevin Simpson</p>
            </div>
          </aside>
          <div className="student-search" />
          <i
            className="fas fa-user"
            onClick={() => this.navigate("teacher account")}
          />
        </header>
        {this.state.currentPage === "class cards" && (
          <section className="classes-container">
            {classes}
            <article className="new-class-card">
              <h4 className="new-class-card-label">Create New Class</h4>
              <form
                className="create-new-class-form"
                onSubmit={e => this.handleSubmit(e)}
              >
                <input
                  name="newClass"
                  value={this.state.newClass}
                  placeholder="class name"
                  onChange={e => this.handleChange(e)}
                />
                <button className="new-class-button">create</button>
              </form>
            </article>
          </section>
        )}
        {this.state.currentPage === "selected class" && (
          <TeacherClassView
            id={this.state.selectedClass}
            webToken={this.props.webToken}
          />
        )}
        {this.state.currentPage === "teacher account" && <div />}
      </main>
    );
  }
}

export default TeacherDash;
