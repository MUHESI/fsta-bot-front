import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ListProvinces from "../src/pages/provinces/index";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

test("main title element should be rendered", () => {
  render(
    <RecoilRoot>
      <BrowserRouter>
        <ListProvinces />
      </BrowserRouter>
    </RecoilRoot>
  );
  const mainTitleElt = screen.getByTestId("main-title");
  expect(mainTitleElt).toBeInTheDocument();
  expect(mainTitleElt).toHaveTextContent("Provinces");
});

test("list-provinces element should be rendered", () => {
  render(
    <RecoilRoot>
      <BrowserRouter>
        <ListProvinces />
      </BrowserRouter>
    </RecoilRoot>
  );
  const mainTitleElt = screen.getByTestId("list-provinces");
  expect(mainTitleElt).toBeInTheDocument();
});
