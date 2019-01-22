import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";

const Enzyme = require("enzyme");
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

jest.mock("../../utilities/fetchCalls");

describe("Login", () => {
  let wrapper;
  let mockLoginUser;

  beforeEach(() => {
    mockLoginUser = jest.fn();

    wrapper = shallow(<Login loginUser={mockLoginUser} />);
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
          name: "email",
          value: "haleyljacobs@gmail.com"
        }
      };

      wrapper.instance().handleChange(event);
      expect(wrapper.state().email).toEqual("haleyljacobs@gmail.com");
    });

    it("should call handleChange on change - email", () => {
      const mockEvent = {
        target: {
          value: "hello",
          name: "email"
        }
      };

      const spy = jest.spyOn(wrapper.instance(), "handleChange");

      wrapper.instance().forceUpdate();

      wrapper.find(".login-email-input").simulate("change", mockEvent);

      expect(spy).toHaveBeenCalledWith(mockEvent);
    });

    it("should call handleChange on change - password", () => {
      const mockEvent = {
        target: {
          value: "hello",
          name: "password"
        }
      };

      const spy = jest.spyOn(wrapper.instance(), "handleChange");

      wrapper.instance().forceUpdate();

      wrapper.find(".login-password-input").simulate("change", mockEvent);

      expect(spy).toHaveBeenCalledWith(mockEvent);
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

    it("should call loginUser with the correct params", () => {
      const mockState = {
        email: "test@mail.com",
        password: "test-password"
      };

      const mockPreventDefault = jest.fn();

      const mockEvent = {
        preventDefault: mockPreventDefault
      };

      wrapper.setState({
        email: mockState.email,
        password: mockState.password
      });

      wrapper.instance().handleSubmit(mockEvent);

      expect(mockLoginUser).toHaveBeenCalledWith(mockState);
    });

    it("should call handleSubmit on submit", () => {
      const spy = jest.spyOn(wrapper.instance(), "handleSubmit");
      const mockPreventDefault = jest.fn();

      const mockEvent = {
        preventDefault: mockPreventDefault
      };

      wrapper.instance().forceUpdate();

      wrapper.find(".login-form-form").simulate("submit", mockEvent);

      expect(spy).toHaveBeenCalledWith(mockEvent);
    });
  });
});
