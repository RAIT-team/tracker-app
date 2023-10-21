import React from "react";
import { shallow } from "enzyme";
import LoginPage from "./loginPage";

describe("LoginPage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
