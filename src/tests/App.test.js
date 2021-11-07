import { render, screen } from "@testing-library/react";
import App from "../login-components/App.js";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
