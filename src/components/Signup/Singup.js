import React, { Component } from 'react';

class Signup extends Component {
	constructor() {
		super();
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			passwordOne: '',
			passwordTwo: '',
			role: 'student'
		}
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	changeRole = (role) => {
		if (role === 'student' && this.state.role !== 'student') {
			this.setState({role})
		} else if (role === 'teacher' && this.state.role !== 'teacher') {
			this.setState({role})
		}
	}

	render() {
		return (
			<section className={`signup-form ${this.props.status}`}>
				<form>
					<p>First Name</p>
					<input type='text' name='firstName' onChange={this.handleChange} value={this.state.firstName} />
					<p>Last Name</p>
					<input type='text' name='lastName' onChange={this.handleChange} value={this.state.lastName} />
					<p>Email</p>
					<input type='email' name='email' onChange={this.handleChange} value={this.state.email} />
					<p>Password</p>
					<input type='password' name='passwordOne' onChange={this.handleChange} value={this.state.passwordOne} />
					<p>Confirm Password</p>
					<input type='password' name='passwordTwo' onChange={this.handleChange} value={this.state.passwordTwo} />
					<div aria-label='choose student role' className={`student-button ${this.state.role}`} onClick={() => this.changeRole('student')}>Student</div>
					<div aria-label='choose teacher role' className={`teacher-button ${this.state.role}`} onClick={() => this.changeRole('teacher')}>Teacher</div>
					<button type='submit'>Sign Up</button>
				</form>
				<button onClick={this.props.landingChange}>Login</button>
			</section>
		)
	}
}

export default Signup;
