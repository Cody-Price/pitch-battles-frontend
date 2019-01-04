import React from "react";
import ReactDOM from "react-dom";
import TeacherDash from "./TeacherDash";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("TeacherDash", () => {
  const mockUser = {
    attributes: {
      first_name: "Haley",
      last_name: "Jacobs"
    }
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TeacherDash user={mockUser} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
