import React, { Component } from "react";
import "./StudentRow.css";
import PropTypes from "prop-types";
import { leaveClassFetch } from "../../utilities/fetchCalls";

class StudentRow extends Component {
  constructor() {
    super();

    this.state = {
      deleteWarning: false,
      error: true
    };
  }

  deleteWarningShow = () => {
    this.setState({
      deleteWarning: true
    });
  };

  cancelDelete = () => {
    this.setState({
      deleteWarning: false
    });
  };

  confirmDelete = async () => {
    try {
      await leaveClassFetch(
        this.props.student.id,
        this.props.student.attributes.class.data.id,
        this.props.webToken
      );
      this.props.refresh();
      this.setState({
        deleteWarning: false
      });
    } catch (error) {
      console.log(error);
      this.setState({
        deleteWarning: false,
        error: true
      });
    }
  };
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
        <p className="student-row-delete" onClick={this.deleteWarningShow}>
          Delete
        </p>
        <div className={`student-delete-warning ${this.state.deleteWarning}`}>
          <p>Remove {student.attributes.first_name} from the class?</p>
          <button onClick={this.confirmDelete} className="delete-student-btn">
            remove
          </button>
          <button onClick={this.cancelDelete} className="cancel-student-delete">
            cancel
          </button>
        </div>
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
};
