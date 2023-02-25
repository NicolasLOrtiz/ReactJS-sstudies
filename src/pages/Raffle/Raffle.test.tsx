import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { Raffle } from "./index";
import { useListUsers, useWinner } from "../../state/hooks";

jest.mock("../../state/hooks", () => ({
  useListUsers: jest.fn(),
  useWinner: jest.fn(),
}));

describe("Raffle test suite", () => {
  const users = ["Ana Maria", "João Silva", "Maria Joana"];

  const pairs = new Map([
    ["Ana Maria", "João Silva"],
    ["João Silva", "Ana Maria"],
    ["Maria Joana", "João Silva"],
  ]);

  beforeEach(() => {
    (useListUsers as jest.Mock).mockReturnValue(users);
    (useWinner as jest.Mock).mockReturnValue(pairs);
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

  it("should be able to select a user", () => {
    // Arrange
    render(
      <RecoilRoot>
        <Raffle />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText("Selecione o usuário");

    // Act
    fireEvent.change(select, { target: { value: users[1] } });

    const winner = screen.getByRole("alert");

    // Assert
    expect(winner).toBeInTheDocument();
  });
});
