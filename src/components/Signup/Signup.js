import React, { Component } from 'react';
import './Signup.css';

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
				  <div className='firstname-input'>
					<aria-label>first name</aria-label>
					<input type='text' name='firstName' onChange={this.handleChange} value={this.state.firstName} />
				  </div>
				  <div className='lastname-input'>
					<label>last name</label>
					<input type='text' name='lastName' onChange={this.handleChange} value={this.state.lastName} />
				  </div>
				  <div className='email-input'>
					<label>email</label>
					<input type='email' name='email' onChange={this.handleChange} value={this.state.email} />
				  </div>
				  <div className='password-input'>
					<label>password</label>
					<input type='password' name='passwordOne' onChange={this.handleChange} value={this.state.passwordOne} />
				  </div>
				  <div className='confirmpassword-input'>
					<label>confirm password</label>
					<input type='password' name='passwordTwo' onChange={this.handleChange} value={this.state.passwordTwo} />
				  </div>
					<div aria-label='choose student role' className={`student-button ${this.state.role}`} onClick={() => this.changeRole('student')}>student</div>
					<div aria-label='choose teacher role' className={`teacher-button ${this.state.role}`} onClick={() => this.changeRole('teacher')}>teacher</div>
					<button type='submit'>sign up</button>
				</form>
				<button onClick={this.props.landingChange}>Login</button>
			</section>
		)
	}
}

export default Signup;
