import React from "react";
import { shallow } from "enzyme";
import Landingpage from "./landingpage";

describe("Landingpage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Landingpage />);
    expect(wrapper).toMatchSnapshot();
  });
});
