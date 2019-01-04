import React from "react";
import ReactDOM from "react-dom";
import TeacherClassView from "./TeacherClassView";
import Enzyme, { shallow } from "enzyme";
import { mockTeacherClass } from '../../utilities/mockTeacherClass.js';

const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });
jest.mock("../../utilities/fetchCalls.js");

describe("TeacherClassView", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TeacherClassView />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  describe('classFetch', () => {

  	it('should set state', async () => {
  		await wrapper.instance().classFetch()
  		const expected = mockTeacherClass;

  		wrapper.instance().classFetch();

      	expect(wrapper.state().klass).toEqual(expected.data.attributes);
  	})
  })
});
