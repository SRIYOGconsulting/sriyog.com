import Ribbon from "@/components/Ribbon";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Database Management | SRIYOG Consulting",
};

export default function DataManagement() {
  // const services = [
  //   {
  //     id: 1,
  //     title: "Website & App Development",
  //     image: "/assets/images/about/noimage.png",
  //   },
  //   {
  //     id: 2,
  //     title: "IT Consulting",
  //     image: "/assets/images/about/noimage.png",
  //   },
  //   {
  //     id: 3,
  //     title: "Cloud Services",
  //     image: "/assets/images/about/noimage.png",
  //   },
  // ];

  // const pricingPlans = [
  //   {
  //     id: 1,
  //     title: "Silver Plan",
  //     user: "Perfect for begineers",
  //     price: 75,
  //     desc: ["24/7 Gym Access", "Access to 4 Classes/Week"],
  //     bestValue: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Golden Plan",
  //     user: "For Serious Enthusiasts",
  //     price: 75,
  //     desc: [
  //       "24/7 Gym Access",
  //       "Unlimited Access to Classes",
  //       "Access to Exclusive Blog Content",
  //       "Access to Challenges",
  //     ],
  //     bestValue: true,
  //   },

  //   {
  //     id: 3,
  //     title: "Platinium Plan",
  //     user: "When Only The Best Will Do",
  //     price: 150,
  //     desc: [
  //       "24/7 Gym Access",
  //       "Unlimited Access to Classes",
  //       "Access to Exclusive Blog Content",
  //       "Access to Challenges",
  //       "Access to Our Gym Forum",
  //       "1 Personal Training Session/Week",
  //     ],
  //     bestValue: false,
  //   },
  // ];

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
    title: "Business eMail",
    desc: "Our team of experienced marketers can help you build high-quality Business eMail campaigns that drive traffic and engagement.",
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
      <Ribbon
        name="Database Management"
        des=""
      />
      <section className="max-w-[1180px] mx-auto mb-[45px]  px-6 lg:px-0 ">
        <Image
          src="/assets/images/consultingPage/database-management.jpg"
          width={1140}
          height={597}
          alt="top_image"
          className=" border-1 border-blue-50 mb-[45px] rounded-[15px]"
        />
        <h1 className="font-extrabold text-[34px] text-center">
          Database Management
        </h1>
        <p className="text-center text-[16px] mb-[45px]">
          Deep understanding of your business needs and translate them into a
          scalable, efficient data structure.
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
            We offer a comprehensive range of database management services that
            ensure your data infrastructure is both efficient and secure. From
            initial database design to ongoing optimization and maintenance, our
            team is equipped to handle relational, NoSQL, and cloud-based
            databases. We begin with a deep understanding of your business needs
            and translate them into a scalable, efficient data structure. Our
            implementation process includes rigorous testing and performance
            tuning to ensure that databases perform well under all load
            conditions. We also provide robust monitoring, backup solutions, and
            disaster recovery planning. Whether you&apos;re building a new system or
            improving an existing one, our database services are designed to
            support data integrity, performance, and security. With a proactive
            approach to database management, we help reduce downtime, prevent
            data loss, and enhance system responsiveness — enabling your
            business to operate smoothly and respond to data demands in real
            time.{" "}
          </p>

          <p>
            UI/UX design services enhance user experience, and data analytics
            tools help track performance and user behavior. Together, these
            solutions enable startups to bring their ideas to market efficiently
            while focusing on their core business goals.
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
            src={"/assets/images/singlepage/11.png"}
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
          Here are some of the Database Management frequently asked questions
        </p>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Column 1 */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {[
              {
                question: "What types of databases do you manage?",
                answer:
                  "We manage relational, NoSQL, and cloud-based databases.",
              },
              {
                question: "How do you approach database design?",
                answer:
                  "We design scalable and efficient data structures tailored to your business needs.",
              },
              {
                question: "Do you provide performance tuning for databases?",
                answer:
                  "Yes, we conduct rigorous testing and performance tuning to optimize database efficiency.",
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
                question: "What maintenance services do you offer?",
                answer:
                  "We provide robust monitoring, backup solutions, and disaster recovery planning.",
              },
              {
                question: "How do you ensure data integrity and security?",
                answer:
                  "Our proactive management ensures data integrity, security, and optimal performance.",
              },
              {
                question: "Can you help improve existing database systems?",
                answer:
                  "Yes, we specialize in optimizing and enhancing existing database infrastructures.",
              },
              {
                question: "How does your database management reduce downtime?",
                answer:
                  "Our proactive approach minimizes downtime, prevents data loss, and improves system responsiveness.",
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
      {/* 
      <section className="max-w-[1180px] mx-auto mb-[45px] px-6 lg:px-0 mt-[45px]">
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
                      src="/assets/images/singlepage/correct-success.svg"
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
      .filter((item) => item.link !== "data-management") // Exclude current
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

        <Link href={`/consulting/${blog.link}`} className=" text-center mt-2 w-[35%] px-5 py-2 text-sm border border-[#055D59] text-[#055D59] hover:bg-[#055D59] hover:text-white rounded-[8px] transition"
              >Read More</Link>
        </div>
      ))}
  </div>
</section>
    </>
  );
}
