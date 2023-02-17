import { RecoilRoot } from "recoil";
import { ListUsers } from "./index";
import { render, screen } from "@testing-library/react";
import { useListUsers } from "../../state/hooks";

jest.mock("../../state/hooks", () => ({
  useListUsers: jest.fn(),
}));

describe("ListUsers Empty test suit", () => {
  beforeEach(() => {
    (useListUsers as jest.Mock).mockReturnValue([]);
  });

  it("should not be able to render a user list", () => {
    // Arrange

    render(
      <RecoilRoot>
        <ListUsers />
      </RecoilRoot>
    );

    const listUsers = screen.queryAllByRole("listitem");

    // Assert
    expect(listUsers).toHaveLength(0);
  });
});

describe("ListUsers test suit", () => {
  const users = ["Ana Maria", "João Silva"];

  beforeEach(() => {
    (useListUsers as jest.Mock).mockReturnValue(users);
  });

  it("should be able to render a list of users", () => {
    // Arrange
    render(
      <RecoilRoot>
        <ListUsers />
      </RecoilRoot>
    );

    const listUsers = screen.queryAllByRole("listitem");

    // Assert
    expect(listUsers).toHaveLength(users.length);
  });
});
