import "@testing-library/jest-dom";
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TestForm } from "./TestForm";

test("RHFFieldForm", async () => {
  const onSubmit = vi.fn();
  render(<TestForm onSubmit={onSubmit} />);
  const input = await screen.findByLabelText("Name");
  const submitButton = await screen.findByRole("button");
  await userEvent.type(input, "a");
  await userEvent.click(submitButton);
  expect(screen.getByText(/Too\ Small/i)).toBeInTheDocument();
  expect(onSubmit).not.toHaveBeenCalled();
});
