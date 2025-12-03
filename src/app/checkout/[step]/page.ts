import { Router } from "@/modules/checkout/Router";

export async function generateStaticParams() {
  return [{ step: "1" }, { step: "2" }, { step: "3" }, { step: "4" }];
}

export default Router;
