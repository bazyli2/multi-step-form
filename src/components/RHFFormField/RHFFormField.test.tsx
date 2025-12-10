import "@testing-library/jest-dom";
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RHFFormField } from "./RHFFormField";

const formSchema = z.object({
  name: z.string(),
});

function TestForm() {
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });
  return (
    <form>
      <RHFFormField
        register={register}
        name="name"
        error={errors.name}
        label="Name"
      />
    </form>
  );
}

test("RHFFieldForm", async () => {
  render(<TestForm />);
  const input = await screen.findByLabelText("Name");
  expect(input).toBeInTheDocument();
});
