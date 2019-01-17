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
      const expected = {
        forgotPassword: false,
        login: false,
        resetPassword: false,
        signup: true,
        showDevMessage: false
      };
      wrapper.instance().landingChange();

      expect(wrapper.state()).toEqual(expected);
    });
  });

  describe("forgotPasswordScreen", () => {
    it("should call setState", () => {
      const expected = {
        forgotPassword: true,
        login: false,
        resetPassword: false,
        signup: false,
        showDevMessage: false
      };
      wrapper.instance().forgotPasswordScreen();

      expect(wrapper.state()).toEqual(expected);
    });
  });
});
