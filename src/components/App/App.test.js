import React from "react";
import App from "./App";
import {
  login,
  signUp,
  postGameUserUpdate,
  userFetch,
  changeAvatarFetch
} from "../../utilities/fetchCalls";
import mockUser from "../../utilities/mockUser";

import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

jest.mock("../../utilities/fetchCalls");

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("loginUser", () => {
    it("should setState", async () => {
      const mockBody = "mockBody";
      await wrapper.instance().loginUser(mockBody);

      expect(wrapper.state().webToken).toEqual("test");
    });

    it("should call login", async () => {
      await wrapper.instance().loginUser("mockbody");

      expect(login).toHaveBeenCalledWith("mockbody");
    });
  });

  describe("updateWebToken", () => {
    it("should setState", () => {
      const mockWebToken = "mockWebToken";

      wrapper.instance().updateWebToken(mockWebToken);

      expect(wrapper.state().webToken).toEqual(mockWebToken);
    });
  });

  describe("signUpUser", () => {
    it("should setState", async () => {
      const mockBody = {
        role: 0
      };

      await wrapper.instance().signUpUser(mockBody);

      expect(wrapper.state().signUpSuccessful).toEqual(true);
    });

    it("should call signUp", async () => {
      const mockBody = {
        role: 0
      };

      await wrapper.instance().signUpUser(mockBody);

      expect(signUp).toHaveBeenCalledWith(mockBody);
    });
  });

  describe("logout", () => {
    it("should set state", () => {
      wrapper.setState({
        loadingAnimal: "duck",
        user: { attributes: { role: "teacher" } },
        webToken: "23",
        newAcheivements: ["weee"],
        newFastestTimes: [123],
        fetchError: true,
        gameActive: true,
        instrument: "hurdygurdy",
        activePage: "sports",
        badLogin: true,
        signUpSuccessful: true,
        badSignUp: true,
        loading: true
      });

      const expected = {
        loadingAnimal: "duck",
        user: undefined,
        webToken: undefined,
        newAcheivements: [],
        newFastestTimes: [],
        fetchError: false,
        gameActive: false,
        instrument: undefined,
        activePage: "",
        badLogin: false,
        signUpSuccessful: false,
        badSignUp: false,
        loading: false
      };

      wrapper.instance().logout();

      expect(wrapper.state()).toEqual(expected);
    });
  });

  describe("toggleGame", () => {
    it("should setState", () => {
      const mockGameActive = true;
      const mockInstrument = "bassoon";

      wrapper.instance().toggleGame(true, mockInstrument);

      expect(wrapper.state().gameActive).toEqual(mockGameActive);
      expect(wrapper.state().instrument).toEqual(mockInstrument);
    });
  });

  describe("navigate", () => {
    it("should setState", () => {
      const mockPage = "sports";

      wrapper.instance().navigate(mockPage);

      expect(wrapper.state().activePage).toEqual(mockPage);
    });
  });

  describe("clearAchievmentsAndTimes", () => {
    it("should setState", () => {
      wrapper.setState({
        newAcheivements: ["hello"],
        newFastestTimes: [123]
      });

      wrapper.instance().clearAchievmentsAndTimes();

      expect(wrapper.state().newAcheivements).toEqual([]);
      expect(wrapper.state().newFastestTimes).toEqual([]);
    });
  });

  describe("processGame", () => {
    it("should call setState", async () => {
      await wrapper.instance().processGame();

      expect(wrapper.state().fetchError).toEqual(false);
    });

    it("should call postGameUserUpdate", async () => {
      const update = "update";
      wrapper.setState({
        webToken: 123
      });

      await wrapper.instance().processGame(update);

      expect(postGameUserUpdate).toHaveBeenCalledWith(update, 123);
    });
  });

  describe("setError", () => {
    it("should call setState", () => {
      wrapper.instance().setError();

      expect(wrapper.state().fetchError).toEqual(true);
      expect(wrapper.state().loading).toEqual(false);
    });
  });

  describe("changeAvatar", () => {
    it("should call getUpdatedUserData", async () => {
      const spy = jest.spyOn(wrapper.instance(), "getUpdatedUserData");

      wrapper.setState({
        user: {
          id: 21,
          attributes: {
            role: "student"
          }
        },
        webToken: "hello"
      });

      wrapper.instance().forceUpdate();

      await wrapper.instance().changeAvatar(1);

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("updateWebToken", () => {
    it("should call setState", () => {
      const expected = "hello";

      wrapper.instance().updateWebToken(expected);

      expect(wrapper.state().webToken).toEqual(expected);
    });
  });

  describe("getUpdatedUserData", () => {
    it("should call userFetch", async () => {
      wrapper.setState({
        webToken: "123"
      });

      await wrapper.instance().getUpdatedUserData();

      expect(userFetch).toHaveBeenCalledWith("123");
    });

    it("should setState", async () => {
      wrapper.setState({
        webToken: "123"
      });

      await wrapper.instance().getUpdatedUserData();

      expect(wrapper.state().user).toEqual(mockUser);
    });
  });

  describe("changeAvatar", () => {
    it("should call changeAvatarFetch", async () => {
      wrapper.setState({
        user: mockUser,
        webToken: "123"
      });

      await wrapper.instance().changeAvatar(1);

      expect(changeAvatarFetch).toHaveBeenCalledWith(1, "1", "123");
    });
  });
});
