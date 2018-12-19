const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new EnzymeAdapter() });
import { shallow } from 'enzyme';
import React from 'react';
import Signup from './Signup';

describe('Signup', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Signup />)
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
				name: 'firstName',
				value: 'Haley'
			}
		}

		wrapper.instance().handleChange(event)
		expect(wrapper.state().firstName).toEqual('Haley')
	})

	it('should set state when changeRole is called', () => {
		const event = {
			target: {
				name: 'role',
				value: 'teacher'
			}
		}

		wrapper.instance().handleChange(event)
		expect(wrapper.state().role).toEqual('teacher')
	})
})