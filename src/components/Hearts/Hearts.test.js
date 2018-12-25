import React from "react";
import ReactDOM from "react-dom";
import Hearts from "./Hearts";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("Hearts", () => {
  let wrapper;
  const mockHearts = [{ position: "hello" }];

  beforeEach(() => {
    wrapper = shallow(<Hearts hearts={mockHearts} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
