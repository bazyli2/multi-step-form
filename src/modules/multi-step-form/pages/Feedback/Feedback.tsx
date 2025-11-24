import { Button, TextField } from "@mui/material";
import { FeatureSelect } from "./FeatureSelect";

export function Feedback() {
  return (
    <>
      <header className="flex flex-col gap-2">
        <p className="text-blue font-medium text-sm leading-6">Step 2/4</p>
        <h3 className="font-medium text-xl leading-7">
          Which feature are you most interested in?
        </h3>
        <p className="text-arsenic leading-7">
          Lorem ipsum is placeholder text.
        </p>
      </header>
      <form className="contents">
        <FeatureSelect />
        <TextField label="Message" placeholder="Message" multiline rows={5} />
        <div className="flex justify-between">
          <Button className="rounded-full" variant="outlined">
            Previous Step
          </Button>
          <Button className="rounded-full" variant="contained">
            Next Step
          </Button>
        </div>
      </form>
    </>
  );
}
