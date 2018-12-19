import React, { Component } from 'react';

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
					<p>email</p>
					<input type='email' name='email' onChange={this.handleChange} value={this.state.email} />
					<p>password</p>
					<input type='password' name='password' onChange={this.handleChange} value={this.state.password} />
					<button>Login</button>
				</form>
				<button onClick={this.props.landingChange}>Sign Up</button>
			</section>
		)
	}
}

export default Login;