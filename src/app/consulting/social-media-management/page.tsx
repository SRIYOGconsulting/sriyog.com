import SocialMediaManagement from "@/components/consulting/SocialMediaManagement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Management | SRIYOG Consulting",
};
export default function page() {
  return (
    <>
      <SocialMediaManagement />
    </>
  );
}
