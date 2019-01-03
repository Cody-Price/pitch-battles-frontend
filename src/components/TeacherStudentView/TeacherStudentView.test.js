import React from 'react';
import ReactDOM from 'react-dom';
import TeacherStudentView from './TeacherStudentView.js';
import Enzyme, { shallow } from 'enzyme';
const EnzymeAdapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('TeacherStudentView', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<TeacherStudentView />)
	});

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	})
})