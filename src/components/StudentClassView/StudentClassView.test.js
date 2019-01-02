import React from "react";
import StudentClassView from "./StudentClassView";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("StudentClassView", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StudentClassView />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
