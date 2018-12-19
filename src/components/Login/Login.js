import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		}
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	render() {
		return (
			<section className={`login-form ${this.props.status}`} >
				<form>
				  <div className='email-input'>
					<label>email</label>
					<input type='email' name='email' onChange={this.handleChange} value={this.state.email} />
				  </div>
				  <div className='password-input'>
					<label>password</label>
					<input type='password' name='password' onChange={this.handleChange} value={this.state.password} />
				  </div>
					<button>Login</button>
				</form>
				<button onClick={this.props.landingChange}>Sign Up</button>
			</section>
		)
	}
}

export default Login;