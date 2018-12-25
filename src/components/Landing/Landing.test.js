import React from "react";
import ReactDOM from "react-dom";
import Landing from "./Landing";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("Landing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Landing />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("landingChange", () => {
    it("should call setState", () => {
      const expected = { login: false, signup: true };
      wrapper.instance().landingChange();

      expect(wrapper.state()).toEqual(expected);
    });
  });
});
