import React from "react";

import EditProfile from "./EditProfile";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("EditProfile", () => {
  let wrapper;
  const mockUser = {
    first_name: "Haley",
    last_name: "Jacobs",
    email: "hjacobs@gmail.com"
  };
  let mockChangeProfile;

  beforeEach(() => {
    mockChangeProfile = jest.fn();
    wrapper = shallow(
      <EditProfile user={mockUser} changeProfile={mockChangeProfile} />
    );
  });

  it.skip("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("populateOnLoad", () => {
    it("should setState with props", () => {
      const expected = mockUser;

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

    it("should call handleChange on change from source 3 with the correct params", () => {
      const spy = jest.spyOn(wrapper.instance(), "handleChange");
      const expected = {
        target: {
          name: "email",
          value: "steve@thesteves.com"
        }
      };
      wrapper.instance().forceUpdate();

      wrapper.find(".profile-email-input").simulate("change", expected);

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
        first_name: "Steve",
        last_name: "Jacobs",
        email: "hjacobs@gmail.com"
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
        last_name: "",
        email: ""
      });

      wrapper.instance().forceUpdate();

      wrapper.instance().handleSubmit(mockEvent);

      expect(spy).toReturn();
    });

    it("should call changeProfile if state is not empty strings with the correct params", () => {
      mockPreventDefault = jest.fn();
      const mockEvent = { preventDefault: mockPreventDefault };
      const expected = {
        first_name: "Kevin",
        last_name: "Simpson",
        email: "ksimpson@mail.com"
      };

      wrapper.setState({
        first_name: "Kevin",
        last_name: "Simpson",
        email: "ksimpson@mail.com"
      });

      wrapper.instance().handleSubmit(mockEvent);

      expect(mockChangeProfile).toHaveBeenCalledWith(expected);
    });

    it("should call handleSubmit on submit", () => {
      mockPreventDefault = jest.fn();
      const mockEvent = { preventDefault: mockPreventDefault };

      const spy = jest.spyOn(wrapper.instance(), "handleSubmit");
      wrapper.setState({
        first_name: "Kevin",
        last_name: "Simpson",
        email: "ksimpson@mail.com"
      });

      wrapper.find(".edit-profile-form").simulate("submit", mockEvent);

      expect(spy).toHaveBeenCalled();
    });
  });
});
