import { parseParams } from "@/utils/parseParams";
import { PaymentDetails } from "../pages/PaymentDetails";
import { ShippingAddress } from "../pages/ShippingAddress";
import { Review } from "../pages/Review";
import { OrderConfirmation } from "../pages/OrderConfirmation";
import { paramsSchema } from "../schema";
import { NavigationButtons } from "./NavigationButtons";

const pagesMap = {
  1: ShippingAddress,
  2: PaymentDetails,
  3: Review,
  4: OrderConfirmation,
} as const;

export async function Router(props: Props) {
  const params = await props.params;
  const { step } = parseParams(paramsSchema, params);
  const Component = pagesMap[step];
  return (
    <>
      <Component />
      <NavigationButtons step={step} />
    </>
  );
}

interface Props {
  params: Promise<unknown>;
}
