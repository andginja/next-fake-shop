import React from "react";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Homepage from "./homepage";

describe("Homepage", () => {
  it("renders without crashing", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Homepage />
      </QueryClientProvider>
    );
  });
});
