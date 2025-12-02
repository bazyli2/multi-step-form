import { useParams } from "next/navigation";
import { paramsSchema } from "../schema";

export function useStepParam() {
  const params = useParams();
  const result = paramsSchema.parse(params);
  return result.step;
}
