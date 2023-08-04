import { render, screen, fireEvent } from "@testing-library/react";
import { LoginComponent } from "./index";

describe("Home component", () => {
  test("renders the form", () => {
    render(LoginComponent);

    // Verify that the form inputs are rendered
    expect(screen.getByLabelText("E-mail")).toBeInTheDocument();
    expect(screen.getByLabelText("Senha")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Entrar" })).toBeInTheDocument();
  });

  test("submits the form with valid data", () => {
    render(Login);

    // Fill in the form inputs
    fireEvent.change(screen.getByLabelText("E-mail"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Senha"), {
      target: { value: "password123" },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: "Entrar" }));

    // Verify that the form is submitted
    // You can mock the onSubmit function and check if it has been called with the correct data
    // For example, using Jest's mock functions:
    // expect(mockSubmitFn).toHaveBeenCalledWith({ email: 'test@example.com', senha: 'password123' });
  });

  test("displays error messages for invalid form submission", () => {
    render(Login);

    // Submit the form without filling in any inputs
    fireEvent.click(screen.getByRole("button", { name: "Entrar" }));

    // Verify that the error messages are displayed
    expect(screen.getByText("Digite seu E-mail")).toBeInTheDocument();
    expect(screen.getByText("Digite sua senha")).toBeInTheDocument();
  });
});
import LoginComponent from "./index.jsx";
