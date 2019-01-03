import React, { Component } from 'react';
import './TeacherStudentView.css';

class TeacherStudentView extends Component {

	render() {
		const { attributes } = this.props.student 
		return (
			<section className='teacher-student-view'>
				<header className='teacher-student-view-header'>
					<h2 className='teacher-student-view-name'>{attributes.first_name}{' '}{attributes.last_name}</h2>
					<h3 className='teacher-student-view-class-name'>{attributes.class.data.attributes.name}</h3>
					<div className='teacher-student-view-total-games-container'>
						<p>Total Games</p>
						<p className='teacher-student-view-total-games'>{attributes.total_games_played}</p>
					</div>
				</header>
				<section className='teacher-student-view-times'>
					<div className='teacher-student-time-block'>
						<p>Level One</p>
						<p>{attributes.level_one_fastest_time}</p>
					</div>
					<div className='teacher-student-time-block'>
						<p>Level Two</p>
						<p>{attributes.level_two_fastest_time}</p>
					</div>
					<div className='teacher-student-time-block'>
						<p>Level Three</p>
						<p>{attributes.level_three_fastest_time}</p>
					</div>
					<div className='teacher-student-time-block'>
						<p>Level Four</p>
						<p>{attributes.level_four_fastest_time}</p>
					</div>
				</section>
			</section>
		)
	}
}

export default TeacherStudentView;