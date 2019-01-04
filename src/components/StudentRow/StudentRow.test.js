import { shallow } from "enzyme";
import React from "react";
import StudentRow from "./StudentRow";
const Enzyme = require("enzyme");
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

jest.mock("../../utilities/fetchCalls");

describe("StudentRow", () => {
  let wrapper;

  const mockStudent = {
    attributes: {
      first_name: "kevin",
      last_name: "simpson",
      level_one_fastest_time: 1000,
      level_two_fastest_time: 2000,
      level_three_fastest_time: 3000,
      level_four_fastest_time: 4000
    }
  };
  const mockSelectStudent = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <StudentRow student={mockStudent} selectStudent={mockSelectStudent} />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call selectStudent on click", () => {
    wrapper.find(".student-select-clicker").simulate("click");

    expect(mockSelectStudent).toHaveBeenCalledWith(mockStudent);
  });
});
