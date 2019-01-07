import React from "react";

import EditAvatar from "./EditAvatar";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("EditAvatar", () => {
  let wrapper;
  const mockUser = {
    attributes: { avatar: 2 }
  };
  const mockStatus = "true";
  let changeAvatar;

  beforeEach(() => {
    changeAvatar = jest.fn();
    wrapper = shallow(
      <EditAvatar user={mockUser} status={"true"} changeAvatar={changeAvatar} />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("checkAvatar", () => {
    it("should call setState if the user has avatar 1 on-load", () => {
      wrapper = shallow(
        <EditAvatar user={{ attributes: { avatar: 1 } }} status={mockStatus} />
      );

      const expected = {
        left: false,
        avatar: 1,
        right: true
      };

      expect(wrapper.state()).toEqual(expected);
    });

    it("should call setState if the user has avatar 12 on-load", () => {
      wrapper = shallow(
        <EditAvatar
          status={true}
          user={{ attributes: { avatar: 10 } }}
          status={mockStatus}
        />
      );

      const expected = {
        left: true,
        avatar: 12,
        right: false
      };
    });

    it("should call setState if the user has avatar 2-9 on-load", () => {
      const expected = {
        right: true,
        left: true,
        avatar: 2
      };

      expect(wrapper.state()).toEqual(expected);
    });
  });

  describe("handleRightClick", () => {
    it("should call handleRightClick on click", () => {
      const spy = jest.spyOn(wrapper.instance(), "handleRightClick");
      wrapper.instance().forceUpdate();

      wrapper.find(".avatar-right-arrow").simulate("click");

      expect(spy).toHaveBeenCalled();
    });

    it("should call setState if avatar is 13", () => {
      wrapper.setState({
        avatar: 13
      });

      const expected = {
        right: false,
        left: true,
        avatar: 14
      };

      wrapper.instance().handleRightClick();

      expect(wrapper.state()).toEqual(expected);
    });

    it("should call setState if avatar is any other value", () => {
      const expected = {
        left: true,
        avatar: 3,
        right: true
      };

      wrapper.instance().handleRightClick();

      expect(wrapper.state()).toEqual(expected);
    });
  });

  describe("handleLeftClick", () => {
    it("should call handleLeftClick on click", () => {
      const spy = jest.spyOn(wrapper.instance(), "handleLeftClick");
      wrapper.instance().forceUpdate();

      wrapper.find(".avatar-left-arrow").simulate("click");

      expect(spy).toHaveBeenCalled();
    });
    it("should call setState if avatar is 2", () => {
      wrapper.setState({
        avatar: 2
      });

      const expected = {
        right: true,
        left: false,
        avatar: 1
      };

      wrapper.instance().handleLeftClick();

      expect(wrapper.state()).toEqual(expected);
    });

    it("should call setState if avatar is any other value", () => {
      const expected = {
        left: true,
        avatar: 3,
        right: true
      };

      wrapper.setState({
        avatar: 4
      });

      wrapper.instance().handleLeftClick();

      expect(wrapper.state()).toEqual(expected);
    });
  });

  describe("handleSubmit", () => {
    it("should return if current avatar is the same as new avatar", () => {
      const spy = jest.spyOn(wrapper.instance(), "handleSubmit");

      wrapper.instance().handleSubmit();

      expect(spy).toReturn();
    });

    it("should call changeAvatar with the correct params", () => {
      wrapper.setState({
        avatar: 4
      });

      const expected = 4;

      wrapper.instance().handleSubmit();

      expect(changeAvatar).toHaveBeenCalledWith(expected);
    });
  });
});
