const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new EnzymeAdapter() });

import { shallow } from 'enzyme';
import React from 'react';
import Login from './Login';

describe('Login', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Login />)
		
	})

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	})

	it('should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	})

	it('should set state on handleChange', () => {
		const event = {
			target: {
				name: 'email',
				value: 'haleyljacobs@gmail.com'
			}
		}

		wrapper.instance().handleChange(event)
		expect(wrapper.state().email).toEqual('haleyljacobs@gmail.com')
	})
})