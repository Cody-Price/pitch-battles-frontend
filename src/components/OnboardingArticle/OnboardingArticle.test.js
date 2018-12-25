import React from "react";

import { onboardingContent } from "../../utilities/onboardingContent";
import OnboardingArticle from "./OnboardingArticle";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("OnboardingArticle", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<OnboardingArticle data={onboardingContent[0]} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
