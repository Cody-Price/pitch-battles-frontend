import React from "react";
import Game from "./Game";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("Game", () => {
  let wrapper;
  const instrument = "flute";

  beforeEach(() => {
    Date.now = jest.fn(() => 1482363367071);
    wrapper = shallow(<Game instrument={instrument} />);
  });

  it("should match the snapshot", () => {
    wrapper.setState({
      currentPitch: "a"
    });

    expect(wrapper).toMatchSnapshot();
  });

  describe("kickOff", () => {
    it("should call setupGame", () => {
      const spy = jest.spyOn(wrapper.instance(), "setupGame");

      wrapper.instance().kickOff();

      expect(spy).toHaveBeenCalled();
    });

    it("should call startTime", () => {
      const spy = jest.spyOn(wrapper.instance(), "startTimer");

      wrapper.instance().kickOff();

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("setupGame", () => {
    it("should setState", () => {
      const expected = {
        clef: "treble",
        playerHearts: [0, 1, 2],
        monsterHearts: [
          { pitch: "b", position: "line-three", level: 1 },
          { pitch: "c", position: "space-three", level: 1 },
          { pitch: "d", position: "line-four", level: 1 },
          { pitch: "e", position: "space-four", level: 1 },
          { pitch: "f", position: "line-five", level: 1 }
        ],
        playerHit: false,
        monsterHit: false,
        playerStatus: "idle",
        monsterStatus: "idle",
        gameOver: false,
        victory: false,
        finalVictory: false,
        running: true,
        start: 1482363367071,
        times: [],
        userModal: false,
        milliseconds: 0,
        perfectScores: [],
        currentTime: 0,
        currentLevel: 1,
        currentPitch: "a"
      };

      wrapper.instance().setupGame();

      wrapper.setState({
        currentPitch: "a"
      });

      expect(wrapper.instance().state).toEqual(expected);
    });

    it("should call setPitch with the appropriate parameter", () => {
      const spy = jest.spyOn(wrapper.instance(), "setPitch");
      const expected = [
        { pitch: "b", position: "line-three", level: 1 },
        { pitch: "c", position: "space-three", level: 1 },
        { pitch: "d", position: "line-four", level: 1 },
        { pitch: "e", position: "space-four", level: 1 },
        { pitch: "f", position: "line-five", level: 1 }
      ];

      wrapper.instance().setupGame();

      expect(spy).toHaveBeenCalledWith(expected);
    });
  });

  describe("findInstrument", () => {
    it("should return the instrument object of the instrument passed down from props", () => {
      const expected = {
        instrument: "flute",
        clef: "treble",
        pitches: [
          { pitch: "b", position: "line-three", level: 1 },
          { pitch: "c", position: "space-three", level: 1 },
          { pitch: "d", position: "line-four", level: 1 },
          { pitch: "e", position: "space-four", level: 1 },
          { pitch: "f", position: "line-five", level: 1 },
          { pitch: "a", position: "space-two", level: 2 },
          { pitch: "g", position: "above-space-one", level: 2 },
          { pitch: "a", position: "above-line-one", level: 2 },
          { pitch: "b", position: "above-space-two", level: 3 },
          { pitch: "g", position: "line-two", level: 3 },
          { pitch: "f", position: "space-one", level: 3 },
          { pitch: "e", position: "line-one", level: 4 },
          { pitch: "d", position: "below-space-one", level: 4 },
          { pitch: "c", position: "below-line-one", level: 4 }
        ]
      };

      const result = wrapper.instance().findInstrument();

      expect(result).toEqual(expected);
    });
  });

  describe("findMonsterHearts", () => {
    it("should return an array of pitches", () => {
      const instrument = {
        instrument: "flute",
        clef: "treble",
        pitches: [
          { pitch: "b", position: "line-three", level: 1 },
          { pitch: "c", position: "space-three", level: 1 },
          { pitch: "d", position: "line-four", level: 1 },
          { pitch: "e", position: "space-four", level: 1 },
          { pitch: "f", position: "line-five", level: 1 },
          { pitch: "a", position: "space-two", level: 2 },
          { pitch: "g", position: "above-space-one", level: 2 },
          { pitch: "a", position: "above-line-one", level: 2 },
          { pitch: "b", position: "above-space-two", level: 3 },
          { pitch: "g", position: "line-two", level: 3 },
          { pitch: "f", position: "space-one", level: 3 },
          { pitch: "e", position: "line-one", level: 4 },
          { pitch: "d", position: "below-space-one", level: 4 },
          { pitch: "c", position: "below-line-one", level: 4 }
        ]
      };

      const expected = [
        { pitch: "b", position: "line-three", level: 1 },
        { pitch: "c", position: "space-three", level: 1 },
        { pitch: "d", position: "line-four", level: 1 },
        { pitch: "e", position: "space-four", level: 1 },
        { pitch: "f", position: "line-five", level: 1 }
      ];

      const result = wrapper.instance().findMonsterHearts(instrument);

      expect(result).toEqual(expected);
    });
  });

  describe("startTimer", () => {
    it("should setState", () => {
      wrapper.instance().startTimer();

      expect(wrapper.instance().state.running).toEqual(true);
    });
  });

  describe("resetGame", () => {
    it("should setState", () => {
      const expected = {
        currentLevel: 1,
        perfectScores: [],
        times: []
      };

      wrapper.instance().resetGame();

      expect(wrapper.instance().state.currentLevel).toEqual(
        expected.currentLevel
      );
      expect(wrapper.instance().state.perfectScores).toEqual(
        expected.perfectScores
      );
      expect(wrapper.instance().state.times).toEqual(expected.times);
    });

    it("should call setupGame", () => {
      const spy = jest.spyOn(wrapper.instance(), "setupGame");

      wrapper.instance().resetGame();

      expect(spy).toHaveBeenCalled();
    });

    it("should call startTime", () => {
      const spy = jest.spyOn(wrapper.instance(), "startTimer");

      wrapper.instance().resetGame();

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("setPitch", () => {
    it("should setState", () => {
      const expected = "test";
      wrapper.instance().setPitch([expected]);

      expect(wrapper.instance().state.currentPitch).toEqual(expected);
    });
  });

  describe("submitGuess", () => {
    const keyEvent = { key: "a" };
    const falseKeyEvent = { key: "q" };
    const input = "g";

    it("should call checkStatus", () => {
      const spy = jest.spyOn(wrapper.instance(), "checkStatus");

      wrapper.instance().submitGuess(keyEvent);

      expect(spy).toHaveBeenCalled();
    });

    it("should return if checkStatus returns false", () => {
      wrapper.setState({
        victory: true
      });

      const spyOne = jest.spyOn(wrapper.instance(), "playerAttack");
      const spyTwo = jest.spyOn(wrapper.instance(), "monsterAttack");

      wrapper.instance().submitGuess();

      expect(spyOne).toHaveBeenCalledTimes(0);
      expect(spyTwo).toHaveBeenCalledTimes(0);
    });

    it("should return if the event key is not acceptable", () => {
      const spyOne = jest.spyOn(wrapper.instance(), "playerAttack");
      const spyTwo = jest.spyOn(wrapper.instance(), "monsterAttack");

      wrapper.instance().submitGuess(falseKeyEvent);

      expect(spyOne).toHaveBeenCalledTimes(0);
      expect(spyTwo).toHaveBeenCalledTimes(0);
    });

    it("should call playerAttack if the event key is acceptable and matches", () => {
      const spyOne = jest.spyOn(wrapper.instance(), "playerAttack");
      const spyTwo = jest.spyOn(wrapper.instance(), "monsterAttack");

      wrapper.setState({
        currentPitch: { pitch: "a" }
      });

      wrapper.instance().submitGuess(keyEvent);

      expect(spyOne).toHaveBeenCalledTimes(1);
      expect(spyTwo).toHaveBeenCalledTimes(0);
    });

    it("should call monsterAttack if the event key is acceptable and doesnt match", () => {
      const spyOne = jest.spyOn(wrapper.instance(), "playerAttack");
      const spyTwo = jest.spyOn(wrapper.instance(), "monsterAttack");

      wrapper.setState({
        currentPitch: { pitch: "b" }
      });

      wrapper.instance().submitGuess(keyEvent);

      expect(spyOne).toHaveBeenCalledTimes(0);
      expect(spyTwo).toHaveBeenCalledTimes(1);
    });

    it("should call playerAttack if the click event matches", () => {
      const spyOne = jest.spyOn(wrapper.instance(), "playerAttack");
      const spyTwo = jest.spyOn(wrapper.instance(), "monsterAttack");

      wrapper.setState({
        currentPitch: { pitch: "g" }
      });

      wrapper.instance().submitGuess(null, input);

      expect(spyOne).toHaveBeenCalledTimes(1);
      expect(spyTwo).toHaveBeenCalledTimes(0);
    });

    it("should call monsterAttack if the click event doesnt match", () => {
      const spyOne = jest.spyOn(wrapper.instance(), "playerAttack");
      const spyTwo = jest.spyOn(wrapper.instance(), "monsterAttack");

      wrapper.setState({
        currentPitch: { pitch: "a" }
      });

      wrapper.instance().submitGuess(null, input);

      expect(spyOne).toHaveBeenCalledTimes(0);
      expect(spyTwo).toHaveBeenCalledTimes(1);
    });
  });
});
