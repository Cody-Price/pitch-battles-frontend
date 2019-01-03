import React from 'react';
import ReactDOM from 'react-dom';
import TeacherUI from './TeacherUI';
import Enzyme, { shallow } from 'enzyme';
const EnzymeAdapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('TeacherUI', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<TeacherUI />)
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

})