import "@testing-library/jest-dom";
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RHFFormField } from "./RHFFormField";

const formSchema = z.object({
  name: z.string().min(3),
});

function TestForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RHFFormField
        register={register}
        name="name"
        error={errors.name}
        label="Name"
      />
      <button type="submit">button</button>
    </form>
  );
}

test("RHFFieldForm", async () => {
  render(<TestForm />);
  const input = await screen.findByLabelText("Name");
  const submitButton = await screen.findByRole("button");
  await userEvent.type(input, "a");
  await userEvent.click(submitButton);
  expect(screen.getByText(/Too\ Small/i)).toBeInTheDocument();
});
