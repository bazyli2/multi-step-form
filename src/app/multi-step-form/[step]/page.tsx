import { paramsSchema } from "@/modules/multi-step-form/schema";
import { Feedback } from "@/pages/Feedback";
import { LocationDetails } from "@/pages/LocationDetails";
import { PersonalDetails } from "@/pages/PersonalDetails";
import { parseParams } from "@/utils/parseParams";

export default async function Page(props: Props) {
  const params = await props.params;
  const { step } = parseParams(paramsSchema, params);
  if (step === 1) {
    return <PersonalDetails />;
  }
  if (step === 2) {
    return <Feedback />;
  }
  if (step === 3) {
    return <LocationDetails />;
  }
}

interface Props {
  params: Promise<unknown>;
}
