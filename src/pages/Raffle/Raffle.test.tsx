import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { Raffle } from "./index";
import { useListUsers } from "../../state/hooks";

jest.mock("../../state/hooks", () => ({
  useListUsers: jest.fn(),
}));
describe("Raffle test suite", () => {
  const users = ["Ana Maria", "João Silva", "Maria Joana"];

  beforeEach(() => {
    (useListUsers as jest.Mock).mockReturnValue(users);
  });

  it("should be able to render a raffle page", () => {
    // Arrange
    render(
      <RecoilRoot>
        <Raffle />
      </RecoilRoot>
    );

    const users = screen.queryAllByRole("option");

    // Assert
    expect(users).toHaveLength(users.length);
  });
});
