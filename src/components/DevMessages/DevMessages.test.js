import React from "react";
import DevMessages from "./DevMessages";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("DevMessages", () => {
  let wrapper;
  let mockCloseDevMessage;

  beforeEach(() => {
    mockCloseDevMessage = jest.fn();
    wrapper = shallow(<DevMessages closeDevMessage={mockCloseDevMessage} />);
  });

  it("should match the snapshop", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call closeDevMessage on click", () => {
    wrapper.find(".close-dev-message").simulate("click");

    expect(mockCloseDevMessage).toHaveBeenCalled();
  });
});
