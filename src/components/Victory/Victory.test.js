import React from "react";
import ReactDOM from "react-dom";
import Victory from "./Victory";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("Victory", () => {
  let wrapper;
  const mockTime = [1];

  beforeEach(() => {
    wrapper = shallow(<Victory time={mockTime} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
