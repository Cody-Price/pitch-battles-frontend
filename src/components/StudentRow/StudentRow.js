import React, { Component } from "react";
import "./StudentRow.css";

class StudentRow extends Component {
  render() {
    const { student, selectStudent } = this.props;
    return (
      <article className="class-row">
        <p onClick={() => selectStudent(student)}>
          {student.attributes.first_name} {student.attributes.last_name}
        </p>
        <p>{student.attributes.total_games_played}</p>
        <p>{student.attributes.level_one_fastest_time / 1000}</p>
        <p>{student.attributes.level_two_fastest_time / 1000}</p>
        <p>{student.attributes.level_three_fastest_time / 1000}</p>
        <p>{student.attributes.level_four_fastest_time / 1000}</p>
        <p>Delete</p>
      </article>
    );
  }
}

export default StudentRow;
