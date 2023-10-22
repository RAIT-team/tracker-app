import React from "react";
import { shallow } from "enzyme";
import Risk from "./risk";

describe("Risk", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Risk />);
    expect(wrapper).toMatchSnapshot();
  });
});
