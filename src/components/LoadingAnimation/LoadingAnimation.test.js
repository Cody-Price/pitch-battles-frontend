import React from "react";
import LoadingAnimation from "./LoadingAnimation";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("LoadingAnimation", () => {
  let wrapper;
  const mockTime = [1];

  beforeEach(() => {
    wrapper = shallow(<LoadingAnimation time={mockTime} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
