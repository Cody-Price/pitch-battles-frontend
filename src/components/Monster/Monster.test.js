import React from "react";
import ReactDOM from "react-dom";
import Monster from "./Monster";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("Monster", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Monster />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
