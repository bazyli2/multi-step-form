import { TextField } from "@mui/material";
import { FeatureSelect } from "./FeatureSelect";

export function Feedback() {
  return (
    <form className="contents">
      <FeatureSelect />
      <TextField label="Message" placeholder="Message" multiline rows={5} />
    </form>
  );
}
