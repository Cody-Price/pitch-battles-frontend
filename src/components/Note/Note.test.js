import React from "react";
import ReactDOM from "react-dom";
import Note from "./Note";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("Note", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Note />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
