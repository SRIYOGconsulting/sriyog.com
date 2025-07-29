import Ribbon from "@/components/Ribbon";
import Image from "next/image";
import Link from "next/link";
export default function ConsultingSiglePage() {
  const services = [
    {
      id: 1,
      title: "Website & App Development",
      image: "/assets/images/about/noimage.png",
    },
    {
      id: 2,
      title: "IT Consulting",
      image: "/assets/images/about/noimage.png",
    },
    {
      id: 3,
      title: "Cloud Services",
      image: "/assets/images/about/noimage.png",
    },
  ];

  const pricingPlans = [
    {
      id: 1,
      title: "Silver Plan",
      user: "Perfect for begineers",
      price: 75,
      desc: ["24/7 Gym Access", "Access to 4 Classes/Week"],
      bestValue: false,
    },
    {
      id: 2,
      title: "Golden Plan",
      user: "For Serious Enthusiasts",
      price: 75,
      desc: [
        "24/7 Gym Access",
        "Unlimited Access to Classes",
        "Access to Exclusive Blog Content",
        "Access to Challenges",
      ],
      bestValue: true,
    },

    {
      id: 3,
      title: "Platinium Plan",
      user: "When Only The Best Will Do",
      price: 150,
      desc: [
        "24/7 Gym Access",
        "Unlimited Access to Classes",
        "Access to Exclusive Blog Content",
        "Access to Challenges",
        "Access to Our Gym Forum",
        "1 Personal Training Session/Week",
      ],
      bestValue: false,
    },
  ];

  const relatedBlogs = [
    {
      id: 1,
      image: "/assets/images/about/noimage.png",
      title: "Website & App Development",
      desc: "Startup IT solutions refer to a range of technology services and products specifically designed ",
    },
    {
      id: 2,
      image: "/assets/images/about/noimage.png",
      title: "IT Consulting",
      desc: "Startup IT solutions refer to a range of technology services and products specifically designed ",
    },
    {
      id: 3,
      image: "/assets/images/about/noimage.png",
      title: "Cloud Services",
      desc: "Startup IT solutions refer to a range of technology services and products specifically designed ",
    },
    {
      id: 4,
      image: "/assets/images/about/noimage.png",
      title: "Website & App Development",
      desc: "Startup IT solutions refer to a range of technology services and products specifically designed ",
    },
    {
      id: 5,
      image: "/assets/images/about/noimage.png",
      title: "IT Consulting",
      desc: "Startup IT solutions refer to a range of technology services and products specifically designed ",
    },
    {
      id: 6,
      image: "/assets/images/about/noimage.png",
      title: "Cloud Services",
      desc: "Startup IT solutions refer to a range of technology services and products specifically designed ",
    },
  ];
  return (
    <>
      <Ribbon
        name="Startup  IT Solutions"
        des="Dedicated Solutions of Your Startup Growth"
      />
      <section className="max-w-[1180px] mx-auto mb-[45px]  px-6 lg:px-0 ">
        <Image
          src="/assets/images/about/noimage.png"
          width={1140}
          height={597}
          alt="top_image"
          className=" border-1 border-blue-50 mb-[45px] rounded-[15px]"
        />
        <h1 className="font-extrabold text-[34px] text-center">
          Startup IT Solutions
        </h1>
        <p className="text-center text-[16px] mb-[45px]">
          Dedicated Solutions of Your Startup Growth
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-8 mb-[45px]">
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
        </div>

        <div className="max-w-[1180px] mx-auto text-[15px] text-justify leading-[23px] flex flex-col gap-4">
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

          <p>
            Cybersecurity measures ensure data protection and secure access,
            while DevOps and automation tools streamline deployment and reduce
            development time. IT consulting helps startups choose the right
            technology stack and develop a strategic roadmap. In addition,
            startup IT solutions often include the integration of essential
            business software like CRMs, ERPs, and HR tools, along with ongoing
            maintenance and technical support.{" "}
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
      <section className="max-w-[1180px] mx-auto  mb-[45px] flex flex-col-reverse sm:flex-row gap4 items-center gap-8 px-6 lg:px-0">
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
      </section>

      {/*FAQ */}
      <section className="max-w-[1180px] mx-auto mb-[45px] px-6 lg:px-0 ">
        {/* Section Title */}
        <h2 className="text-center text-3xl md:text-4xl  mb-12 font-[800] ">
          FAQ
        </h2>
        <p className="text-center text-sm  text-gray-800 -mt-5 mb-3">Here are some of the SRIYOG frequently asked questions</p>

        <div className="flex flex-col md:flex-row  gap-10 items-stretch">

          <div className="w-full lg:w-3/5 flex flex-col gap-8 mt-6" >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="relative flex items-start gap-5 group">
                <div className="w-10 h-10 flex items-center justify-center bg-[#055D59] text-white font-bold rounded-full mt-1 shrink-0">
                  {i + 1}
                </div>
                {i !== 2 && (
                  <div className="absolute left-[19px] top-16 h-[60px] w-[2px] bg-[#d1d5db]" />
                )}

                <div className="-mt-4">
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    Step {i + 1} Title
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae pariatur iste necessitatibus delectus dolorem a
                    itaque quaerat recusandae modi quia numquam impedit,
                    asperiores facere voluptates.
                  </p>
                  <Link href={""} className="text-blue-500 font-[700] text-sm">Read More</Link>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-3/5 flex flex-col gap-8 mt-6" >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="relative flex items-start gap-5 group">
                <div className="w-10 h-10 flex items-center justify-center bg-[#055D59] text-white font-bold rounded-full mt-1 shrink-0">
                  {i + 1}
                </div>
                {i !== 2 && (
                  <div className="absolute left-[19px] top-16 h-[60px] w-[2px] bg-[#d1d5db]" />
                )}

                <div className="-mt-4">
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    Step {i + 1} Title
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae pariatur iste necessitatibus delectus dolorem a
                    itaque quaerat recusandae modi quia numquam impedit,
                    asperiores facere voluptates.
                  </p>
                  <Link href={""} className="text-blue-500 font-[700] text-sm">Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Pricing */}

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
      </section>

      {/* Related Blog Section */}
      <section className="max-w-[1180px] mx-auto mb-[45px] px-6 lg:px-0">
        <h1 className="text-center text-xl font-[800] ">Related Blogs</h1>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-between items-center mt-8 mb-[45px]">
          {
            relatedBlogs.map((blog)=>(
              <div key={blog.id} className="w-full sm:max-w-[316px] h-auto flex flex-col  gap-1 ">
                <Image
                src={blog.image}
                width={316}
                height={195}
                alt={blog.title}
                className="w-full h-auto rounded-[15px]  mb-2 border-2 border-gray-600"
                />

                <h1 className="font-[900] text-center ">{blog.title}</h1>
                <p className="text-sm">{blog.desc}</p>
                <Link href={''} className="hover:underline font-[800] text-sm">Read more...</Link>
              </div>
            ))
          }
        </div>
      </section>
    </>
  );
}
