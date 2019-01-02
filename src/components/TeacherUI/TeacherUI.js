import React, { Component } from "react";
import "./TeacherUI.css";

import { createClassFetch } from "../../utilities/fetchCalls";

class TeacherUI extends Component {
  constructor() {
    super();

    this.state = {
      activePage: "",
      nameOfClass: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      const data = await createClassFetch(
        this.state.nameOfClass,
        this.props.webToken
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <main className="teacher-ui">
        hello teacher
        <form className="new-class-form" onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            name="nameOfClass"
            value={this.state.nameOfClass}
            onChange={e => this.handleChange(e)}
            placeholder="name of new class"
          />
          <input type="submit" />
        </form>
      </main>
    );
  }
}

export default TeacherUI;
