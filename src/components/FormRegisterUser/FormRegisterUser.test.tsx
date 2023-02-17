import { act, fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { FormRegisterUser } from "./index";

describe("FormRegisterUser test suite", () => {
  it("submit has to be disable while input has no value", () => {
    // Arrange
    render(
      <RecoilRoot>
        <FormRegisterUser />
      </RecoilRoot>
    );
    const nameInput = screen.getByPlaceholderText("Nome completo");
    const submitButton = screen.getByRole("button");

    // Assert
    expect(nameInput).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  it("add a new client when submit, if have a value", () => {
    // Arrange
    render(
      <RecoilRoot>
        <FormRegisterUser />
      </RecoilRoot>
    );
    const nameInput = screen.getByPlaceholderText("Nome completo");
    const submitButton = screen.getByRole("button");

    // Act
    fireEvent.change(nameInput, {
      target: {
        value: "Ana Maria",
      },
    });
    fireEvent.click(submitButton);

    // Assert
    expect(nameInput).toHaveFocus();
    expect(nameInput).toHaveValue("");
  });

  it("cannot register a client with same name in the list", () => {
    // Arrange
    render(
      <RecoilRoot>
        <FormRegisterUser />
      </RecoilRoot>
    );
    const nameInput = screen.getByPlaceholderText("Nome completo");
    const submitButton = screen.getByRole("button");

    // Act
    fireEvent.change(nameInput, {
      target: {
        value: "Ana Maria",
      },
    });
    fireEvent.click(submitButton);

    fireEvent.change(nameInput, {
      target: {
        value: "Ana Maria",
      },
    });
    fireEvent.click(submitButton);

    // Assert
    const errorMessage = screen.getByRole("alert");

    expect(errorMessage.textContent).toBe("Usuário já cadastrado");
  });

  it("the error message must disapear after seconds", () => {
    // Arrange
    jest.useFakeTimers();

    render(
      <RecoilRoot>
        <FormRegisterUser />
      </RecoilRoot>
    );
    const nameInput = screen.getByPlaceholderText("Nome completo");
    const submitButton = screen.getByRole("button");

    // Act
    fireEvent.change(nameInput, {
      target: {
        value: "Ana Maria",
      },
    });
    fireEvent.click(submitButton);

    fireEvent.change(nameInput, {
      target: {
        value: "Ana Maria",
      },
    });
    fireEvent.click(submitButton);

    // Assert
    let errorMessage = screen.queryByRole("alert");

    expect(errorMessage).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeNull();
  });
});
