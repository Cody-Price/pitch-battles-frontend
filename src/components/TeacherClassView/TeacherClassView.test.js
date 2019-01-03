import React from "react";
import ReactDOM from "react-dom";
import TeacherClassView from "./TeacherClassView";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("TeacherClassView", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TeacherClassView />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  
});
