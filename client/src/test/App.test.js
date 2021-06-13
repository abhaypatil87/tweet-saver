import { render, screen } from "@testing-library/react";
import App from "../App";

beforeEach(() => {
  render(<App />);
});

describe("App", () => {
  it("renders the Header component", () => {
    expect(screen.getByText(/Save On Tweets!/i)).toBeTruthy();
  });

  it("renders the Main Container component", () => {
    expect(screen.getByRole(/main/i)).toBeTruthy();
  });
});
