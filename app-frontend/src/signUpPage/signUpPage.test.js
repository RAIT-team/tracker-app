import React from "react";
import { shallow } from "enzyme";
import SignUpPage from "./signUpPage";

describe("SignUpPage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SignUpPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
