import React from "react";
import ReactDOM from "react-dom";
import AnimatedBackground from "./AnimatedBackground";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("AnimatedBackground", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AnimatedBackground />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
