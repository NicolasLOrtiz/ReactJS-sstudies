import { render, screen } from "@testing-library/react";
import React from "react";
import { Footer } from "./index";
import { RecoilRoot } from "recoil";
import { useListUsers } from "../../state/hooks";

const mockNavigate = jest.fn();
const mockRaffle = jest.fn();
jest.mock("../../state/hooks", () => ({
  useListUsers: jest.fn(),
  useRaffle: () => mockRaffle,
}));

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));
describe("Footer test suite > doesn't have users", () => {
  beforeEach(() => {
    (useListUsers as jest.Mock).mockReturnValue([]);
  });

  it("should be able to render a footer", () => {
    // Arrange
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const footer = screen.getByRole("contentinfo");

    // Assert
    expect(footer).toBeInTheDocument();
  });

  it("shouldn't be able to start select a random user", () => {
    // Arrange
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");

    // Assert
    expect(button).toBeDisabled();
  });
});

describe("Footer test suite > has users", () => {
  beforeEach(() => {
    (useListUsers as jest.Mock).mockReturnValue([
      "Ana Maria",
      "João Silva",
      "Maria Joana",
      "Joana Silva",
    ]);
  });

  it("should be able to click in the button", () => {
    // Arrange
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");

    // Assert
    expect(button).not.toBeDisabled();
  });

  it("should be able to start select a random client", () => {
    // Arrange
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");

    // Act
    button.click();

    // Assert
    expect(mockNavigate).toHaveBeenCalledWith("/sorteio");
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockRaffle).toHaveBeenCalledTimes(1);
  });
});
