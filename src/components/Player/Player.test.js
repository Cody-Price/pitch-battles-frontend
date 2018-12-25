import React from "react";
import ReactDOM from "react-dom";
import Player from "./Player";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("Player", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Player />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
