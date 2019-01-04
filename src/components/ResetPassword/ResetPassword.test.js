import { shallow } from "enzyme";
import React from "react";
import ResetPassword from "./ResetPassword";
const Enzyme = require("enzyme");
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("ResetPassword", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ResetPassword />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
