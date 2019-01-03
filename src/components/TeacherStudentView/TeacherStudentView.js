import React, { Component } from 'react';
import './TeacherStudentView.css';

class TeacherStudentView extends Component {
	constructor() {
		super();
		this.state = {
			perfectScores: []
		}
	}

	componentDidMount() {
		this.findPerfects()
	}

	findPerfects = () => {
		// const { badges } = this.props.students.attributes
		// let perfectScores = {
		// 	level_one_perfect: false,
		// 	level_two_perfect: false,
		// 	level_thre_perfect: false,
		// 	level_four_perfect: false
		// }

		// const perfectKeys = Object.keys(perfectScores)
		// perfectKeys.forEach(key => {
		// 	if (badges.find(badge => {
		// 		return badge.data.attributes.
		// 	}))
		// })

		// this.setState({perfectScores})
	}

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
					<h3>Fastest Times</h3>
					<section className='teacher-student-times-row'>
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
				{/*<section className='teacher-student-view-perfect-scores'>
					<h3>Perfect Scores</h3>
					<section className='teacher-student-perfect-row'>
						<div className='teacher-student-perfect-block'>
							<p>Level One</p>
							<div className={`${this.state.perfectScores[0]} perfect-score`}>
						</div>
						<div className='teacher-student-perfect-block'>
							<p>Level Two</p>
							<div className={`${this.state.perfectScores[1]} perfect-score`}>
						</div>
						<div className='teacher-student-perfect-block'>
							<p>Level Three</p>
							<div className={`${this.state.perfectScores[2]} perfect-score`}>
						</div>
						<div className='teacher-student-perfect-block'>
							<p>Level Four</p>
							<div className={`${this.state.perfectScores[3]} perfect-score`}>
						</div>
					</section>
				</section>*/}
			</section>
		)
	}
}

export default TeacherStudentView;