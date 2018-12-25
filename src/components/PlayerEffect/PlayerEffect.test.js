import React from "react";
import ReactDOM from "react-dom";
import PlayerEffect from "./PlayerEffect";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("PlayerEffect", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PlayerEffect />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
