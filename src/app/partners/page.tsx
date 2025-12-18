import Ribbon from "@/components/Ribbon";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Partners | SRIYOG Consulting",
};
export default function Page() {
  const partner = [
    {
  name: "Khalti",
  des: "Khalti is Nepal's leading digital wallet and payment gateway, providing seamless online payment solutions since 2017. It enables users to make quick, secure transactions for utilities, e-commerce, and various services across Nepal.",
  img: "/assets/images/partners/1.jpg",
  path: "https://www.imepay.com.np/",
},
{
  name: "MAW-Skills-Academy",
  des: "MAW Skills Academy is an initiative by MAW Enterprises under its subsidiary MAW Earthmovers Pvt. Ltd. (MEPL), the authorized distributor of JCB and other premium brands in Nepal's heavy equipment sector since 1964.",
  img: "/assets/images/partners/2.jpeg",
  path: "https://www.mawacademy.com/",
},
{
  name: "Islington-College",
  des: "Islington College is a leading modern college in Nepal dedicated to academic excellence and practical-based education. With a long-standing history, it has nurtured numerous leaders and entrepreneurs.",
  img: "/assets/images/partners/3.svg",
  path: "https://islington.edu.np/",
},
{
  name: "Vercel",
  des: "Vercel is a cloud platform for frontend developers, providing the best developer experience with instant deployment, automatic scaling, and seamless integration with modern frameworks.",
  img: "/assets/images/partners/4.svg",
  path: "https://vercel.com/",
},
{
  name: "Digital-Ocean",
  des: "DigitalOcean is a cloud infrastructure provider that offers simple, affordable, and scalable cloud computing solutions for developers and businesses worldwide.",
  img: "/assets/images/partners/5.svg",
  path: "https://www.digitalocean.com/",
},
{
  name: "Google-Workspace",
  des: "Google Workspace is a collection of cloud computing, productivity and collaboration tools developed and marketed by Google, helping businesses communicate and work together efficiently.",
  img: "/assets/images/partners/6.svg",
  path: "https://workspace.google.com/",
},
{
  name: "Zoho",
  des: "Zoho Corporation is a software development company that provides web-based business tools and information technology solutions for businesses of all sizes.",
  img: "/assets/images/partners/7.svg",
  path: "https://www.zoho.com/",
},
{
  name: "Freshdesk",
  des: "Freshdesk is a cloud-based customer support software that helps businesses manage customer conversations across multiple channels with ease and efficiency.",
  img: "/assets/images/partners/8.svg",
  path: "https://freshdesk.com/",
},
{
  name: "GoDaddy",
  des: "GoDaddy is the world's largest domain registrar and web hosting company, providing tools and services to help businesses establish and grow their online presence.",
  img: "/assets/images/partners/9.svg",
  path: "https://www.godaddy.com/",
},
{
  name: "Tucows",
  des: "Tucows is a leading internet services and telecommunications company, providing domain registration, email, and other essential online services to businesses worldwide.",
  img: "/assets/images/partners/10.png",
  path: "https://www.tucows.com/",
},
{
  name: "BroadPress",
  des: "BroadPress specializes in providing comprehensive web hosting and digital solutions, empowering businesses with reliable infrastructure and technical support.",
  img: "/assets/images/partners/11.png",
  path: "https://broadpress.org/",
},
{
  name: "Kaspersky",
  des: "Kaspersky is a global cybersecurity company providing advanced digital security solutions and antivirus protection to individuals and businesses worldwide.",
  img: "/assets/images/partners/12.svg",
  path: "https://www.kaspersky.com/",
},
{
  name: "Linode",
  des: "Linode offers high-performance cloud computing and hosting services, providing developers with powerful and flexible infrastructure solutions for their applications.",
  img: "/assets/images/partners/13.svg",
  path: "https://www.linode.com/",
},
  ];
  return (
    <>
      <Ribbon name="Partners" des="" />
      <section className="w-[1180px] mx-auto max-lg:container max-lg:px-3 text-center mb-[45px]">
        {/* <h1 className="text-[32px] text-[#0D5D59] font-semibold mb-3">
          Drive your own revolution with SRIYOG
        </h1> */}
        <p className=" mx-auto">
          SRIYOG Consulting is partnering with various organizations and service
          providers to uplift the use of technology in digital era.
          <br />
          Few of are our esteemed partners.
          <br />
          For any partnership opportunities, we welcome your emails at&nbsp;
          <Link href="mailto:partners@sriyog.com">partners@sriyog.com</Link>
        </p>
      </section>

      <section className="w-[1180px] mx-auto max-lg:container gap-10 max-lg:px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-between mb-[45px]">
        {partner.map((item, idx) => (
          <div
            key={idx + 1}
            className="relative shadow-[0_.5rem_1rem_rgba(0,0,0,.15)]  px-4  rounded-lg  lg:h-[460px] sm:h-[480px] h-[480px]  hover:shadow-lg transition duration-300 ease-in-out"
          >
            <section className=" relative h-36 w-full   border-b border-[#dbdbdb]">
              <Image
                src={item.img}
                alt={item.name}
                className="object-contain py-4"
                fill
              />
            </section>

            <p className="text-gray-500 mb-2   h-[200px]  mt-12 ">{item.des}</p>
            <Link
              target="_blank"
              className="absolute mb-6 bottom-0 rounded-md border-[#dbdbdb] text-gray-500 font-medium border px-4 py-2 hover:bg-[#055d59] hover:text-white transition-all duration-300 ease-in-out"
              href={item.path}
            >
              Browse More
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}
