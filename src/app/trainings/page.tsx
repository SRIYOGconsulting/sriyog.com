import Ribbon from "@/components/Ribbon";
import { trainings } from "@/src/data/trainings";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IT Training in Kathmandu, Nepal | SRIYOG Consulting",
  description: "",
  openGraph: {
    title:
      "IT Training in Kathmandu, Nepal | SRIYOG Consulting",
      description: "Explore our IT training programs in Kathmandu, Nepal.",
      url: "https://www.sriyog.com/trainings",
      images: [
        {
          url: "https://sriyog.com/og/default.jpg",
          alt: "IT Training in Kathmandu, Nepal"
        }
      ]
  },
};

export default function Trainings() {
  return (
    <>
      <Ribbon name="IT Training in Kathmandu, Nepal" des="" />
      <section className="max-w-[1180px] mx-auto px-6 lg:px-0 mb-[45px] mt-[45px] w-full">
<div className="text flex flex-col gap-5 mb-10">
          <h1 className="text-xl font-bold">Best Short Term IT Training Provider in Nepal</h1>
          <p>
            At SRIYOG Consulting, we offer training programs designed to go
            beyond classroom theory, giving you real-world, hands-on experience
            that prepares you for today’s competitive job market.With flexible learning options including Fast Track for quick skill
            acquisition, Normal Track for in-depth understanding, and both
            Virtual and Onsite training to match your convenience, our courses
            are tailored to your pace and style.{" "}
          </p>
          <p>
            Choose from a diverse range of skill-focused programs such as UI/UX
            Designing, Digital Marketing, Web Designing, Web Development,
            Digital Journalism, SEO/SEM, Social Media Management, Email
            Marketing, Express Computing, Digital Literacy, Cybersecurity, and
            Start Your Startup.Whether you’re starting your career, upgrading your skills, or
            launching your own business, our practical, project-based approach
            ensures you gain the knowledge and confidence to excel.
          </p>

          <p>
            Courses : UI/UX Designing, Digital Marketing, Web Designing, Web
            Development, Digital Journalism, SEO/SEM, Social Media Management,
            Email Marketing, Express Computing, Digital Literacy, Cybersecurity
            , Start Your Startup
          </p>
        </div>
      </section>
<section className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-0 mb-[45px] mt-[45px] w-full flex flex-wrap gap-4 justify-center sm:justify-between">
  {trainings.map((item) => (
    <div
      key={item.id}
      className="w-full sm:w-[316px] h-auto sm:h-[300px] flex flex-col gap-1 mb-6"
    >
      <Image
        src={item.image}
        width={400}
        height={400}
        alt={item.title}
        className="w-full rounded-[15px] h-[300px] sm:h-full object-cover"
      />
      <h1 className="text-center my-2">{item.title_Thumbnail}</h1>
      <Link
        href={`trainings/${item.path}`}
        className="px-2 py-1 border border-[#055D59] text-md text-[#055D59] hover:bg-[#055D59] hover:text-white w-[50%] sm:w-[50%] mx-auto text-center rounded-lg transition-all ease-in duration-[100]"
      >
        Browse More
      </Link>
    </div>
  ))}
</section>





    </>
  );
}
