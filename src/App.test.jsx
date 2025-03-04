// import { describe, it, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import App from "./App";

// describe("Something about testing", () => {
//   it("true should be true", () => {
//     expect(true).toBe(true);
//   });

//   it("false to be false", () => {
//     expect(false).toBe(false);
//   });
// });

// describe("App", () => {
//   it("renders headline", () => {
//     render(<App title="React" />);

//     screen.debug();

//     // check if App components renders headline
//   });
// });

// describe("render component", () => {
//   it("renders correct heading", () => {
//     render(<App></App>);
//     expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
//   });
// });

// App.test.jsx

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App.jsx";

describe("App component", () => {
  it("renders magnificent monkeys", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("renders radical rhinos after button click", async () => {
    const user = userEvent.setup();

    render(<App />);
    const button = screen.getByRole("button", { name: "Click Me" });

    await user.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });
});
