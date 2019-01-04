import React from "react";
import mockUser from "../../utilities/mockUser";
import JoinClass from "./JoinClass";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("JoinClass", () => {
  let wrapper;
  let mockGetUpdatedUserData;
  const mockWebToken = "web toooken";

  beforeEach(() => {
    mockGetUpdatedUserData = jest.fn();
    wrapper = shallow(
      <JoinClass
        user={mockUser}
        webToken={mockWebToken}
        getUpdatedUserData={mockGetUpdatedUserData}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("handleChange", () => {
    it("should call setState", () => {
      const mockObject = {
        target: {
          name: "classKey",
          value: "fake value"
        }
      };
      wrapper.instance().handleChange(mockObject);

      expect(wrapper.state().classKey).toEqual("fake value");
    });

    it("should call handleChange on change", () => {
      const mockObject = {
        target: {
          name: "classKey",
          value: "fake value"
        }
      };
      const spy = jest.spyOn(wrapper.instance(), "handleChange");

      wrapper.instance().forceUpdate();

      wrapper.find(".class-key-input").simulate("change", mockObject);

      expect(spy).toHaveBeenCalledWith(mockObject);
    });
  });

  describe("handleSubmit", () => {
    it("should call handleSubmit on submit", async () => {
      let mockPreventDefault = jest.fn();
      const mockEvent = {
        preventDefault: mockPreventDefault
      };

      const spy = jest.spyOn(wrapper.instance(), "handleSubmit");

      wrapper.instance().forceUpdate();

      await wrapper.find(".join-class-form").simulate("submit", mockEvent);

      expect(spy).toHaveBeenCalledWith(mockEvent);
    });

    it("should call preventDefault", async () => {
      let mockPreventDefault = jest.fn();
      const mockEvent = {
        preventDefault: mockPreventDefault
      };

      await wrapper.instance().handleSubmit(mockEvent);

      expect(mockPreventDefault).toHaveBeenCalled();
    });

    it("should call getUpdatedUserData", async () => {
      let mockPreventDefault = jest.fn();
      const mockEvent = {
        preventDefault: mockPreventDefault
      };

      await wrapper.instance().handleSubmit(mockEvent);

      expect(mockGetUpdatedUserData).toHaveBeenCalled();
    });
  });
});
