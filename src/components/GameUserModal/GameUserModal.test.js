import React from "react";
import ReactDOM from "react-dom";
import GameUserModal from "./GameUserModal";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("GameUserModal", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GameUserModal />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
