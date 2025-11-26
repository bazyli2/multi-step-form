import { TextField } from "@mui/material";
import { CountrySelect } from "./CountrySelect";

export function LocationDetails() {
  return (
    <form className="contents">
      <CountrySelect />
      <TextField label="Postal Code" placeholder="Postal Code" />
    </form>
  );
}
