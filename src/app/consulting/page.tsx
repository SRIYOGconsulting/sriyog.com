import Ribbon from "@/components/Ribbon";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata:Metadata = {
  title: "Consulting Services | SRIYOG Consulting",
  description: "Explore our range of consulting services designed to help your business thrive.",
  openGraph: {
    title: "Consulting Services | SRIYOG Consulting",
    description: "Explore our range of consulting services designed to help your business thrive.",
    url: "https://www.sriyog.com/consulting",
    images: [
      {
        url: "/https://sriyog.com/assets/images/og/default.jpg",
        alt: "Consulting Services"
      }
    ]
  }
}
export default function Consulting() {
  const consulting = [
    {
      img: "/assets/images/consulting/data-processing.svg",
      title: "Data Processing",
      desc: "We have a proven track record of delivering high-quality data analysis and reporting solutions that meet the needs of our clients.",
      link: "data-processing",
    },
    {
      img: "/assets/images/consulting/data-management.svg",
      title: "Database Management",
      desc: "We offer a range of database management services, including database design, implementation, and optimization.",
      link: "data-management",
    },
    {
      img: "/assets/images/consulting/data-analysis.svg",
      title: "Data Analysis",
      desc: "Our team of experienced data analysts can help you extract insights from your data and make data-driven decisions.",
      link: "data-analysis",
    },
    {
      img: "/assets/images/consulting/software.svg",
      title: "Software Development",
      desc: "We offer a range of software development services, including coding, testing, and debugging.",
      link: "software-development",
    },
    {
      img: "/assets/images/consulting/web-application.svg",
      title: "Web Application Development",
      desc: "We offer a range of web application development services, including design, development, and deployment.",
      link: "web-application-development",
    },
    {
      img: "/assets/images/consulting/payment.svg",
      title: "Payment Processing",
      desc: "Our team of experienced developers can help you build high-quality payment processing solutions that meet your business needs.",
      link: "payment-processing",
    },
    {
      img: "/assets/images/consulting/survey.svg",
      title: "Survey Form Development",
      desc: "We offer a range of survey form development services, including survey creation, data collection, and analysis.",
      link: "survey-form-development",
    },
    {
      img: "/assets/images/consulting/digital-marketing.svg",
      title: "Digital Marketing",
      desc: "We offer a range of digital marketing services, including SEO, social media management, and content creation.",
      link: "digital-marketing",
    },
    {
      img: "/assets/images/consulting/seo.svg",
      title: "SEO/SEM Services",
      desc: `Our team of experienced SEO experts can help you improve your website's visibility and drive more traffic to your site.`,
      link: "seo-sem-services",
    },
    {
      img: "/assets/images/consulting/social-media.svg",
      title: "Social Media Management",
      desc: "Our team of experienced marketers can help you build high-quality social media campaigns that drive traffic and engagement.",
      link: "social-media-management",
    },
    {
      img: "/assets/images/consulting/business-email.svg",
      title: "Business eMail",
      desc: "Our team of experienced marketers can help you build high-quality Business eMail campaigns that drive traffic and engagement.",
      link: "business-email",
    },
    {
      img: "/assets/images/consulting/human-resource.svg",
      title: "Human Resource Management",
      desc: "We offer a range of human resource management services, including recruitment, onboarding, and performance management.",
      link: "human-resource-management",
    },
    {
      img: "/assets/images/consulting/it-consulting.svg",
      title: "IT Consultancy Management",
      desc: "We offer a range of IT consultancy services, including system design, implementation, and support.",
      link: "it-consulting",
    },
    {
      img: "/assets/images/consulting/ui-ux.svg",
      title: "UI/UX Designing",
      desc: "We offer a range of UI/ UX designing services, including wireframing, prototyping, and user testing.",
      link: "ui-ux-designing",
    },
    {
      img: "/assets/images/consulting/video-content.svg",
      title: "Content/ Email Marketing",
      desc: "We offer a range of video / email / content marketing services, including video creation, email marketing, and content creation.",
      link: "video-content-email",
    },
  ];

  return (
    <>
      <Ribbon name="Consulting" des="" />

      <section className="mx-auto lg:w-[1180px] max-lg:container max-lg:px-3 mb-[45px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-content-between gap-10">
          {consulting.map((data, index) => (
            <div
              key={index + 1}
              className="h-full rounded-lg hover:-translate-y-4 transition duration-500 ease-in-out shadow-[0_.5rem_1rem_rgba(0,0,0,.15)]"
            >
              <div className="p-12 flex flex-col h-full">
                <div className="w-32 h-32 relative mx-auto mb-4">
                  <Image
                    src={data.img}
                    fill
                    alt={data.title}
                    className="mx-auto object-contain"
                  />
                </div>
                <h5 className="text-center text-[#4b4b4b] text-xl font-semibold mb-2">
                  {data.title}
                </h5>
                <p className="text-justify text-gray-700 mb-4">{data.desc}</p>
                <div className="mt-auto">
                  <Link
                    href={`/consulting/${data.link}`}
                    className="px-4 py-2 text-sm border border-[#055D59] text-[#055D59] hover:bg-[#055D59] hover:text-white rounded-[8px] transition"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
