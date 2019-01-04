import React from "react";
import StudentClassView from "./StudentClassView";
import { mockStudentClass } from "../../utilities/mockStudentClass";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

jest.mock("../../utilities/fetchCalls");

describe("StudentClassView", () => {
  let wrapper;
  let mockNavigate;

  beforeEach(() => {
    const mockWebToken = "awklefj";
    mockNavigate = jest.fn();
    wrapper = shallow(
      <StudentClassView navigate={mockNavigate} webToken={mockWebToken} />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("studentViewClassFetch", () => {
    it("should call set state", async () => {
      await wrapper.instance().studentViewClassFetch();

      expect(wrapper.state().classStats).toEqual(
        mockStudentClass.data.attributes
      );

      expect(wrapper.state().loading).toEqual(false);
    });
  });

  describe("navitage", () => {
    it("should call navigate on click", () => {
      wrapper.find(".class-view-back-btn").simulate("click");

      expect(mockNavigate).toHaveBeenCalledWith("student dash");
    });
  });
});
