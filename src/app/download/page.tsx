import Download from "@/components/Download";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download | SRIYOG Consulting",
};

export default function DownloadPage() {
  return (
    <>
      <Download />
    </>
  );
}
