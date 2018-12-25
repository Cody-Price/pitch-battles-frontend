import React from "react";
import ReactDOM from "react-dom";
import MonsterEffect from "./MonsterEffect";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("MonsterEffect", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MonsterEffect />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
