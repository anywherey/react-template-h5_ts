import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../src/view/home/index";
import { MemoryRouter } from "react-router-dom"; // 导入MemoryRouter
describe("Home Component", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  );
  expect(screen.getByText(/home/i)).toBeInTheDocument();
});
