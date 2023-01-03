import { fireEvent, render, screen } from "@testing-library/react";
import { FormRegisterClient } from "./index";
import { RecoilRoot } from "recoil";

describe("FormRegisterClient test suite", () => {
  it("submit has to be disable while input has no value", () => {
    // Arrange
    render(<FormRegisterClient />);
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
        <FormRegisterClient />
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
        <FormRegisterClient />
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
    expect(errorMessage.textContent).toBe("Cliente já cadastrado");
  });
});
