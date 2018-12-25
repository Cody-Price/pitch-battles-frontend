import React from "react";
import ReactDOM from "react-dom";
import Onboarding from "./Onboarding";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("Onboarding", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Onboarding />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('clickRight', () => {
    it('should call setState if dot < 5', () => {
      const expected = 2;

      wrapper.
    })
  })
});
