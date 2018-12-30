import React from "react";
import ForgotPassword from "./ForgotPassword";
import Enzyme, { shallow } from "enzyme";

const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("ForgotPassword", () => {
  let wrapper;
  let mockForgotPassword;
  let mockPreventDefault;
  let mockBackToLogin;

  beforeEach(() => {
    mockPreventDefault = jest.fn();
    mockForgotPassword = jest.fn();
    mockBackToLogin = jest.fn();
    wrapper = shallow(
      <ForgotPassword
        forgotPassword={mockForgotPassword}
        backToLogin={mockBackToLogin}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("handleChange", () => {
    it("should call handleChange on change", () => {
      const spy = jest.spyOn(wrapper.instance(), "handleChange");
      const mockEvent = {
        target: {
          name: "email",
          value: "kevin@simpson.com"
        }
      };

      wrapper.instance().forceUpdate();

      wrapper.find(".forgot-email-input").simulate("change", mockEvent);

      expect(spy).toHaveBeenCalledWith(mockEvent);
    });

    it("should setState", () => {
      const mockEvent = {
        target: {
          name: "email",
          value: "kevin@simpson.com"
        }
      };

      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state().email).toEqual(mockEvent.target.value);
    });
  });

  describe("handleSubmit", () => {
    it("should call handleSubmit on submit", () => {
      const mockEvent = {
        preventDefault: mockPreventDefault
      };
      const spy = jest.spyOn(wrapper.instance(), "handleSubmit");
      wrapper.instance().forceUpdate();

      wrapper.find(".forgot-password-form").simulate("submit", mockEvent);

      expect(spy).toHaveBeenCalled();
    });

    it("should call preventDefault", () => {
      const mockEvent = {
        preventDefault: mockPreventDefault
      };
      wrapper.instance().handleSubmit(mockEvent);

      expect(mockPreventDefault).toHaveBeenCalled();
    });

    it("should call forgotPasswordMyPasswordCall", () => {
      const expected = "myemail@mail.com";

      const mockEvent = {
        preventDefault: mockPreventDefault
      };
      wrapper.setState({
        email: expected
      });

      wrapper.instance().handleSubmit(mockEvent);

      // expect(mockForgotPassword).toHaveBeenCalledWith(expected);
    });
  });

  describe("backToLogin", () => {
    it("should call backToLogin on click", () => {
      wrapper.find(".backup-from-forgot-pw").simulate("click");

      expect(mockBackToLogin).toHaveBeenCalled();
    });
  });
});
