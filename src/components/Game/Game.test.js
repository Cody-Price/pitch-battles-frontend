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

  describe("checkStatus", () => {
    it("should return false if conditions are met", () => {
      wrapper.setState({
        victory: true
      });

      const response = wrapper.instance().checkStatus();

      expect(response).toEqual(false);
    });

    it("should return true if conditions arent met", () => {
      const response = wrapper.instance().checkStatus();

      expect(response).toEqual(true);
    });
  });

  describe("playerAttack", () => {
    it("should setsState", () => {
      const expected = {
        playerStatus: "attack",
        monsterStatus: "hit",
        monsterHit: true,
        playerHit: false
      };
      wrapper.instance().playerAttack();

      expect(wrapper.instance().state.playerStatus).toEqual(
        expected.playerStatus
      );
      expect(wrapper.instance().state.monsterStatus).toEqual(
        expected.monsterStatus
      );
      expect(wrapper.instance().state.monsterHit).toEqual(expected.monsterHit);
      expect(wrapper.instance().state.playerHit).toEqual(expected.playerHit);
    });

    it("should call setTimeout", () => {
      const spy = jest.spyOn(wrapper.instance(), "monsterHitResolve");

      jest.useFakeTimers();

      wrapper.instance().playerAttack();

      expect(setTimeout).toHaveBeenCalledWith(spy, 1000);
    });
  });

  describe("monsterAttack", () => {
    it("should setsState", () => {
      const expected = {
        playerStatus: "hit",
        monsterStatus: "attack",
        monsterHit: false,
        playerHit: true
      };
      wrapper.instance().monsterAttack();

      expect(wrapper.instance().state.playerStatus).toEqual(
        expected.playerStatus
      );
      expect(wrapper.instance().state.monsterStatus).toEqual(
        expected.monsterStatus
      );
      expect(wrapper.instance().state.monsterHit).toEqual(expected.monsterHit);
      expect(wrapper.instance().state.playerHit).toEqual(expected.playerHit);
    });

    it("should call setTimeout", () => {
      const spy = jest.spyOn(wrapper.instance(), "playerHitResolve");

      jest.useFakeTimers();

      wrapper.instance().monsterAttack();

      expect(setTimeout).toHaveBeenCalledWith(spy, 1000);
    });
  });

  describe("monsterHitResolve", () => {
    it("should call monsterDeath if monsterHearts.length === 1", () => {
      wrapper.instance().setState({
        monsterHearts: [0]
      });

      const spy = jest.spyOn(wrapper.instance(), "monsterDeath");

      wrapper.instance().monsterHitResolve();

      expect(spy).toHaveBeenCalled();
    });

    it("should call monsterHitIdle if monsterHearts.length > 1", () => {
      wrapper.instance().setState({
        monsterHearts: [0, 1]
      });

      const spy = jest.spyOn(wrapper.instance(), "monsterHitIdle");

      wrapper.instance().monsterHitResolve();

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("monsterDeath", () => {
    it("should setState", () => {
      const expected = {
        running: false,
        monsterHearts: [],
        monsterStatus: "dead"
      };

      wrapper.instance().monsterDeath();

      expect(wrapper.instance().state.running).toEqual(expected.running);
      expect(wrapper.instance().state.monsterHearts).toEqual(
        expected.monsterHearts
      );
      expect(wrapper.instance().state.monsterStatus).toEqual(
        expected.monsterStatus
      );
    });

    it("should call setTimeout with the correct params", () => {
      const spy = jest.spyOn(wrapper.instance(), "victory");

      jest.useFakeTimers();

      wrapper.instance().monsterDeath();

      expect(setTimeout).toHaveBeenCalledWith(spy, 3000);
    });
  });

  describe("monsterHitIdle", () => {
    it("should call setState", () => {
      const expected = {
        playerHit: false,
        monsterHit: false,
        playerStatus: "idle",
        monsterStatus: "idle",
        monsterHearts: ["a"]
      };
      wrapper.setState({
        monsterHearts: ["b", "a"],
        currentPitch: "b"
      });

      wrapper.instance().forceUpdate();

      wrapper.instance().monsterHitIdle();

      expect(wrapper.instance().state.playerHit).toEqual(expected.playerHit);
      expect(wrapper.instance().state.monsterHit).toEqual(expected.monsterHit);
      expect(wrapper.instance().state.playerStatus).toEqual(
        expected.playerStatus
      );
      expect(wrapper.instance().state.monsterStatus).toEqual(
        expected.monsterStatus
      );
      expect(wrapper.instance().state.monsterHearts).toEqual(
        expected.monsterHearts
      );
    });

    it("should call setPitch", () => {
      const spy = jest.spyOn(wrapper.instance(), "setPitch");

      wrapper.instance().monsterHitIdle();

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("playerHitResolve", () => {
    it("should call playerDeath if playerHearts.length === 1", () => {
      wrapper.instance().setState({
        playerHearts: [0]
      });

      const spy = jest.spyOn(wrapper.instance(), "playerDeath");

      wrapper.instance().playerHitResolve();

      expect(spy).toHaveBeenCalled();
    });

    it("should call playerHitIdle if playerHearts.length > 1", () => {
      wrapper.instance().setState({
        playerHearts: [0, 1]
      });

      const spy = jest.spyOn(wrapper.instance(), "playerHitIdle");

      wrapper.instance().playerHitIdle();

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("playerDeath", () => {
    it("should setState", () => {
      const expected = {
        playerHit: false,
        monsterHit: false,
        playerStatus: "dead",
        monsterStatus: "idle",
        playerHearts: []
      };

      wrapper.instance().playerDeath();

      expect(wrapper.instance().state.playerHit).toEqual(expected.playerHit);
      expect(wrapper.instance().state.monsterHit).toEqual(expected.monsterHit);
      expect(wrapper.instance().state.monsterStatus).toEqual(
        expected.monsterStatus
      );

      expect(wrapper.instance().state.playerHearts).toEqual(
        expected.playerHearts
      );
      expect(wrapper.instance().state.playerStatus).toEqual(
        expected.playerStatus
      );
    });

    it("should call setTimeout with the correct params", () => {
      const spy = jest.spyOn(wrapper.instance(), "gameOver");

      jest.useFakeTimers();

      wrapper.instance().playerDeath();

      expect(setTimeout).toHaveBeenCalledWith(spy, 3000);
    });
  });

  describe("playerHitIdle", () => {
    it("should setState", () => {
      const expected = {
        playerHit: false,
        monsterHit: false,
        playerStatus: "idle",
        monsterStatus: "idle",
        playerHearts: ["a"]
      };

      wrapper.setState({
        playerHearts: ["b", "a"]
      });

      wrapper.instance().playerHitIdle();

      expect(wrapper.instance().state.playerHit).toEqual(expected.playerHit);
      expect(wrapper.instance().state.monsterHit).toEqual(expected.monsterHit);
      expect(wrapper.instance().state.playerStatus).toEqual(
        expected.playerStatus
      );
      expect(wrapper.instance().state.monsterStatus).toEqual(
        expected.monsterStatus
      );
      expect(wrapper.instance().state.playerHearts).toEqual(
        expected.playerHearts
      );
    });
  });

  describe("victory", () => {
    it("should callSetState based on level = 4", () => {
      const expected = {
        victory: false,
        finalVictory: true,
        playerStatus: "victory"
      };

      wrapper.setState({
        currentLevel: 4
      });

      wrapper.instance().victory();

      expect(wrapper.state().finalVictory).toEqual(expected.finalVictory);
      expect(wrapper.state().playerStatus).toEqual(expected.playerStatus);
    });

    it("should callSetState based on level > 4", () => {
      const expected = {
        victory: true,
        finalVictory: false,
        playerStatus: "victory"
      };

      wrapper.setState({
        currentLevel: 3
      });

      wrapper.instance().victory();

      expect(wrapper.state().finalVictory).toEqual(expected.finalVictory);
      expect(wrapper.state().victory).toEqual(expected.victory);
      expect(wrapper.state().playerStatus).toEqual(expected.playerStatus);
    });

    it("should call checkPerfect", () => {
      const spy = jest.spyOn(wrapper.instance(), "checkPerfect");

      wrapper.instance().victory();

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("checkPerfect", () => {
    it("should call setState if playersHearts.length === 3", () => {
      const expected = [1];
      wrapper.instance().checkPerfect();

      expect(wrapper.state().perfectScores).toEqual(expected);
    });
  });

  describe("gameOver", () => {
    it("should call setState", () => {
      const expected = { gameOver: true, running: false };

      wrapper.instance().gameOver();

      expect(wrapper.state().gameOver).toEqual(expected.gameOver);
      expect(wrapper.state().running).toEqual(expected.running);
    });

    it("should call processGame", () => {
      const spy = jest.spyOn(wrapper.instance(), "processGame");

      wrapper.instance().gameOver();

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("toggleUserModal", () => {
    it("should setState", () => {
      const expected = { userModal: true };

      wrapper.instance().toggleUserModal();

      expect(wrapper.state().userModal).toEqual(expected.userModal);
    });
  });

  describe("levelUp", () => {
    it("should setState", () => {
      const expected = {
        currentLevel: 2,
        playerHit: false,
        monsterHit: false,
        playerStatus: "idle",
        monsterStatus: "idle",
        victory: false,
        running: true
      };

      wrapper.instance().levelUp();

      expect(wrapper.state().currentLevel).toEqual(expected.currentLevel);
      expect(wrapper.state().playerHit).toEqual(expected.playerHit);
      expect(wrapper.state().monsterHit).toEqual(expected.monsterHit);
      expect(wrapper.state().playerStatus).toEqual(expected.playerStatus);
      expect(wrapper.state().monsterHit).toEqual(expected.monsterHit);
      expect(wrapper.state().victory).toEqual(expected.victory);
      expect(wrapper.state().running).toEqual(expected.running);
    });

    it("should call setUpGame", () => {
      const spy = jest.spyOn(wrapper.instance(), "setupGame");

      wrapper.instance().levelUp();

      expect(spy).toHaveBeenCalled();
    });
    it("should call startTimer", () => {
      const spy = jest.spyOn(wrapper.instance(), "startTimer");

      wrapper.instance().levelUp();

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("eventListeners", () => {
    it("should call toggleUserModal", () => {
      const spy = jest.spyOn(wrapper.instance(), "toggleUserModal");
      wrapper.instance().forceUpdate();

      wrapper.find(".avatar-border").simulate("click");

      expect(spy).toHaveBeenCalled();
    });
  });
});
