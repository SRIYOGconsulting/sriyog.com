"use client";
import Ribbon from "@/components/Ribbon";
import relatedConsulting, {
  ConsultingItem,
} from "@/src/data/relatedconsulting";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: "Video Content Marketing | SRIYOG Consulting",
};
export default function VideoContentEmail() {
  const [data, setData] = useState<ConsultingItem[]>([]);
  useEffect(() => {
    const filtered = relatedConsulting.filter(
      (item) => item.main === "Video/ Content/ Email Marketing"
    );
    setData(filtered);
  }, []);
  //       id: 1,
  //       title: "Website & App Development",
  //       image: "/about/noimage.png",
  //     },
  //     {
  //       id: 2,
  //       title: "IT Consulting",
  //       image: "/about/noimage.png",
  //     },
  //     {
  //       id: 3,
  //       title: "Cloud Services",
  //       image: "/about/noimage.png",
  //     },
  //   ];

  //   const pricingPlans = [
  //     {
  //       id: 1,
  //       title: "Silver Plan",
  //       user: "Perfect for begineers",
  //       price: 75,
  //       desc: ["24/7 Gym Access", "Access to 4 Classes/Week"],
  //       bestValue: false,
  //     },
  //     {
  //       id: 2,
  //       title: "Golden Plan",
  //       user: "For Serious Enthusiasts",
  //       price: 75,
  //       desc: [
  //         "24/7 Gym Access",
  //         "Unlimited Access to Classes",
  //         "Access to Exclusive Blog Content",
  //         "Access to Challenges",
  //       ],
  //       bestValue: true,
  //     },

  //     {
  //       id: 3,
  //       title: "Platinium Plan",
  //       user: "When Only The Best Will Do",
  //       price: 150,
  //       desc: [
  //         "24/7 Gym Access",
  //         "Unlimited Access to Classes",
  //         "Access to Exclusive Blog Content",
  //         "Access to Challenges",
  //         "Access to Our Gym Forum",
  //         "1 Personal Training Session/Week",
  //       ],
  //       bestValue: false,
  //     },
  //   ];

  const consulting = [
    {
      img: "/consultingPage/data-processing.jpg",
      title: "Data Processing",
      desc: "We have a proven track record of delivering high-quality data analysis and reporting solutions that meet the needs of our clients.",
      link: "data-processing",
    },
    {
      img: "/consultingPage/database-management.jpg",
      title: "Data Management",
      desc: "We offer a range of database management services, including database design, implementation, and optimization.",
      link: "data-management",
    },
    {
      img: "/consultingPage/data-analysis.jpg",
      title: "Data Analysis",
      desc: "Our team of experienced data analysts can help you extract insights from your data and make data-driven decisions.",
      link: "data-analysis",
    },
    {
      img: "/consultingPage/software-development.jpg",
      title: "Software Development",
      desc: "We offer a range of software development services, including coding, testing, and debugging.",
      link: "software-development",
    },
    {
      img: "/consultingPage/web-application-development.jpg",
      title: "Web Application Development",
      desc: "We offer a range of web application development services, including design, development, and deployment.",
      link: "web-application-development",
    },
    {
      img: "/consultingPage/payment-processing.jpg",
      title: "Payment Processing",
      desc: "Our team of experienced developers can help you build high-quality payment processing solutions that meet your business needs.",
      link: "payment-processing",
    },
    {
      img: "/consultingPage/survey-form-development.jpg",
      title: "Survey Form Development",
      desc: "We offer a range of survey form development services, including survey creation, data collection, and analysis.",
      link: "survey-form-development",
    },
    {
      img: "/consultingPage/digital-marketing.jpg",
      title: "Digital Marketing",
      desc: "We offer a range of digital marketing services, including SEO, social media management, and content creation.",
      link: "digital-marketing",
    },
    {
      img: "/consultingPage/seo-sem-services.jpg",
      title: "SEO/SEM Services",
      desc: `Our team of experienced SEO experts can help you improve your website's visibility and drive more traffic to your site.`,
      link: "seo-sem-services",
    },
    {
      img: "/consultingPage/social-media-management.jpg",
      title: "Social Media Management",
      desc: "Our team of experienced marketers can help you build high-quality social media campaigns that drive traffic and engagement.",
      link: "social-media-management",
    },
    {
      img: "/consultingPage/business-email.jpg",
      title: "Business Email",
      desc: "Our team of experienced marketers can help you build high-quality Business eMail campaigns that drive traffic and engagement.",
      link: "business-email",
    },
    {
      img: "/consultingPage/human-resource-management.jpg",
      title: "Human Resource Management",
      desc: "We offer a range of human resource management services, including recruitment, onboarding, and performance management.",
      link: "human-resource-management",
    },
    {
      img: "/consultingPage/it-consultancy-management.jpg",
      title: "IT Consulting",
      desc: "We offer a range of IT consultancy services, including system design, implementation, and support.",
      link: "it-consulting",
    },
    {
      img: "/consultingPage/UI-UX.jpg",
      title: "UI/UX Designing",
      desc: "We offer a range of UI/ UX designing services, including wireframing, prototyping, and user testing.",
      link: "uiux-designing",
    },
    {
      img: "/consultingPage/video-content-email-marketing.jpg",
      title: "Video/ Content/ Email Marketing",
      desc: "We offer a range of video / email / content marketing services, including video creation, email marketing, and content creation.",
      link: "video-content-email",
    },
  ];
  return (
    <>
      <Ribbon name="Video/ Content/ Email Marketing" des="" />
      <section className="max-w-[1180px] mx-auto mb-[45px]  px-6 lg:px-0 ">
        <Image
          src="/consultingPage/video-content-email-marketing.jpg"
          width={1140}
          height={597}
          alt="top_image"
          className=" border-1 border-blue-50 mb-[45px] rounded-[15px]"
        />
        <h1 className="font-extrabold text-[34px] text-center">
          Video/ Content/ Email Marketing
        </h1>
        <p className="text-center text-[16px] mb-[45px]">
          We create content that resonates with your target audience and drives
          results. Our video marketing services include scripting, shooting,
          editing, and animation.
        </p>
        {/* <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-8 mb-[45px]">
          {services.map((service) => (
            <div
              className=" w-full sm:max-w-[316px] h-auto flex flex-col items-center gap-2 border-1 "
              key={service.id}
            >
              <Image
                src={service.image}
                width={316}
                height={195}
                alt={service.title}
                className="w-full  rounded-[15px] border-2 border-gray-600"
              />
              <h1>{service.title}</h1>
            </div>
          ))}
        </div> */}

        <div className="max-w-[1180px] mx-auto text-[15px] text-justify leading-[23px] flex flex-col gap-4">
          <p>
            We offer a powerful combination of video, content, and email
            marketing services designed to elevate your brand&apos;s
            communication strategy. From engaging videos and insightful blog
            posts to high-converting email campaigns, we create content that
            resonates with your target audience and drives results. Our video
            marketing services include scripting, shooting, editing, and
            animation, perfect for explainer videos, testimonials, or social
            media campaigns. In content marketing, we focus on SEO-optimized
            articles, product descriptions, and thought leadership pieces that
            enhance visibility and authority.{" "}
          </p>

          <p>
            For email marketing, we handle campaign planning, list management,
            and performance analysis to ensure consistent, effective outreach.
            Each element of our marketing strategy is driven by data and crafted
            to support lead generation, customer retention, and brand awareness.
            Whether used individually or together, our marketing services
            provide a cohesive approach that boosts engagement and aligns with
            your broader digital goals.{" "}
          </p>
        </div>
      </section>

      {/*Testomonial */}
      {/* <section className="max-w-[1180px] mx-auto  mb-[45px] flex flex-col-reverse sm:flex-row gap4 items-center gap-8 px-6 lg:px-0">
        <div className="flex flex-col text-[15px] leading-[23px] w-full sm:max-w-[60%]  text-justify px-">
          <h1 className="font-extrabold">Testimonials</h1>
          <p>
            Startup IT solutions refer to a range of technology services and
            products specifically designed to support early-stage businesses in
            building, launching, and scaling their operations. These solutions
            address the unique challenges startups often face, such as limited
            budgets, fast-paced growth, and the need for flexibility. Common
            offerings include website and mobile app development, especially
            focused on creating Minimum Viable Products (MVPs) to quickly test
            and validate ideas. Cloud services provide scalable infrastructure,
            allowing startups to expand without heavy upfront investment.{" "}
          </p>

          <p className="mt-6">
            Cybersecurity measures ensure data protection and secure access,
            while DevOps and automation tools streamline deployment and reduce
            development time.{" "}
          </p>

          <p>
            <span className="font-bold">Rajesh Thapa, MD.</span> Kisanpedia
            Services Pvt. Ltd.{" "}
          </p>
        </div>

        <div className=" w-full sm:max-w-[40%] flex items-center justify-center ">
          <Image
            src={"/singlepage/11.png"}
            width={329}
            height={362.64}
            alt="Testimonail_image"
            className="w-[70%] md:max-w-full"
          />
        </div>
      </section> */}

      {/*FAQ */}
      <section className="max-w-[1180px] mx-auto mb-[45px] px-6 lg:px-0">
        {/* Section Title */}
        <h2 className="text-center text-3xl md:text-4xl mb-3 font-extrabold">
          FAQ
        </h2>
        <p className="text-center text-sm text-gray-800 mb-8">
          Here are some of the Video-Content-Email Marketing frequently asked
          questions
        </p>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Column 1 */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {[
              {
                question:
                  "What services are included in your Video/ Content/ Email Marketing?",
                answer:
                  "We offer video production (scripting, shooting, editing, animation), SEO-optimized content creation (articles, product descriptions, thought leadership), and email marketing (campaign planning, list management, performance analysis).",
              },
              {
                question:
                  "How do your video marketing services help businesses?",
                answer:
                  "Our video marketing services create engaging videos such as explainer videos, testimonials, and social media campaigns to enhance your brand's communication.",
              },
              {
                question:
                  "What kind of content do you create for content marketing?",
                answer:
                  "We focus on SEO-optimized articles, product descriptions, and thought leadership pieces to boost your visibility and authority.",
              },
            ].map((faq, i) => (
              <div key={i} className="relative flex items-start gap-5 group">
                <div className="w-10 h-10 flex items-center justify-center bg-[#055D59] text-white font-bold rounded-full mt-1 shrink-0">
                  <Image
                    src="/consulting/target.svg"
                    alt={`FAQ ${i + 1}`}
                    width={40}
                    height={40}
                  />
                </div>
                {i !== 2 && (
                  <div className="absolute left-[19px] top-12 h-[50px] w-[2px] bg-gray-300" />
                )}
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {[
              {
                question:
                  "How do you ensure effective email marketing campaigns?",
                answer:
                  "We manage campaign planning, list segmentation, and performance analysis to deliver consistent, impactful email outreach.",
              },
              {
                question: "How do you tailor your marketing strategies?",
                answer:
                  "Each strategy is data-driven and designed to support lead generation, customer retention, and brand awareness.",
              },
              {
                question:
                  "Can these marketing services be used individually or together?",
                answer:
                  "Yes, our services can be combined or used independently to provide a cohesive and effective marketing approach.",
              },
              {
                question:
                  "What is the ultimate goal of your marketing services?",
                answer:
                  "To elevate your brand’s communication and create content that resonates with your audience, driving measurable results.",
              },
            ].map((faq, i) => (
              <div key={i} className="relative flex items-start gap-5 group">
                <div className="w-10 h-10 flex items-center justify-center bg-[#055D59] text-white font-bold rounded-full mt-1 shrink-0">
                  <Image
                    src="/consulting/target.svg"
                    alt={`FAQ ${i + 4}`}
                    width={40}
                    height={40}
                  />
                </div>
                {i !== 3 && (
                  <div className="absolute left-[19px] top-12 h-[50px] w-[2px] bg-gray-300" />
                )}
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Pricing */}

      {/* <section className="max-w-[1180px] mx-auto mb-[45px] px-6 lg:px-0 mt-[45px]">
        <h1 className="font-[800] text-[24px] text-center mb-6">
          Choose your pricing plans
        </h1>

        <div className="flex flex-col md:flex-row gap-10 items-center justify-center mb-8  md:gap-5">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="w-full sm:max-w-[316px] h-[600px] flex flex-col items-center py-5 gap-2 shadow-xl shadow-t-2xl  rounded-[15px] border border-gray-50"
            >
              <h2 className="font-[800] text-2xl text-gray-700 ">
                {plan.title}
              </h2>
              <div className="relative flex flex-col items-center justify-center  rounded-[15px] p-4 gap-2">
                <p className="absolute top-3 left-4">$</p>
                <p className="text-5xl font-extrabold">{plan.price}</p>
                <p className="text-[15px] text-gray-600 -mt-2">Every Month</p>
                <p>{plan.user}</p>
              </div>

              <Link
                href=""
                className={`${
                  plan.bestValue ? "bg-pink-800" : "bg-blue-950"
                } text-white w-[70%] py-1.5 text-center rounded-lg font-[700] mt-14 `}
              >
                Buy Now
              </Link>

              <div
                className={`flex flex-col gap-2 mb-4 border-t border-gray-300 pt-4 w-[90%] mx-auto mt-10 h-full px-10 `}
              >
                {plan.desc.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Image
                      src="/singlepage/correct-success.svg"
                      width={15}
                      height={15}
                      alt="Check"
                    />
                    <p className="text-sm text-gray-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Related Blog Section */}
      <section className="max-w-[1180px] mx-auto mb-[45px] px-6 lg:px-0">
        <h1 className="text-center text-xl font-[800]">Related Consulting</h1>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-between items-center mt-8 mb-[80px]">
          {consulting
            .filter((item) => data[0]?.related.includes(item.title)) // Exclude current
            .slice(0, 6) // Only show 6
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
