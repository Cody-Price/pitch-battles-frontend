import React from "react";

import EditAvatar from "./EditAvatar";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("EditAvatar", () => {
  let wrapper;
  const mockUser = {
    avatar: 2
  };
  const mockStatus = true;

  beforeEach(() => {
    wrapper = shallow(<EditAvatar user={mockUser} status={mockStatus} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
