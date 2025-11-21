import { TextField } from "@mui/material";
import { CountrySelect } from "./CountrySelect";

export function Step3() {
  return (
    <>
      <header className="flex flex-col gap-2">
        <p className="text-blue font-medium text-sm leading-6">Step 3/4</p>
        <h3 className="font-medium text-xl leading-7">
          Which feature are you most interested in?
        </h3>
        <p className="text-arsenic leading-7">
          Lorem ipsum is placeholder text.
        </p>
      </header>
      <form className="contents">
        <CountrySelect />
        <TextField label="Postal Code" placeholder="Postal Code" />
      </form>
    </>
  );
}
