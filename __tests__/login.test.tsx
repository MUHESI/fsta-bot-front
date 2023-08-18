import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../src/pages/auth/Login";
import { BrowserRouter } from "react-router-dom";

// mockedGet.mockImplementation(() =>
//   Promise.resolve<any>({
//     data: { id: "1", full_name: "MUHESI Moses" },
//   })
// );

// jest.mock("axios");
// mockAxios.get.mockImplementation(() => Promise.resolve());

// jest.mock("axios", () => ({
// __esModule: true,
//   default: {
//     get: () => ({
//       data: { id: "1", full_name: "MUHESI Moses" },
//     }),
//   },
// }));

test("Email and password input, button should be rendered", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const emailInputElt = screen.getByPlaceholderText("Ton addresse email");
  const pwdInputElt = screen.getByPlaceholderText("Ton mot de passe");
  const btnInputElt = screen.getByRole("button");
  expect(emailInputElt).toBeInTheDocument();
  expect(pwdInputElt).toBeInTheDocument();
  expect(btnInputElt).toBeInTheDocument();
  expect(btnInputElt).toHaveTextContent("Se connecter");
});

test("Remember me checkbox and forgot password should be rendered", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const rememberMeElt = screen.getByTestId("rememberMe");
  const forgotPasswordElt = screen.getByTestId("forgotPassword");
  expect(rememberMeElt).toBeInTheDocument();
  expect(forgotPasswordElt).toBeInTheDocument();
  expect(forgotPasswordElt).toHaveTextContent("Forgot password?");
  // TODO: VERIFY LATER
  // expect(rememberMeElt).toHaveTextContent("rememberMe?");
});

test("password can be shown or hidden by clicking on the eye icon", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const pwdInputElt = screen.getByPlaceholderText(
    "Ton mot de passe"
  ) as HTMLInputElement;
  const eyeIcon = screen.getByTestId("eye-icon");
  expect(pwdInputElt.type).toBe("password");
  fireEvent.click(eyeIcon);
  expect(pwdInputElt.type).toBe("text");
  fireEvent.click(eyeIcon);
  expect(pwdInputElt.type).toBe("password");
});

test("Email and password input, should change", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const emailInputElt = screen.getByPlaceholderText("Ton addresse email");
  const pwdInputElt = screen.getByPlaceholderText("Ton mot de passe");
  const emailValue = "user.email@gmail.com";
  const pwdValue = "passwordTest";

  fireEvent.change(emailInputElt, { target: { value: emailValue } });
  fireEvent.change(pwdInputElt, { target: { value: pwdValue } });
  expect(emailInputElt).toHaveValue(emailValue);
  expect(pwdInputElt).toHaveValue(pwdValue);
});

test("button should not be disabled when inputs value exist", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const emailInputElt = screen.getByPlaceholderText("Ton addresse email");
  const pwdInputElt = screen.getByPlaceholderText("Ton mot de passe");
  const btnInputElt = screen.getByText("Se connecter");

  const emailValue = "user.email@gmail.com";
  const pwdValue = "passwordTest";

  fireEvent.change(emailInputElt, { target: { value: emailValue } });
  fireEvent.change(pwdInputElt, { target: { value: pwdValue } });

  expect(btnInputElt).not.toBeDisabled();
});
