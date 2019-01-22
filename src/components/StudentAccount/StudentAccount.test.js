import React from "react";

import StudentAccount from "./StudentAccount";
import Enzyme, { shallow } from "enzyme";
import mockUser from "../../utilities/mockUser";

const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

jest.mock("../../utilities/fetchCalls");

describe("StudentAccount", () => {
  let wrapper;
  let mockNavigate;
  let mockLogout;

  beforeEach(() => {
    mockNavigate = jest.fn();
    const mockChangeProfile = jest.fn();
    const mockChangeAvatar = jest.fn();
    const mockChangePassword = jest.fn();
    mockLogout = jest.fn();

    wrapper = shallow(
      <StudentAccount
        navigate={mockNavigate}
        changeProfile={mockChangeProfile}
        changeAvatar={mockChangeAvatar}
        changePassword={mockChangePassword}
        user={mockUser}
        logout={mockLogout}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call navigate on click with the correct params", () => {
    const expected = "student dash";

    wrapper.instance().forceUpdate();

    wrapper.find(".back-to-dash-button").simulate("click");

    expect(mockNavigate).toHaveBeenCalledWith(expected);
  });

  describe("navigate", () => {
    it("should setState if the current page is not equal to the selected page", () => {
      const expected = "edit-avatar-active";

      wrapper.instance().navigate("edit-avatar-active");

      expect(wrapper.state().activePage).toEqual(expected);
    });

    it("should return if the current and selected page are the same", () => {
      const spy = jest.spyOn(wrapper.instance(), "navigate");

      wrapper.instance().navigate("edit-profile-active");

      expect(spy).toReturn();
    });

    it("should call navigate on click with the correct params", () => {
      const spy = jest.spyOn(wrapper.instance(), "navigate");
      const expected = "change-password-active";

      wrapper.instance().forceUpdate();

      wrapper.find(".password-link").simulate("click");

      expect(spy).toHaveBeenCalledWith(expected);
    });

    it("should call navigate on click with the correct params", () => {
      const spy = jest.spyOn(wrapper.instance(), "navigate");
      const expected = "edit-profile-active";

      wrapper.instance().forceUpdate();

      wrapper.find(".profile-link").simulate("click");

      expect(spy).toHaveBeenCalledWith(expected);
    });

    it("should call navigate on click with the correct params", () => {
      const spy = jest.spyOn(wrapper.instance(), "navigate");
      const expected = "edit-avatar-active";

      wrapper.instance().forceUpdate();

      wrapper.find(".avatar-link").simulate("click");

      expect(spy).toHaveBeenCalledWith(expected);
    });
  });

  describe("logout", () => {
    it("should call logout on click", () => {
      wrapper.find(".logout-link").simulate("click");

      expect(mockLogout).toHaveBeenCalled();
    });
  });
});
