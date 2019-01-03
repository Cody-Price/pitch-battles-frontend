import React, { Component } from "react";
import "./TeacherClassView.css";
import mockFullClass from "../../utilities/mockFullClass.js";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import { teacherSpecificClassFetch } from "../../utilities/fetchCalls";

class TeacherClassView extends Component {
  constructor() {
    super();
    this.state = {
      klass: undefined,
      students: []
    };
  }

  componentDidMount() {
    this.classFetch();
  }

  classFetch = async () => {
    try {
      const klass = await teacherSpecificClassFetch(
        this.props.id,
        this.props.webToken
      );

      this.setState({
        klass: klass.data.attributes,
        students: klass.data.attributes.students.data
      });
    } catch (error) {
      this.setState({
        error: true
      });
    }
  };

  render() {
    const students = this.state.students.map(student => {
      return (
        <article key={student.attributes.last_name} className="class-row">
          <p>
            {student.attributes.first_name} {student.attributes.last_name}
          </p>
          <p>{student.attributes.total_games_played}</p>
          <p>{student.attributes.level_one_fastest_time}</p>
          <p>{student.attributes.level_two_fastest_time}</p>
          <p>{student.attributes.level_three_fastest_time}</p>
          <p>{student.attributes.level_four_fastest_time}</p>
          <p>Delete</p>
        </article>
      );
    });
    return (
      <section className="teacher-class-view">
        {!this.state.klass && <LoadingAnimation animals="cat" />}
        {this.state.klass && (
          <div className="loaded-teacher-class-view">
            <h3 className="class-name">{this.state.klass.name}</h3>
            <section className="class-table">
              <article className="class-row">
                <p>Name</p>
                <p>Total</p>
                <p>Level 1</p>
                <p>Level 2</p>
                <p>Level 3</p>
                <p>Level 4</p>
                <p>Delete</p>
              </article>
              {students}
            </section>
          </div>
        )}
      </section>
    );
  }
}

export default TeacherClassView;
