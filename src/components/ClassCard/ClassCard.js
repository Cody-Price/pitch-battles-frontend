import React, { Component } from "react";
import "./ClassCard.css";
import PropTypes from 'prop-types';

import { bgHelper } from "../../utilities/bgHelper";
import { deleteClassFetch } from "../../utilities/fetchCalls";

class ClassCard extends Component {
  constructor() {
    super();
    this.state = {
      deleteError: false,
      showConfirmDelete: false
    };
  }

  confirmDelete = () => {
    this.setState({
      showConfirmDelete: true
    });
  };

  deleteClass = async () => {
    try {
      await deleteClassFetch(this.props.data.id, this.props.webToken);

      this.setState(
        {
          deleteError: false
        },
        this.props.generateClassCards
      );
    } catch (error) {
      console.log(error);
      this.setState({
        deleteError: true
      });
    }
  };

  doNotDelete = () => {
    this.setState({
      showConfirmDelete: false
    });
  };

  render() {
    return (
      <article className="class-card">
        <header className={`class-card-header ${bgHelper[this.props.bgIndex]}`}>
          <div className="class-card-header-tint">
            <h3 className="class-card-name">
              {this.props.data.attributes.name}
            </h3>
          </div>
        </header>
        <section
          className={`confirm-delete-container ${this.state.showConfirmDelete}`}
        >
          <p>Are you sure you want to delete this class?</p>
          <button className="class-delete-btn" onClick={this.deleteClass}>
            delete
          </button>
          <button
            className="class-do-not-delete-btn"
            onClick={this.doNotDelete}
          >
            go back
          </button>
        </section>
        <p className="class-card-key">
          key: {this.props.data.attributes.class_key}
        </p>
        <button
          className="class-select-button"
          onClick={() => this.props.classSelect(this.props.data.id)}
        >
          select
        </button>

        <i onClick={this.confirmDelete} className="fas fa-trash-alt" />
      </article>
    );
  }
}

export default ClassCard;

ClassCard.propTypes = {
  id: PropTypes.number,
  webToken: PropTypes.string,
  generateClassCards: PropTypes.func,
  bgIndex: PropTypes.number,
  name: PropTypes.string
}
