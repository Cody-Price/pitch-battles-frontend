import React from "react";
import mockUser from "../../utilities/mockUser";

import StudentDash from "./StudentDash";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

jest.mock("../../utilities/fetchCalls");

describe("StudentDash", () => {
  let wrapper;
  let mockToggleGame;
  let mockNavigate;

  beforeEach(() => {
    mockToggleGame = jest.fn();
    mockNavigate = jest.fn();

    wrapper = shallow(
      <StudentDash
        startGame={mockToggleGame}
        user={mockUser}
        navigate={mockNavigate}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("handleInstrumentDropdown", () => {
    it("should set state", () => {
      const expected = true;

      wrapper.instance().handleInstrumentDropdown();

      expect(wrapper.state().dropdownDeploy).toEqual(expected);
    });

    it("should call handleInstrumentDropdown on click", () => {
      const spy = jest.spyOn(wrapper.instance(), "handleInstrumentDropdown");
      wrapper.instance().forceUpdate();

      wrapper.find(".instrument-dropdown").simulate("click");

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("selectInstrument", () => {
    it("should set state", () => {
      const expected = {
        instrument: "trumpet",
        dropdownDeploy: false,
        noInstrumentError: false,
        leaveClassWarning: false
      };

      wrapper.instance().selectInstrument("trumpet");

      expect(wrapper.state()).toEqual(expected);
    });

    it("should call selectInstrument on click", () => {
      const spy = jest.spyOn(wrapper.instance(), "selectInstrument");

      wrapper.find(".bassoon").simulate("click", "bassoon");

      expect(spy).toHaveBeenCalledWith("bassoon");
    });
  });

  describe("handleNewGame", () => {
    it("should set an error in state if no instrument is in state", () => {
      const expected = true;

      wrapper.instance().handleNewGame();

      expect(wrapper.state().noInstrumentError).toEqual(expected);
    });

    it("should call setTimeout with the correct params if no instrument is in state", () => {
      const spy = jest.spyOn(wrapper.instance(), "clearNoInstrumentError");
      jest.useFakeTimers();

      wrapper.instance().handleNewGame();

      expect(setTimeout).toHaveBeenCalledWith(spy, 5000);
    });

    it("should call startGame if there is an instrument in state with the correct params", () => {
      wrapper.setState({
        instrument: "flute"
      });
      const expected = "flute";

      wrapper.instance().handleNewGame();

      expect(mockToggleGame).toHaveBeenCalledWith(true, expected);
    });

    it("should call handleNewGame on click", () => {
      const spy = jest.spyOn(wrapper.instance(), "handleNewGame");
      wrapper.instance().forceUpdate();

      wrapper.find(".start-game").simulate("click");

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("clearNoInstrumentError", () => {
    it("should call setState", () => {
      wrapper.setState({
        noInstrumentError: true
      });

      wrapper.instance().clearNoInstrumentError();

      expect(wrapper.state().noInstrumentError).toEqual(false);
    });
  });

  describe("navigate", () => {
    it("should call navigate with the appropriate params", () => {
      const expected = "onboarding";

      wrapper.find(".onboarding-link").simulate("click");

      expect(mockNavigate).toHaveBeenCalledWith(expected);
    });

    it("should call navigate with the appropriate params", () => {
      const expected = "student account";

      wrapper.find(".avatar-circle").simulate("click");

      expect(mockNavigate).toHaveBeenCalledWith(expected);
    });

    it("should call navigate with the appropriate params", () => {
      const expected = "student class view";

      wrapper.find(".student-class-link").simulate("click");

      expect(mockNavigate).toHaveBeenCalledWith(expected);
    });
  });
});
