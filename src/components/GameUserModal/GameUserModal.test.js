import React from "react";
import ReactDOM from "react-dom";
import GameUserModal from "./GameUserModal";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

jest.mock("../../utilities/fetchCalls");

describe("GameUserModal", () => {
  let wrapper;
  const mockStatus = true;
  const mockUsername = "Joey";
  const mockInstrument = "triangle";
  let mockReset;
  let mockEndGame;

  beforeEach(() => {
    mockReset = jest.fn();
    mockEndGame = jest.fn();

    wrapper = shallow(
      <GameUserModal
        status={mockStatus}
        username={mockUsername}
        instrument={mockInstrument}
        reset={mockReset}
        endGame={mockEndGame}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call reset on click", () => {
    wrapper.find(".reset-game-button").simulate("click");

    expect(mockReset).toHaveBeenCalled();
  });

  it("should call endGame on click", () => {
    wrapper.find(".exit-game-button").simulate("click");

    expect(mockEndGame).toHaveBeenCalledWith(false);
  });
});
