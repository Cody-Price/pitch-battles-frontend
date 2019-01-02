import React, { Component } from 'react';
import './TeacherClassView.css';
import mockFullClass from '../../utilities/mockFullClass.js';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';

class TeacherClassView extends Component {
	constructor() {
		super();
		this.state = {
			klass: undefined,
			students: []
		}
	}

	componentDidMount() {
		this.classFetch()
	}

	classFetch = () => {
		this.setState({klass: mockFullClass, students: mockFullClass.students})
	}



	render() {
		const students = this.state.students.map(student => {
			return <article className='class-row'>
					<p>{student.name}</p>
					<p>{student.total_games}</p>
					<p>{student.fastest_times[0].level_one}</p>
					<p>{student.fastest_times[1].level_two}</p>
					<p>{student.fastest_times[2].level_three}</p>
					<p>{student.fastest_times[3].level_four}</p>
					<p>Delete</p>
				</article>
		})
		console.log(this.state.klass)
		return (
			<section className='teacher-class-view'>
			{!this.state.klass && <LoadingAnimation animals='cat'/>} 
			{this.state.klass && 
			  <div className='loaded-teacher-class-view'>
				<h3 className='class-name'>{this.state.klass.name}</h3>
				<section className='class-table'>
				<article className='class-row'>
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
			</div>}
		  </section>
		)
	}
}

export default TeacherClassView;