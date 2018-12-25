import React from "react";
import ReactDOM from "react-dom";
import Onboarding from "./Onboarding";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("Onboarding", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Onboarding />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("clickRight", () => {
    it("should call setState if dot < 5", () => {
      const expected = { dot: 1, right: true, left: true };

      wrapper.instance().clickRight();

      expect(wrapper.state()).toEqual(expected);
    });

    it("should call setState if dot === 4", () => {
      wrapper.setState({
        dot: 4,
        right: true,
        left: false
      });

      const expected = { dot: 5, right: false, left: true };

      wrapper.instance().clickRight();

      expect(wrapper.state()).toEqual(expected);
    });

    it("should call clickRight on click", () => {
      const spy = jest.spyOn(wrapper.instance(), "clickRight");

      wrapper.find(".arrow-right").simulate("click");

      expect(spy).toHaveBeenCalled90;
    });
  });

  describe("clickLeft", () => {
    it("should call setState if dot === 1", () => {
      wrapper.setState({
        dot: 1,
        right: false,
        left: true
      });

      const expected = { dot: 0, right: true, left: false };

      wrapper.instance().clickLeft();

      expect(wrapper.state()).toEqual(expected);
    });

    it("should call setState if dot > 0", () => {
      wrapper.setState({
        dot: 3,
        right: false,
        left: false
      });

      const expected = { dot: 2, right: true, left: true };

      wrapper.instance().clickLeft();

      expect(wrapper.state()).toEqual(expected);
    });

    it("should call clickLeft on click", () => {
      const spy = jest.spyOn(wrapper.instance(), "clickLeft");

      wrapper.find(".arrow-left").simulate("click");

      expect(spy).toHaveBeenCalled90;
    });
  });
});
