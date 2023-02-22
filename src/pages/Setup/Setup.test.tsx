import { RecoilRoot } from "recoil";
import { render } from "@testing-library/react";
import React from "react";
import { Setup } from "./index";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));
describe("Setup test suite", () => {
  it("should be able to render a setup page", () => {
    // Arrange
    const { container } = render(
      <RecoilRoot>
        <Setup />
      </RecoilRoot>
    );

    // Assert
    expect(container).toMatchSnapshot();
  });
});
