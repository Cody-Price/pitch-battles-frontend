import React, { Component } from 'react';
import './TeacherDash.css';
import PropTypes from "prop-types";
import ClassCard from '../ClassCard/ClassCard';

class TeacherDash extends Component {
	constructor() {
		super();
		this.state = {
			currentPage: 'class cards'
		}

	}

	navigate = (currentPage) => {
		this.setState({currentPage})
	}

	classSelect = (id) => {
		this.navigate('selected class')
	}

	render() {
		const classes = this.state.classes.map(klass => {
			return <ClassCard data={klass} classSelect={this.classSelect} />
		})
		return (
			<main className='teacher-dash'>
				<header className='teacher-dash-header'>
					<aside className='teacher-account-icon' onClick={() => this.navigate('teacher account')}>
						<div className='teacher-dash-icon'>
							<p className='teacher-dash-teacher-name'>Kevin Simpson</p>
						</div>
					</aside>
					<h1>Pitch Battles for Teachers</h1>
					<div className='student-search'></div>
				</header>
					{this.state.currentPage === 'class cards' && <section className='classes-container'>
						{classes}
						<article className='new-class-card'>
							<h4 className='new-class-card-label'>Create New Class</h4>
							<form className='create-new-class-form' onSubmit={e => this.handleSubmit(e)}>
								<input name='newClass' value={this.state.newClass} placeholder='class name' onChange={e => this.handleChange(e)} />
								<button className='new-class-button'>create</button>
							</form>
						</article>
					</section>}
					{this.state.currentPage === 'selected class' && <div></div>}
					{this.state.currentPage === 'teacher account' && <div></div>}
			</main>
		)
	}
}

export default TeacherDash;