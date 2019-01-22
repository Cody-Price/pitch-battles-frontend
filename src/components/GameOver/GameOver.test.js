import React from "react";
import ReactDOM from "react-dom";
import GameOver from "./GameOver";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

jest.mock("../../utilities/fetchCalls");

describe("GameOver", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GameOver />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
