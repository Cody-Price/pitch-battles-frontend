import React from "react";
import {
  createClassFetch,
  teacherAllClassesFetch
} from "../../utilities/fetchCalls";
import TeacherDash from "./TeacherDash";
import { mockTeacherClass } from "../../utilities/mockTeacherClass";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

jest.mock("../../utilities/fetchCalls");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("TeacherDash", () => {
  const mockUser = {
    attributes: {
      first_name: "Haley",
      last_name: "Jacobs"
    }
  };

  const mockWebToken = "123";
  let mockChangeProfile;
  let mockGetUpdatedUserData;
  let mockLogout;
  let wrapper;

  beforeEach(() => {
    mockChangeProfile = jest.fn();
    mockGetUpdatedUserData = jest.fn();
    mockLogout = jest.fn();
    wrapper = shallow(
      <TeacherDash
        user={mockUser}
        logout={mockLogout}
        getUpdateUserData={mockGetUpdatedUserData}
        changeProfile={mockChangeProfile}
        webToken={mockWebToken}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("handleSubmit", () => {
    it("should call preventDefault", async () => {
      const mockPreventDefault = jest.fn();

      const mockEvent = {
        preventDefault: mockPreventDefault
      };

      await wrapper.instance().handleSubmit(mockEvent);

      expect(mockPreventDefault).toHaveBeenCalled();
    });

    it("should call createClassFetch", async () => {
      const mockPreventDefault = jest.fn();

      const mockEvent = {
        preventDefault: mockPreventDefault
      };

      await wrapper.instance().handleSubmit(mockEvent);

      expect(createClassFetch).toHaveBeenCalled();
    });

    it("should call generateClassCards", async () => {
      const mockPreventDefault = jest.fn();
      const spy = jest.spyOn(wrapper.instance(), "generateClassCards");

      const mockEvent = {
        preventDefault: mockPreventDefault
      };

      await wrapper.instance().handleSubmit(mockEvent);

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("generateClassCards", () => {
    it("should call teacherAllClassesFetch", async () => {
      await wrapper.instance().generateClassCards();

      expect(teacherAllClassesFetch).toHaveBeenCalledWith(mockWebToken);
    });

    it("should setState", async () => {
      await wrapper.instance().generateClassCards();

      expect(wrapper.state().classes).toEqual(mockTeacherClass.data);
    });
  });

  describe("navigate", () => {
    it("should setstate", () => {
      wrapper.instance().navigate();

      expect(wrapper.state().currentPage).toEqual("class cards");
    });
  });

  describe("navigateToStudentPage", () => {
    it("should call navigate with the correct params", () => {
      const spy = jest.spyOn(wrapper.instance(), "navigate");

      wrapper.instance().forceUpdate();
      wrapper.instance().navigateToStudentPage();

      expect(spy).toHaveBeenCalledWith("selected student");
    });
  });
});
