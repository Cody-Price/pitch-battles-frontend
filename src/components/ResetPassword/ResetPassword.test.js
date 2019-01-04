import { shallow } from "enzyme";
import React from "react";
import ResetPassword from "./ResetPassword";
import { resetPasswordFetch } from "../../utilities/fetchCalls";
const Enzyme = require("enzyme");
const EnzymeAdapter = require("enzyme-adapter-react-16");

jest.mock("../../utilities/fetchCalls");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("ResetPassword", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ResetPassword />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("handleChange", () => {
    it("should update state", () => {
      const mockEvent = {
        target: {
          name: "password",
          value: "password"
        }
      };

      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state().password).toEqual("password");
    });

    it("should call handleChange on change", () => {
      const mockEvent = {
        target: {
          name: "password",
          value: "password"
        }
      };

      const spy = jest.spyOn(wrapper.instance(), "handleChange");

      wrapper.instance().forceUpdate();

      wrapper.find(".pw-reset-field").simulate("change", mockEvent);

      expect(spy).toHaveBeenCalledWith(mockEvent);
    });

    it("should call handleChange on change", () => {
      const mockEvent = {
        target: {
          name: "confirmPassword",
          value: "password"
        }
      };

      const spy = jest.spyOn(wrapper.instance(), "handleChange");

      wrapper.instance().forceUpdate();

      wrapper.find(".confirm-pw-reset-field").simulate("change", mockEvent);

      expect(spy).toHaveBeenCalledWith(mockEvent);
    });

    it("should call handleChange on change", () => {
      const mockEvent = {
        target: {
          name: "webToken",
          value: "password"
        }
      };

      const spy = jest.spyOn(wrapper.instance(), "handleChange");

      wrapper.instance().forceUpdate();

      wrapper.find(".webtoken-pw-reset-field").simulate("change", mockEvent);

      expect(spy).toHaveBeenCalledWith(mockEvent);
    });
  });

  describe("handleSubmit", () => {
    it("should call event preventdefault", async () => {
      const mockPreventDefault = jest.fn();

      const mockEvent = {
        preventDefault: mockPreventDefault
      };

      await wrapper.instance().handleSubmit(mockEvent);

      expect(mockPreventDefault).toHaveBeenCalled();
    });
    it("should setstate if password and confirmpassword do no match", async () => {
      const mockPreventDefault = jest.fn();

      const mockEvent = {
        preventDefault: mockPreventDefault
      };

      wrapper.setState({
        password: 123,
        confirmPassword: 345
      });

      await wrapper.instance().handleSubmit(mockEvent);

      expect(wrapper.state().passwordMatchError).toEqual(true);
    });

    it("should call resetPasswordFetch", async () => {
      const mockPreventDefault = jest.fn();

      const mockEvent = {
        preventDefault: mockPreventDefault
      };

      wrapper.setState({
        password: 123456,
        confirmPassword: 123456
      });

      await wrapper.instance().handleSubmit(mockEvent);

      expect(resetPasswordFetch).toHaveBeenCalled();
    });
  });

  describe("clearError", () => {
    it("should setstate", () => {
      wrapper.setState({
        passwordMatchError: true,
        webTokenError: true
      });

      wrapper.instance().clearError();

      expect(wrapper.state().passwordMatchError).toEqual(false);
      expect(wrapper.state().webTokenError).toEqual(false);
    });
  });
});
