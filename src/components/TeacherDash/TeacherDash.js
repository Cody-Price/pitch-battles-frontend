import React, { Component } from "react";
import "./TeacherDash.css";
import PropTypes from "prop-types";
import ClassCard from "../ClassCard/ClassCard";
import TeacherClassView from "../TeacherClassView/TeacherClassView.js";
import TeacherStudentView from "../TeacherStudentView/TeacherStudentView.js";
import TeacherAccount from "../TeacherAccount/TeacherAccount";

import {
  teacherAllClassesFetch,
  createClassFetch
} from "../../utilities/fetchCalls";

class TeacherDash extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: "class cards",
      classes: [],
      error: false,
      selectedClass: null,
      currentStudent: undefined,
      newClassName: ""
    };
  }

  componentDidMount() {
    this.generateClassCards();
  }

  handleChange = event => {
    this.setState({
      newClassName: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      const data = await createClassFetch(
        this.state.newClassName,
        this.props.webToken
      );
      this.generateClassCards();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

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

  navigateToStudentPage = () => {
    this.navigate("selected student");
  };

  selectStudent = student => {
    this.setState({ currentStudent: student }, this.navigateToStudentPage);
  };

  render() {
    const classes = this.state.classes.map((klass, index) => {
      return (
        <ClassCard
          key={klass.id}
          data={klass}
          bgIndex={index}
          classSelect={this.classSelect}
          generateClassCards={this.generateClassCards}
          webToken={this.props.webToken}
        />
      );
    });
    return (
      <main className="teacher-dash">
        <header className="teacher-dash-header">
          <div className="teacher-dash-filter">
            <h1>Pitch Battles for Teachers</h1>

            <aside className="teacher-account-icon">
              <div className="teacher-dash-icon">
                <p className="teacher-dash-teacher-name">
                  {this.props.user.attributes.first_name}{" "}
                  {this.props.user.attributes.last_name}
                </p>
              </div>
            </aside>
            <div className="student-search" />
            <i
              onClick={() => this.navigate("class cards")}
              className="fas fa-home"
            />
            <i
              className="fas fa-user"
              onClick={() => this.navigate("teacher account")}
            />
          </div>
        </header>
        {this.state.currentPage === "class cards" && (
          <section className="classes-container">
            {classes}
            <article className="new-class-card">
              <header>
                <div className="class-card-header-tint">
                  <h4 className="new-class-card-label">Create New Class</h4>
                </div>
              </header>
              <form
                className="create-new-class-form"
                onSubmit={e => this.handleSubmit(e)}
              >
                <input
                  name="newClassName"
                  value={this.state.newClassName}
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
            selectStudent={this.selectStudent}
          />
        )}
        {this.state.currentPage === "teacher account" && (
          <TeacherAccount
            user={this.props.user}
            changeProfile={this.props.changeProfile}
            webToken={this.props.webToken}
            getUpdatedUserData={this.props.getUpdatedUserData}
            logout={this.props.logout}
            updateWebToken={this.props.updateWebToken}
          />
        )}
        {this.state.currentPage === "selected student" && (
          <TeacherStudentView
            user={this.props.user}
            navigate={this.navigateToClassPage}
            student={this.state.currentStudent}
          />
        )}
      </main>
    );
  }
}

export default TeacherDash;

TeacherDash.propTypes = {
  webToken: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  user: PropTypes.object,
  changeProfile: PropTypes.func,
  getUpdatedUserData: PropTypes.func,
  logout: PropTypes.func
}
