import React from "react";
import ReactDOM from "react-dom";
import Note from "./Note";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("Note", () => {
  let wrapper;
  const mockSubmitGuess = jest.fn();
  const mockPitch = "b";

  beforeEach(() => {
    wrapper = shallow(<Note pitch={mockPitch} submitGuess={mockSubmitGuess} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call submitGuess on click", () => {
    const expected = "b";

    wrapper.find(".note-name").simulate("click");

    expect(mockSubmitGuess).toHaveBeenCalledWith(null, expected);
  });
});
