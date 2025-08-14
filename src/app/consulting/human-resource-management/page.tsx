import ResourceManagement from "@/components/consulting/HumanResourceManagement";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Human Resource Management | SRIYOG Consulting",
};
export default function HumanResourceManagement() {

  return (
    <>
      <ResourceManagement/>
    </>
  );
}
