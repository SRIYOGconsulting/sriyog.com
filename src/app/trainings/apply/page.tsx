import Ribbon from "@/components/Ribbon";
import TrainingApplyForm from "@/components/Training-Form";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Book a Training | Online & Onsite Courses Nepal",
  description: "Book your training sessions with SRIYOG Consulting.",
  openGraph: {
    title: "Book a Training | SRIYOG Consulting",
    description: "Book your training sessions with SRIYOG Consulting.",
    url: "https://www.sriyog.com/trainings/form",
    images: [
      {
        url: "https://sriyog.com/assets/images/og/default.jpg",
        alt: "Book a Training"
      }
    ]
  }
};
export default function TrainingForm() {
  return (
    <>
      <Ribbon name="Book a Training" des="" />
      <section className="lg:w-full mx-auto mb-[45px]">
        <TrainingApplyForm/>
      </section>
    </>
  );
}
