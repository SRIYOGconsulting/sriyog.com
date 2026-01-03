import { Metadata } from "next";
import Vmgo from "./vmgo";
export const metadata: Metadata = {
  title: "VMGO | IT Consulting Company in Nepal",
  description: "VMGO is a leading IT consulting company in Nepal.",
  openGraph: {
    title: "VMGO | IT Consulting Company in Nepal",
    description: "VMGO is a leading IT consulting company in Nepal.",
    url: "https://www.sriyog.com/vmgo",
    images: [
      {
        url: "https://sriyog.com/og/default.jpg",
        alt: "VMGO"
      }
    ]
  }
}
export default async function VMGOPage() {
  return (
    <>
    <Vmgo/>
    </>
  );
}
