import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CreateProvince from "../src/pages/createProvince";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

test("nameProvince  input, should be rendered", () => {
  render(
    <RecoilRoot>
      <BrowserRouter>
        <CreateProvince />
      </BrowserRouter>
    </RecoilRoot>
  );
  const nameProvinceElt = screen.getByTestId("create-province");
  expect(nameProvinceElt).toBeInTheDocument();
});

test("submitBtn  input, should be rendered", () => {
  render(
    <RecoilRoot>
      <BrowserRouter>
        <CreateProvince />
      </BrowserRouter>
    </RecoilRoot>
  );
  const btnInputElt = screen.getByRole("button");
  expect(btnInputElt).toBeInTheDocument();
  expect(btnInputElt).toHaveTextContent("Enregistrer");
});

test("nameProvince input, should change", () => {
  render(
    <RecoilRoot>
      <BrowserRouter>
        <CreateProvince />
      </BrowserRouter>
    </RecoilRoot>
  );
  const nameProvinceInputElt = screen.getByPlaceholderText(
    "eg: Entrer le nom de la province"
  );
  const testValue = "Nord-Kivu";
  fireEvent.change(nameProvinceInputElt, { target: { value: testValue } });
  expect(nameProvinceInputElt).toHaveValue(testValue);
});

test("loading should be rendered when click", () => {
  render(
    <RecoilRoot>
      <BrowserRouter>
        <CreateProvince />
      </BrowserRouter>
    </RecoilRoot>
  );
  const nameProvinceInputElt = screen.getByPlaceholderText(
    /eg: Entrer le nom de la province/i
  );
  const testValue = "Nord-Kivu";
  fireEvent.change(nameProvinceInputElt, { target: { value: testValue } });
  expect(nameProvinceInputElt).toHaveValue(testValue);
  const btnInputElt = screen.getByRole("button");
  fireEvent.click(btnInputElt);
  expect(btnInputElt).toHaveTextContent(/Chargement.../i);
});
