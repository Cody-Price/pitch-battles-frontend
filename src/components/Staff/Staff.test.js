import React from "react";
import ReactDOM from "react-dom";
import Staff from "./Staff";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("Staff", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Staff />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
