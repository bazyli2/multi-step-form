import { Router } from "@/modules/multi-step-form/Router";

export async function generateStaticParams() {
  return [{ step: "1" }, { step: "2" }, { step: "3" }];
}

export default Router;
