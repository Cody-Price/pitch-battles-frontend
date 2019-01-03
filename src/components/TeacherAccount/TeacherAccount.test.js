import React from "react";
import ReactDOM from "react-dom";
import TeacherAccount from "./TeacherAccount";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("TeacherAccount", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TeacherAccount />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  
});
