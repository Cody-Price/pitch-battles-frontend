import React from "react";
import ReactDOM from "react-dom";
import ClassCard from "./ClassCard";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("ClassCard", () => {
  const mockData = {
    attributes: {
      name: "5th Grade Band",
      key: "keeeeeey"
    },
    id: 1
  };
  let wrapper;
  let mockClassSelect;

  beforeEach(() => {
    mockClassSelect = jest.fn();
    wrapper = shallow(
      <ClassCard data={mockData} classSelect={mockClassSelect} />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call classSelect on click with the correct params", () => {
    wrapper.find(".class-select-button").simulate("click");

    expect(mockClassSelect).toBeCalledWith(1);
  });
});
