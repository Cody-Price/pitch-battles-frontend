import React, { Component } from "react";
import "./StudentRow.css";
import PropTypes from 'prop-types';

class StudentRow extends Component {
  render() {
    const { student, selectStudent } = this.props;
    return (
      <article className="class-row">
        <p
          className="student-select-clicker"
          onClick={() => selectStudent(student)}
        >
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

StudentRow.propTypes = {
  selectStudent: PropTypes.func,
  student: PropTypes.object,
  total_games_played: PropTypes.number,
  level_one_fastest_time: PropTypes.number,
  level_two_fastest_time: PropTypes.number,
  level_three_fastest_time: PropTypes.number,
  level_four_fastest_time: PropTypes.number,
  first_name: PropTypes.string,
  last_name: PropTypes.string
}
