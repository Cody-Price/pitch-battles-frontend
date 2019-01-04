import React from "react";
import ReactDOM from "react-dom";
import GameRow from "./GameRow";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("GameRow", () => {
  let wrapper;
  const mockGame = {
    id: 3,
    attributes: {
      level_one_perfect: true,
      level_two_duration: 123,
      level_one_duration: 123,
      level_two_perfect: true,
      level_three_duration: 123,
      level_three_perfect: true,
      level_four_duration: true,
      level_four_perfect: false
    }
  };

  beforeEach(() => {
    wrapper = shallow(<GameRow game={mockGame} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
