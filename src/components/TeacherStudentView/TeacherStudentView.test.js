import React from "react";
import ReactDOM from "react-dom";
import TeacherStudentView from "./TeacherStudentView.js";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

jest.mock("../../utilities/fetchCalls");

describe("TeacherStudentView", () => {
  let wrapper;

  const mockStudent = {
    attributes: {
      badges: {
        data: []
      },
      games: {
        data: []
      },
      class: {
        data: {
          attributes: {
            name: "4th Grade Band"
          }
        }
      }
    }
  };

  beforeEach(() => {
    wrapper = shallow(<TeacherStudentView student={mockStudent} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
