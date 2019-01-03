import React from "react";

import EditProfile from "./EditProfile";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

jest.mock("../../utilities/fetchCalls");

describe("EditProfile", () => {
  let wrapper;
  const mockUser = {
    id: 12,
    attributes: {
      first_name: "Haley",
      last_name: "Jacobs"
    }
  };

  const mockWebToken = "123123124";

  beforeEach(() => {
    wrapper = shallow(<EditProfile user={mockUser} webToken={mockWebToken} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("populateOnLoad", () => {
    it("should setState with props", () => {
      const expected = {
        error: false,
        first_name: "Haley",
        last_name: "Jacobs",
        success: false
      };

      expect(wrapper.state()).toEqual(expected);
    });
  });

  describe("handleChange", () => {
    it("should call handleChange on change from source 1 with the correct params", () => {
      const spy = jest.spyOn(wrapper.instance(), "handleChange");
      const expected = {
        target: {
          name: "first_name",
          value: "Steve"
        }
      };
      wrapper.instance().forceUpdate();

      wrapper.find(".profile-first-name-input").simulate("change", expected);

      expect(spy).toHaveBeenCalledWith(expected);
    });

    it("should call handleChange on change from source 2 with the correct params", () => {
      const spy = jest.spyOn(wrapper.instance(), "handleChange");
      const expected = {
        target: {
          name: "last_name",
          value: "Moore"
        }
      };
      wrapper.instance().forceUpdate();

      wrapper.find(".profile-last-name-input").simulate("change", expected);

      expect(spy).toHaveBeenCalledWith(expected);
    });

    it("should setState", () => {
      const mockEvent = {
        target: {
          name: "first_name",
          value: "Steve"
        }
      };

      const expected = {
        error: false,
        first_name: "Steve",
        last_name: "Jacobs",
        success: false
      };

      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state()).toEqual(expected);
    });
  });

  describe("handleSubmit", () => {
    let mockPreventDefault;

    it("should return if state is empty strings", () => {
      mockPreventDefault = jest.fn();
      const mockEvent = { preventDefault: mockPreventDefault };
      const spy = jest.spyOn(wrapper.instance(), "handleSubmit");

      wrapper.setState({
        first_name: "",
        last_name: ""
      });

      wrapper.instance().forceUpdate();

      wrapper.instance().handleSubmit(mockEvent);

      expect(spy).toReturn();
    });

    it("should call handleSubmit on submit", () => {
      mockPreventDefault = jest.fn();
      const mockEvent = { preventDefault: mockPreventDefault };

      const spy = jest.spyOn(wrapper.instance(), "handleSubmit");
      wrapper.setState({
        first_name: "Kevin",
        last_name: "Simpson"
      });

      wrapper.find(".edit-profile-form").simulate("submit", mockEvent);

      expect(spy).toHaveBeenCalled();
    });

    it("should call changelProfileFetch", () => {
      const spy = jest.spyOn(wrapper.instance(), "changeProfileFetch");
      mockPreventDefault = jest.fn();
      const mockEvent = { preventDefault: mockPreventDefault };

      wrapper.instance().handleSubmit(mockEvent);

      expect(spy).toHaveBeenCalled();
    });
  });
});
