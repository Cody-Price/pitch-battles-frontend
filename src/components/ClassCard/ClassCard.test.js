import React from "react";
import ReactDOM from "react-dom";
import ClassCard from "./ClassCard";
import Enzyme, { shallow } from "enzyme";
const EnzymeAdapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("ClassCard", () => {
  let mockGenerateClassCards;
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
    mockGenerateClassCards = jest.fn();
    mockClassSelect = jest.fn();
    wrapper = shallow(
      <ClassCard
        data={mockData}
        classSelect={mockClassSelect}
        generateClassCards={mockGenerateClassCards}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call classSelect on click with the correct params", () => {
    wrapper.find(".class-select-button").simulate("click");

    expect(mockClassSelect).toBeCalledWith(1);
  });

  describe("confirmDelete", () => {
    it("should call confirmDelete on click", () => {
      const spy = jest.spyOn(wrapper.instance(), "confirmDelete");
      wrapper.instance().forceUpdate();

      wrapper.find(".fa-trash-alt").simulate("click");

      expect(spy).toHaveBeenCalled();
    });

    it("should call setState", () => {
      wrapper.instance().confirmDelete();

      expect(wrapper.state().showConfirmDelete).toEqual(true);
    });
  });

  describe("deleteClass", () => {
    it("should call setState", async () => {
      wrapper.setState({
        deleteError: true
      });
      await wrapper.instance().deleteClass();

      expect(wrapper.state().deleteError).toEqual(false);
    });

    it("should call generateClassCards", async () => {
      await wrapper.instance().deleteClass();

      expect(mockGenerateClassCards).toHaveBeenCalled();
    });

    it("should call deleteClass on click", async () => {
      const spy = jest.spyOn(wrapper.instance(), "deleteClass");

      wrapper.instance().forceUpdate();

      await wrapper.find(".class-delete-btn").simulate("click");

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("doNotDelete", () => {
    it("should setstate", () => {
      wrapper.setState({
        showConfirmDelete: true
      });

      wrapper.instance().doNotDelete();

      expect(wrapper.state().showConfirmDelete).toEqual(false);
    });

    it("should call doNotDelete on click", () => {
      const spy = jest.spyOn(wrapper.instance(), "doNotDelete");

      wrapper.instance().forceUpdate();

      wrapper.find(".class-do-not-delete-btn").simulate("click");

      expect(spy).toHaveBeenCalled();
    });
  });
});
