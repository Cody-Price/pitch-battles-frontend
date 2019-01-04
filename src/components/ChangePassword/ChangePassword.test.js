import React from "react";
import * as fetchCalls from "../../utilities/fetchCalls";
import mockUser from "../../utilities/mockUser";

import ChangePassword from "./ChangePassword";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("ChangePassword", () => {
  let wrapper;
  let mockUpdateWebToken;

  beforeEach(() => {
    mockUpdateWebToken = jest.fn();
    wrapper = shallow(
      <ChangePassword updateWebToken={mockUpdateWebToken} user={mockUser} />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("handleSubmit", () => {
    let mockPreventDefault;

    it("should call preventDefault", () => {
      mockPreventDefault = jest.fn();

      const mockEvent = {
        target: {
          name: "oldPassword",
          value: "I am an old password"
        },
        preventDefault: mockPreventDefault
      };

      wrapper.instance().handleSubmit(mockEvent);

      expect(mockPreventDefault).toHaveBeenCalled();
    });

    it("should set an error if fields are incomplete", () => {
      mockPreventDefault = jest.fn();

      const mockEvent = {
        target: {
          name: "oldPassword",
          value: "I am an old password"
        },
        preventDefault: mockPreventDefault
      };
      const expected = true;

      wrapper.instance().handleSubmit(mockEvent);

      expect(wrapper.state().incompleteError).toEqual(expected);
    });

    it("should set an error if the new passwords do not match", () => {
      mockPreventDefault = jest.fn();

      const mockEvent = {
        target: {
          name: "oldPassword",
          value: "I am an old password"
        },
        preventDefault: mockPreventDefault
      };
      const expected = true;

      wrapper.setState({
        newPassword: "Hello",
        confirmPassword: "Goodbye",
        oldPassword: "What"
      });

      wrapper.instance().handleSubmit(mockEvent);

      expect(wrapper.state().passwordMatchError).toEqual(true);
    });

    it("should call confirmOldPassword", async () => {
      const mockConfirmOldPassword = jest.fn().mockImplementation(() => {
        return Promise.resolve();
      });

      mockPreventDefault = jest.fn();

      const mockEvent = {
        target: {
          name: "oldPassword",
          value: "I am an old password"
        },
        preventDefault: mockPreventDefault
      };

      wrapper.setState({
        newPassword: "Hello",
        confirmPassword: "Hello",
        oldPassword: "What"
      });

      wrapper.instance().confirmOldPassword = mockConfirmOldPassword;

      await wrapper.instance().handleSubmit(mockEvent);

      expect(mockConfirmOldPassword).toHaveBeenCalled();
    });

    it("should return if the password is not confirmed", async () => {
      const mockConfirmOldPassword = jest.fn().mockImplementation(() => {
        return Promise.resolve(false);
      });

      mockPreventDefault = jest.fn();

      const mockEvent = {
        target: {
          name: "oldPassword",
          value: "I am an old password"
        },
        preventDefault: mockPreventDefault
      };

      const spy = jest.spyOn(wrapper.instance(), "handleSubmit");

      wrapper.setState({
        newPassword: "Hello",
        confirmPassword: "Hello",
        oldPassword: "What"
      });

      wrapper.instance().confirmOldPassword = mockConfirmOldPassword;

      await wrapper.instance().handleSubmit(mockEvent);

      expect(spy).toReturn();
    });

    it("should call handleSubmit on submit", () => {
      mockPreventDefault = jest.fn();

      const mockEvent = {
        target: {
          name: "oldPassword",
          value: "I am an old password"
        },
        preventDefault: mockPreventDefault
      };
      const spy = jest.spyOn(wrapper.instance(), "handleSubmit");
      wrapper.instance().forceUpdate();

      wrapper.find(".change-password-form").simulate("submit", mockEvent);

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("confirmOldPassword", async () => {
    it("should call login with the correct params", async () => {
      const expected = {
        email: "simpsonkevinjohn@gmail.com",
        password: "What"
      };

      wrapper.setState({
        newPassword: "Hello",
        confirmPassword: "Hello",
        oldPassword: "What"
      });

      fetchCalls.login = jest.fn().mockImplementation(() => {
        return Promise.resolve({ access_token: "string" });
      });

      await wrapper.instance().confirmOldPassword();

      expect(fetchCalls.login).toBeCalledWith(expected);
    });

    it("should return true if login resolves", async () => {
      wrapper.setState({
        newPassword: "Hello",
        confirmPassword: "Hello",
        oldPassword: "What"
      });

      fetchCalls.login = jest.fn().mockImplementation(() => {
        return Promise.resolve({ access_token: "string" });
      });

      const resolve = await wrapper.instance().confirmOldPassword();

      expect(resolve).toEqual(true);
    });

    it("should should call updateWebToken with the correct params if login resolves", async () => {
      wrapper.setState({
        newPassword: "Hello",
        confirmPassword: "Hello",
        oldPassword: "What"
      });

      fetchCalls.login = jest.fn().mockImplementation(() => {
        return Promise.resolve({ access_token: "string" });
      });

      const expected = "string";

      await wrapper.instance().confirmOldPassword();

      expect(mockUpdateWebToken).toBeCalledWith(expected);
    });

    it("should setState if login throws an error", async () => {
      wrapper.setState({
        newPassword: "Hello",
        confirmPassword: "Hello",
        oldPassword: "What"
      });

      fetchCalls.login = jest.fn().mockImplementation(() => {
        return Promise.reject({ message: "haha" });
      });

      const expected = true;

      await wrapper.instance().confirmOldPassword();

      expect(wrapper.state().incorrectPasswordError).toEqual(true);
    });

    it("should return false if login throws an error", async () => {
      wrapper.setState({
        newPassword: "Hello",
        confirmPassword: "Hello",
        oldPassword: "What"
      });

      fetchCalls.login = jest.fn().mockImplementation(() => {
        return Promise.reject({ access_token: "hahaha" });
      });

      const response = await wrapper.instance().confirmOldPassword();

      expect(response).toEqual(false);
    });
  });

  describe("handleChange", () => {
    it("should setState", () => {
      const expected = "I am an old password";
      const mockEvent = {
        target: {
          name: "oldPassword",
          value: "I am an old password",
          preventDefault: jest.fn()
        }
      };

      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state().oldPassword).toEqual(expected);
    });

    it("should call handleChange on oldPassword Change with the correct params", () => {
      const spy = jest.spyOn(wrapper.instance(), "handleChange");

      const mockEvent = {
        target: {
          name: "oldPassword",
          value: "I am an old password",
          preventDefault: jest.fn()
        }
      };

      wrapper.find(".old-password-input").simulate("change", mockEvent);

      expect(spy).toBeCalledWith(mockEvent);
    });

    it("should call handleChange on newPassword Change with the correct params", () => {
      const spy = jest.spyOn(wrapper.instance(), "handleChange");

      const mockEvent = {
        target: {
          name: "newPassword",
          value: "I am an new password",
          preventDefault: jest.fn()
        }
      };

      wrapper.find(".new-password-input").simulate("change", mockEvent);

      expect(spy).toBeCalledWith(mockEvent);
    });

    it("should call handleChange on confirmPassword Change with the correct params", () => {
      const spy = jest.spyOn(wrapper.instance(), "handleChange");

      const mockEvent = {
        target: {
          name: "confirmPassword",
          value: "I am an new password",
          preventDefault: jest.fn()
        }
      };

      wrapper.find(".new-password-confirm-input").simulate("change", mockEvent);

      expect(spy).toBeCalledWith(mockEvent);
    });
  });

  describe("changePassword", () => {
    it("should setState", async () => {
      await wrapper.instance().changePassword();

      console.log(wrapper.state().incompleteError);
    });
  });
});
