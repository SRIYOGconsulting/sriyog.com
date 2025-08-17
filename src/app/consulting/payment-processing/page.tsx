import PaymentProcessing from "@/components/consulting/PaymentPrcessing";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Payment Processing | SRIYOG Consulting",
};
export default function PaymentProcessingpage() {

  return (
<>
<PaymentProcessing/>
</>
  );
}
