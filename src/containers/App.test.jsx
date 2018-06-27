import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("containers/<App />", () => {
  it("says hello", () => {
    const wrapper = shallow(<App />);
    console.log(wrapper);
    expect(wrapper.prop("foo")).toBeUndefined();
  });
});
