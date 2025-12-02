import { parseParams } from "@/utils/parseParams";
import { PaymentDetails } from "../pages/PaymentDetails";
import { ShippingAddress } from "../pages/ShippingAddress";
import { Review } from "../pages/Review";
import { OrderConfirmation } from "../pages/OrderConfirmation";
import { paramsSchema } from "../schema";

export async function Router(props: Props) {
  const params = await props.params;
  const { step } = parseParams(paramsSchema, params);
  if (step === 1) {
    return <ShippingAddress />;
  }
  if (step === 2) {
    return <PaymentDetails />;
  }
  if (step === 3) {
    return <Review />;
  }
  if (step === 4) {
    return <OrderConfirmation />;
  }
}

interface Props {
  params: Promise<unknown>;
}
