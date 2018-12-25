import React from "react";
import ReactDOM from "react-dom";
import NoteRow from "./NoteRow";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("NoteRow", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NoteRow />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
