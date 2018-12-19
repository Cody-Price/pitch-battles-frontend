import React, { Component } from 'react';
import Login from '../Login/Login';
import Signup from '../Signup/Singup';

class Landing extends Component {
	constructor() {
		super();
		this.state = {
			login: true,
			signup: false
		}
	}

	landingChange = () => {
		this.setState({login: !this.state.login, signup: !this.state.signup})
	}

	render() {
		return (
			<main>
				<header>
					<h1>Pitch Battles</h1>
					<div className='logo' />
				</header>
				<section className='login-signup-container'>
					<Login landingChange={this.landingChange} status={this.state.login} />
					<Signup landingChange={this.landingChange} status={this.state.signup} />
				</section>
			</main>
		)
	}
}

export default Landing;
