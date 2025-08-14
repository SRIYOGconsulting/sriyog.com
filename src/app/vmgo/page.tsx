import { Metadata } from "next";
import Vmgo from "./vmgo";
export const metadata: Metadata = {
  title: "VMGO | IT Consulting Company in Nepal",
}
export default async function VMGOPage() {
  return (
    <>
    <Vmgo/>
    </>
  );
}
