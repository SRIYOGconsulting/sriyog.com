"use client"
import Ribbon from "@/components/Ribbon";
import Image from "next/image";
import Link from "next/link";
import relatedConsulting, { ConsultingItem } from "@/src/data/relatedconsulting";
import { useEffect, useState } from "react";

export default function BusinessEmail() {
  const [data, setData] = useState<ConsultingItem[]>([]);

  useEffect(() => {
    const filtered = relatedConsulting.filter(
      (item) => item.main === "Business Email"
    );
    setData(filtered);
  }, []);

  const consulting = [
    {
      img: "/assets/images/consultingPage/data-processing.jpg",
      title: "Data Processing",
      desc: "We have a proven track record of delivering high-quality data analysis and reporting solutions that meet the needs of our clients.",
      link: "data-processing",
    },
    {
      img: "/assets/images/consultingPage/database-management.jpg",
      title: "Database Management",
      desc: "We offer a range of database management services, including database design, implementation, and optimization.",
      link: "data-management",
    },
    {
      img: "/assets/images/consultingPage/data-analysis.jpg",
      title: "Data Analysis",
      desc: "Our team of experienced data analysts can help you extract insights from your data and make data-driven decisions.",
      link: "data-analysis",
    },
    {
      img: "/assets/images/consultingPage/software-development.jpg",
      title: "Software Development",
      desc: "We offer a range of software development services, including coding, testing, and debugging.",
      link: "software-development",
    },
    {
      img: "/assets/images/consultingPage/web-application-development.jpg",
      title: "Web Application Development",
      desc: "We offer a range of web application development services, including design, development, and deployment.",
      link: "web-application-development",
    },
    {
      img: "/assets/images/consultingPage/payment-processing.jpg",
      title: "Payment Processing",
      desc: "Our team of experienced developers can help you build high-quality payment processing solutions that meet your business needs.",
      link: "payment-processing",
    },
    {
      img: "/assets/images/consultingPage/survey-form-development.jpg",
      title: "Survey Form Development",
      desc: "We offer a range of survey form development services, including survey creation, data collection, and analysis.",
      link: "survey-form-development",
    },
    {
      img: "/assets/images/consultingPage/digital-marketing.jpg",
      title: "Digital Marketing",
      desc: "We offer a range of digital marketing services, including SEO, social media management, and content creation.",
      link: "digital-marketing",
    },
    {
      img: "/assets/images/consultingPage/seo-sem-services.jpg",
      title: "SEO/SEM Services",
      desc: `Our team of experienced SEO experts can help you improve your website's visibility and drive more traffic to your site.`,
      link: "seo-sem-services",
    },
    {
      img: "/assets/images/consultingPage/social-media-management.jpg",
      title: "Social Media Management",
      desc: "Our team of experienced marketers can help you build high-quality social media campaigns that drive traffic and engagement.",
      link: "social-media-management",
    },
    {
      img: "/assets/images/consultingPage/business-email.jpg",
      title: "Business Email",
      desc: "Our team of experienced marketers can help you build high-quality business eMail campaigns that drive traffic and engagement.",
      link: "business-email",
    },
    {
      img: "/assets/images/consultingPage/human-resource-management.jpg",
      title: "Human Resource Management",
      desc: "We offer a range of human resource management services, including recruitment, onboarding, and performance management.",
      link: "human-resource-management",
    },
    {
      img: "/assets/images/consultingPage/it-consultancy-management.jpg",
      title: "IT Consultancy Management",
      desc: "We offer a range of IT consultancy services, including system design, implementation, and support.",
      link: "IT-consultancy-management",
    },
    {
      img: "/assets/images/consultingPage/UI-UX.jpg",
      title: "UI/UX Designing",
      desc: "We offer a range of UI/ UX designing services, including wireframing, prototyping, and user testing.",
      link: "ui-ux-designing",
    },
    {
      img: "/assets/images/consultingPage/video-content-email-marketing.jpg",
      title: "Video/Content/Email Marketing",
      desc: "We offer a range of video / email / content marketing services, including video creation, email marketing, and content creation.",
      link: "video-content-email",
    },
  ];

  return (
    <>
      <Ribbon name="Business Email" des="" />
      <section className="max-w-[1180px] mx-auto mb-[45px]  px-6 lg:px-0 ">
        <Image
          src="/assets/images/consultingPage/business-email.jpg"
          width={1140}
          height={597}
          alt="top_image"
          className=" border-1 border-blue-50 mb-[45px] rounded-[15px]"
        />
        <h1 className="font-extrabold text-[34px] text-center">
          Business Email
        </h1>
        <p className="text-center text-[16px] mb-[45px]">
          Our services include everything from list segmentation and campaign
          strategy to email design, content creation, and performance tracking.
        </p>

        <div className="max-w-[1180px] mx-auto text-[15px] text-justify leading-[23px] flex flex-col gap-4">
          <p>
            Our business email marketing services are designed to help you
            connect with your audience in a personal, professional, and
            impactful way. Whether you&apos;re reaching out to existing customers or
            nurturing leads, we craft tailored email campaigns that drive
            engagement, build trust, and encourage action. Our services include
            everything from list segmentation and campaign strategy to email
            design, content creation, and performance tracking. We utilize
            industry-leading platforms to ensure your emails are delivered
            successfully and comply with privacy regulations such as GDPR and
            CAN-SPAM.{" "}
          </p>

          <p>
            From promotional blasts and newsletters to automated drip campaigns,
            we help you maintain consistent communication that adds value and
            reinforces your brand. Every email is designed to be
            mobile-friendly, visually appealing, and optimized for high open and
            click-through rates. With ongoing A/B testing and analytics, we
            continuously refine our approach to maximize your results and help
            your business stay top-of-mind with your audience.{" "}
          </p>
        </div>
      </section>

      {/*FAQ */}
      <section className="max-w-[1180px] mx-auto mb-[45px] px-6 lg:px-0">
        <h2 className="text-center text-3xl md:text-4xl mb-3 font-extrabold">FAQ</h2>
        <p className="text-center text-sm text-gray-800 mb-8">
          Here are some of the Business Email frequently asked questions
        </p>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {[
              {
                question: "What services are included in your business email marketing?",
                answer:
                  "We provide list segmentation, campaign strategy, email design, content creation, and performance tracking.",
              },
              {
                question: "How do your email campaigns drive engagement?",
                answer:
                  "We craft tailored campaigns that build trust and encourage action through personalized, professional communication.",
              },
              {
                question: "Do you ensure email compliance?",
                answer:
                  "Yes, we utilize industry-leading platforms and ensure compliance with GDPR and CAN-SPAM regulations.",
              },
            ].map((faq, i) => (
              <div key={i} className="relative flex items-start gap-5 group">
                <div className="w-10 h-10 flex items-center justify-center bg-[#055D59] text-white font-bold rounded-full mt-1 shrink-0">
                  <Image
                    src="/assets/images/consulting/target.svg"
                    alt={`FAQ ${i + 1}`}
                    width={40}
                    height={40}
                  />
                </div>
                {i !== 2 && (
                  <div className="absolute left-[19px] top-12 h-[50px] w-[2px] bg-gray-300" />
                )}
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">{faq.question}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {[
              {
                question: "What types of email campaigns do you offer?",
                answer:
                  "We handle promotional blasts, newsletters, and automated drip campaigns to maintain consistent communication.",
              },
              {
                question: "Are your emails mobile-friendly?",
                answer:
                  "Yes, every email is designed to be mobile-friendly, visually appealing, and optimized for high engagement rates.",
              },
              {
                question: "How do you optimize email performance?",
                answer:
                  "We use ongoing A/B testing and analytics to continuously refine our approach and maximize results.",
              },
              {
                question: "What is the goal of your email marketing services?",
                answer:
                  "Our goal is to help your business stay top-of-mind with your audience through valuable, consistent communication.",
              },
            ].map((faq, i) => (
              <div key={i} className="relative flex items-start gap-5 group">
                <div className="w-10 h-10 flex items-center justify-center bg-[#055D59] text-white font-bold rounded-full mt-1 shrink-0">
                  <Image
                    src="/assets/images/consulting/target.svg"
                    alt={`FAQ ${i + 4}`}
                    width={40}
                    height={40}
                  />
                </div>
                {i !== 3 && (
                  <div className="absolute left-[19px] top-12 h-[50px] w-[2px] bg-gray-300" />
                )}
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">{faq.question}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Consulting Section */}
      <section className="max-w-[1180px] mx-auto mb-[45px] px-6 lg:px-0">
        <h1 className="text-center text-xl font-[800]">Related Consulting</h1>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-between items-center mt-8 mb-[80px]">
          {consulting
            .filter((item) => data[0]?.related.includes(item.title))
            .slice(0, 6)
            .map((blog) => (
              <div
                key={blog.title}
                className="w-full sm:max-w-[316px] h-auto flex flex-col gap-1 mb-6"
              >
                <Link
                  href={`/consulting/${blog.link}`}
                  className="hover:underline font-[800] text-sm"
                >
                  <Image
                    src={blog.img}
                    width={316}
                    height={195}
                    alt={blog.title}
                    className="w-full h-auto rounded-[15px] mb-2 "
                  />
                </Link>

                <h1 className="font-[900] text-center">{blog.title}</h1>
                <p className="text-sm">{blog.desc}</p>

                <Link
                  href={`/consulting/${blog.link}`}
                  className="text-center mt-2 w-[35%] px-5 py-2 text-sm border border-[#055D59] text-[#055D59] hover:bg-[#055D59] hover:text-white rounded-[8px] transition"
                >
                  Read More
                </Link>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
