import PaymentProcessing from "@/components/consulting/PaymentPrcessing";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Payment Processing | SRIYOG Consulting",
  description: "Streamline your payment processing with SRIYOG Consulting's expert solutions.",
  openGraph: {
    title: "Payment Processing | SRIYOG Consulting",
    description: "Streamline your payment processing with SRIYOG Consulting's expert solutions.",
    url: "https://www.sriyog.com/consulting/payment-processing",
    images: [
      {
        url: "/assets/images/og/default.jpg",
        alt: "Payment Processing"
      }
    ]
  }
};
export default function PaymentProcessingPage() {

  return (
<>
<PaymentProcessing/>
</>
  );
}
