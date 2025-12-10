import { useForm } from "react-hook-form";
import z from "zod";
import { RHFFormField } from "./RHFFormField";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(3),
});

type FormValues = z.infer<typeof formSchema>;

export function TestForm(props: Props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(formSchema),
  });
  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
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

interface Props {
  onSubmit: (values: FormValues) => void;
}
