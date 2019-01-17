const Enzyme = require("enzyme");
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });
import { shallow } from "enzyme";
import React from "react";
import Signup from "./Signup";

describe("Signup", () => {
  let wrapper;
  let mockLandingChange;
  let mockSignUpUser;

  beforeEach(() => {
    mockLandingChange = jest.fn();
    mockSignUpUser = jest.fn();
    wrapper = shallow(
      <Signup landingChange={mockLandingChange} signUpUser={mockSignUpUser} />
    );
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render like snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("handleChange", () => {
    it("should set state on handleChange", () => {
      const event = {
        target: {
          name: "first_name",
          value: "Haley"
        }
      };

      wrapper.instance().handleChange(event);
      expect(wrapper.state().first_name).toEqual("Haley");
    });

    it("should call handleChange on first_name change", () => {
      const spy = jest.spyOn(wrapper.instance(), "handleChange");
      const mockEvent = {
        target: {
          name: "first_name",
          value: "Haley"
        }
      };

      wrapper.instance().forceUpdate();

      wrapper.find(".signup-firstname-input").simulate("change", mockEvent);

      expect(spy).toHaveBeenCalledWith(mockEvent);
    });

    it("should call handleChange on last_name change", () => {
      const spy = jest.spyOn(wrapper.instance(), "handleChange");
      const mockEvent = {
        target: {
          name: "last_name",
          value: "Jacobs"
        }
      };

      wrapper.instance().forceUpdate();

      wrapper.find(".signup-lastname-input").simulate("change", mockEvent);

      expect(spy).toHaveBeenCalledWith(mockEvent);
    });
  });

  it("should call handleChange on email change", () => {
    const spy = jest.spyOn(wrapper.instance(), "handleChange");
    const mockEvent = {
      target: {
        name: "email",
        value: "haley@jacobs.com"
      }
    };

    wrapper.instance().forceUpdate();

    wrapper.find(".signup-email-input").simulate("change", mockEvent);

    expect(spy).toHaveBeenCalledWith(mockEvent);
  });

  it("should call handleChange on password change", () => {
    const spy = jest.spyOn(wrapper.instance(), "handleChange");
    const mockEvent = {
      target: {
        name: "password",
        value: "fake-password"
      }
    };

    wrapper.instance().forceUpdate();

    wrapper.find(".signup-password-input").simulate("change", mockEvent);

    expect(spy).toHaveBeenCalledWith(mockEvent);
  });

  it("should call handleChange on confirm_password change", () => {
    const spy = jest.spyOn(wrapper.instance(), "handleChange");
    const mockEvent = {
      target: {
        name: "password_confirmation",
        value: "fake-password"
      }
    };

    wrapper.instance().forceUpdate();

    wrapper
      .find(".signup-password-confirm-input")
      .simulate("change", mockEvent);

    expect(spy).toHaveBeenCalledWith(mockEvent);
  });

  describe("changeRole", () => {
    it("should set state", () => {
      wrapper.instance().changeRole("teacher");
      expect(wrapper.state().role).toEqual("teacher");
    });

    it("should call changeRole on click - student", () => {
      const spy = jest.spyOn(wrapper.instance(), "changeRole");

      wrapper.instance().forceUpdate();

      wrapper.find(".student-button").simulate("click");

      expect(spy).toHaveBeenCalled();
    });

    it("should call changeRole on click - teacher", () => {
      const spy = jest.spyOn(wrapper.instance(), "changeRole");

      wrapper.instance().forceUpdate();

      wrapper.find(".teacher-button").simulate("click");

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("landingChange", () => {
    it("should call landingChange on click", () => {
      wrapper.find(".return-to-login-button").simulate("click");

      expect(mockLandingChange).toHaveBeenCalled();
    });
  });

  describe("handleSubmit", () => {
    it("should call preventDefault", () => {
      const mockPreventDefault = jest.fn();

      const mockEvent = {
        preventDefault: mockPreventDefault
      };

      wrapper.instance().handleSubmit(mockEvent);

      expect(mockPreventDefault).toHaveBeenCalled();
    });

    it("should call handleSubmit on submit", () => {
      const spy = jest.spyOn(wrapper.instance(), "handleSubmit");
      const mockPreventDefault = jest.fn();

      const mockEvent = {
        preventDefault: mockPreventDefault
      };

      wrapper.instance().forceUpdate();

      wrapper.find(".signup-form-form").simulate("submit", mockEvent);

      expect(spy).toHaveBeenCalledWith(mockEvent);
    });
  });
});
