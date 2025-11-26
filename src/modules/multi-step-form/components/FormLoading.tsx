import { CircularProgress } from "@mui/material";

export function FormLoading() {
  return (
    <div className="min-h-80 flex items-center justify-center">
      <CircularProgress />
    </div>
  );
}
