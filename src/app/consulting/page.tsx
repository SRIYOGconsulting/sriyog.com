import Ribbon from "@/components/Ribbon";
import Image from "next/image";
// import Link from "next/link";
export default function Consulting() {
  const consulting = [
    {
      img: "/assets/images/consulting/data-processing.svg",
      title: "Data Processing",
      desc: "We have a proven track record of delivering high-quality data analysis and reporting solutions that meet the needs of our clients.",
    },

    {
      img: "/assets/images/consulting/data-management.svg",
      title: "Database Management",
      desc: "We offer a range of database management services, including database design, implementation, and optimization.",
    },
    {
      img: "/assets/images/consulting/data-analysis.svg",
      title: "Data Analysis",
      desc: "Our team of experienced data analysts can help you extract insights from your data and make data-driven decisions.",
    },
    {
      img: "/assets/images/consulting/software.svg",
      title: "Software Development",
      desc: "We offer a range of software development services, including coding, testing, and debugging.",
    },
    {
      img: "/assets/images/consulting/web-application.svg",
      title: "Web Application Development",
      desc: "We offer a range of web application development services, including design, development, and deployment.",
    },
    {
      img: "/assets/images/consulting/payment.svg",
      title: "Payment Processing",
      desc: "Our team of experienced developers can help you build high-quality payment processing solutions that meet your business needs.",
    },
    {
      img: "/assets/images/consulting/survey.svg",
      title: "Survey Form Development",
      desc: "We offer a range of survey form development services, including survey creation, data collection, and analysis.",
    },
    {
      img: "/assets/images/consulting/digital-marketing.svg",
      title: "Digital Marketing",
      desc: "We offer a range of digital marketing services, including SEO, social media management, and content creation.",
    },
    {
      img: "/assets/images/consulting/seo.svg",
      title: "SEO/SEM Services",
      desc: `Our team of experienced SEO experts can help you improve your website's visibility and drive more traffic to your site.`,
    },
    {
      img: "/assets/images/consulting/social-media.svg",
      title: "Social Media Management",
      desc: "Our team of experienced marketers can help you build high-quality social media campaigns that drive traffic and engagement.",
    },
    {
      img: "/assets/images/consulting/business-email.svg",
      title: "Business Email",
      desc: "Our team of experienced marketers can help you build high-quality business eMail campaigns that drive traffic and engagement.",
    },
    {
      img: "/assets/images/consulting/human-resource.svg",
      title: "Human Resource Management",
      desc: "We offer a range of human resource management services, including recruitment, onboarding, and performance management.",
    },
    {
      img: "/assets/images/consulting/it-consulting.svg",
      title: "IT Consultancy Management",
      desc: "We offer a range of IT consultancy services, including system design, implementation, and support.",
    },
    {
      img: "/assets/images/consulting/ui-ux.svg",
      title: "UI/UX Designing",
      desc: "We offer a range of UI/ UX designing services, including wireframing, prototyping, and user testing.",
    },
    {
      img: "/assets/images/consulting/video-content.svg",
      title: "Video/Content/Email Marketing",
      desc: "We offer a range of video / email / content marketing services, including video creation, email marketing, and content creation.",
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
              className=" rounded-lg hover:-translate-y-4 transition duration-500 ease-in-out shadow-[0_.5rem_1rem_rgba(0,0,0,.15)]"
            >
              <div className=" p-12">
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
                <p className=" text-justify text-gray-700">{data.desc}</p>
                {/* <Link href={`/consulting/${data.title.split(" ").join("-")}`}>Read More</Link> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
