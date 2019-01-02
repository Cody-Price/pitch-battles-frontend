import React, { Component } from 'react';
import './ClassCard.css';

class ClassCard extends Component {
	constructor() {
		super();
		this.state = {

		}
	}

	render() {
		return (
			<article className='class-card'>
				<header className='class-card-header'>
					<h3 className='class-card-name'>{this.props.klass.name}</h3>
				</header>
				<p className='class-card-key'>{this.props.klass.key}</p>
				<button className='class-select-button' onClick={() => this.props.classSelect(this.props.klass.id)}>select</button>
			</article>
		)
	}
}

export default ClassCard;