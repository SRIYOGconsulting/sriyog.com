import { Metadata } from "next";
import Vmgo from "./vmgo";
export const metadata: Metadata = {
  title: "Vision | IT Consulting Company in Nepal",
}
export default async function VMGOPage() {
  return (
    <>
    <Vmgo/>
    </>
  );
}
