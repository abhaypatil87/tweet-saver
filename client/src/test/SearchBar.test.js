import React from "react";
import { render, screen } from "@testing-library/react";
import { SearchBar } from "../components/SearchBar";

beforeEach(() => {
  render(<SearchBar onSearch={() => {}} />);
});

describe("SearchBar", () => {
  test("renders SearchBar component", () => {
    /* Search the case sensitive placeholder */
    expect(screen.getByPlaceholderText(/Search Tweets/)).toBeInTheDocument();
    /* Search the case sensitive label/aria-label */
    expect(screen.getByLabelText(/enter search terms/)).toBeInTheDocument();

    /* Search the case sensitive placeholder */
    expect(screen.getByPlaceholderText(/Count/)).toBeInTheDocument();
    /* Search the case sensitive label/aria-label */
    expect(
      screen.getByLabelText(/enter the number of tweets/)
    ).toBeInTheDocument();
  });
});
