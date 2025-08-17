import Refer from "@/components/Refer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refer a Client | SRIYOG Consulting",
};
export default function ReferPage() {
  return (
    <>
      <Refer/>
    </>
  );
}
