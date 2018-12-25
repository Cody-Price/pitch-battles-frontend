import React from "react";
import * as fetchCalls from "../../utilities/fetchCalls";

import ChangePassword from "./ChangePassword";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("ChangePassword", () => {
  let wrapper;
  let mockUpdatePassword;
  let mockUpdateWebToken;
  const mockUser = { email: "email@email.com" };

  beforeEach(() => {
    mockUpdatePassword = jest.fn();
    mockUpdateWebToken = jest.fn();
    wrapper = shallow(
      <ChangePassword
        updateWebToken={mockUpdateWebToken}
        updatePassword={mockUpdatePassword}
        user={mockUser}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("handleSubmit", () => {
    it("should set an error if fields are incomplete", () => {
      const expected = true;

      wrapper.instance().handleSubmit();

      expect(wrapper.state().incompleteError).toEqual(expected);
    });

    it("should set an error if the new passwords do not match", () => {
      const expected = true;

      wrapper.setState({
        newPassword: "Hello",
        confirmPassword: "Goodbye",
        oldPassword: "What"
      });

      wrapper.instance().handleSubmit();

      expect(wrapper.state().passwordMatchError).toEqual(true);
    });

    it("should call confirmOldPassword", async () => {
      const mockConfirmOldPassword = jest.fn().mockImplementation(() => {
        return Promise.resolve(true);
      });

      wrapper.setState({
        newPassword: "Hello",
        confirmPassword: "Hello",
        oldPassword: "What"
      });

      wrapper.instance().confirmOldPassword = mockConfirmOldPassword;

      await wrapper.instance().handleSubmit();

      expect(mockConfirmOldPassword).toHaveBeenCalled();
    });

    it("should return if the password is not confirmed", async () => {
      const mockConfirmOldPassword = jest.fn().mockImplementation(() => {
        return Promise.resolve(false);
      });

      const spy = jest.spyOn(wrapper.instance(), "handleSubmit");

      wrapper.setState({
        newPassword: "Hello",
        confirmPassword: "Hello",
        oldPassword: "What"
      });

      wrapper.instance().confirmOldPassword = mockConfirmOldPassword;

      await wrapper.instance().handleSubmit();

      expect(spy).toReturn();
    });

    it("should call updatePassword with the appropriate params", async () => {
      const mockConfirmOldPassword = jest.fn().mockImplementation(() => {
        return Promise.resolve(true);
      });

      const expected = "Hello";

      wrapper.setState({
        newPassword: "Hello",
        confirmPassword: "Hello",
        oldPassword: "What"
      });

      wrapper.instance().confirmOldPassword = mockConfirmOldPassword;

      await wrapper.instance().handleSubmit();

      expect(mockUpdatePassword).toBeCalledWith(expected);
    });

    it("should call handleSubmit on submit", () => {
      const spy = jest.spyOn(wrapper.instance(), "handleSubmit");
      wrapper.instance().forceUpdate();

      wrapper.find(".change-password-form").simulate("submit");

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("confirmOldPassword", async () => {
    it("should call login with the correct params", async () => {
      const expected = {
        email: "email@email.com",
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
          value: "I am an old password"
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
          value: "I am an old password"
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
          value: "I am an new password"
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
          value: "I am an new password"
        }
      };

      wrapper.find(".new-password-confirm-input").simulate("change", mockEvent);

      expect(spy).toBeCalledWith(mockEvent);
    });
  });
});
