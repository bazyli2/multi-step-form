import { CircularProgress } from "@mui/material";

export function Loading() {
  return (
    <div className="w-full flex-1 flex items-center justify-center">
      <CircularProgress />
    </div>
  );
}
