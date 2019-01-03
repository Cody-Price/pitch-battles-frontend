import React from "react";
import ReactDOM from "react-dom";
import JoinClass from "./JoinClass";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("JoinClass", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<JoinClass />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
