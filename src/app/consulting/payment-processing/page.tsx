import PaymentPrcessing from "./PaymentPrcessing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Processing | SRIYOG Consulting",
  description: "Expert payment processing services from SRIYOG Consulting.",
  openGraph: {
    title: "Payment Processing | SRIYOG Consulting",
    description: "Expert payment processing services from SRIYOG Consulting.",
    url: "https://www.sriyog.com/consulting/payment-processing",
    images: [
      {
        url: "https://sriyog.com/og/default.jpg",
        alt: "Payment Processing"
      }
    ]
  }
};

export default function Page() {
  return <PaymentPrcessing />;
}
