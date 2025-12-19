import { Metadata } from "next";
import MeetClient from "./meetclient";

export const metadata: Metadata = {
  title: "Join Virtual Meeting | SRIYOG Consulting",
  description: "Join our virtual meetings and discussions at SRIYOG Consulting.",
};

export default function MeetPage() {
  return <MeetClient />;
}
