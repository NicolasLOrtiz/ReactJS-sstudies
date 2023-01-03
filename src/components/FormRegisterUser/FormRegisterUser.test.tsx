import { render, screen } from "@testing-library/react";
import { FormRegisterUser } from "./index";

describe("FormRegisterUser test suite", () => {
  it("submit has to be disable while input has no value", () => {
    // Arrange
    render(<FormRegisterUser />);

    // Act
    const nameInput = screen.getByPlaceholderText("Nome completo");
    const submitButton = screen.getByRole("button");

    // Assert
    expect(nameInput).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });
});
