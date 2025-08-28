import Ribbon from "@/components/Ribbon";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const clientsData = [
  {
    id: 1,
    title: "TransNepal Freight Services Pvt. Ltd.",
    date: " 04 Feb 2013 ",
    service: [
      <>
        <Link href="https://transnepaldryport.com/" target="_blank">
          Website
        </Link>
      </>,
      "Business eMail",
    ],
    image: "/assets/images/clients/transnepal.png",
    description:
      "TransNepal Freight Services Pvt. Ltd., was incorporated in the year 2002 under the Nepalese Company Act and started operation from 17th April 2002 by taking over the operation and management of the two ICDs’ at Biratnagar and Bhairahawa",
    path: "https://transnepaldryport.com/",
  },

  {
    id: 2,
    title: "CVDs Nepal",
    date: " 13 Sep 2007 ",
    service: [
      <>
        <Link href="https://cvdsnepal.org.np/" target="_blank">
          Website
        </Link>
      </>,
    ],
    image: "/assets/images/clients/cvds-nepal.png",
    description:
      "People with disability are the most vulnerable and marginalized group of people. They live in isolation, segregation, disparagement, poverty and virtual dependence on charity and even pity. They are the victim of the community misconception and stigmas denying them of their inalienable and recognized rights. As a result, they shut themselves from the world and they underestimate themselves thinking that they do not fit in the society like other able-bodied children.",
    path: "https://cvdsnepal.org.np/",
  },
  {
    id: 3,
    title: "Jayashree Polymers",
    date: " 04 Aug 2013 ",
    service: ["Business eMail"],
    image: "/assets/images/clients/jayshree-polymers.png",
    description:
      "The Jayashree Group traces its roots back to 1984 when it began operations as a Rubber manufacturing company. Jayashree, realizing the immense opportunities in the global rubber components industry has been successful in expanding its operations into multiple locations & multi-products over a period of time. ",
    path: "https://magicfootwear.com.np/",
  },
  {
    id: 7,
    title: "Purbanchal University",
    date: " 04 Feb 2013 ",
    service: [
      <>
        <Link href="https://pusom.edu.np/about-us" target="_blank">
          Website
        </Link>
      </>,
      "Business eMail",
    ],
    image: "/assets/images/clients/4.png",
    description:
      "Purbanchal University, School of Management (PUSOM) is established by the Purbanchal University Act 1994 with a mission to establish as a leading university of academic excellence. The Faculty of Management (FOM) of Purbanchal University offers.....",
    path: "https://pusom.edu.np/about-us",
  },

  {
    id: 8,
    title: "Neuro Cardio & Multispeciality Hospital",
    date: " 04 Feb 2013 ",
    service: ["Website", "Business eMail"],
    image: "/assets/images/clients/5.png",
    description:
      "Neuro Cardio & Multispeciality Hospital is a privately owned Health Organization located at Biratnagar Metropolitan City, Nepal which has been dedicated to Health Care Services for more than two decades. Known for its quality care since its inception ....",
    path: "https://www.neurohospital.com.np/",
  },

  {
    id: 9,
    date: " 04 Feb 2013 ",
    service: ["Business eMail"],
    image: "/assets/images/clients/6.png",
    title: "Golden Hospital",
    description:
      "Golden Hospital, established in 2011 (Falgun 2067 BS), is a premier multi-specialty medical institution located in Biratnagar, Nepal's second-largest city. With a mission, the hospital is dedicated to providing both preventive and curative healthcare services, primarily targeting the eastern region of the country.",
    path: "https://www.goldenhospital.com.np/",
  },
  {
    id: 10,
    date: " 04 Feb 2013 ",
    service: [
      <>
        <Link href="https://sudarshansecurity.com.np/" target="_blank">
          Website
        </Link>
      </>,
      "Business eMail",
    ],
    image: "/assets/images/clients/7.png",
    title: "Sudarshan Security Services",
    description:
      "Sudarshan Security Services as an experienced service provider, takes pride in offering our clients an effective solution and world class service throughout the country.",
    path: "https://sudarshansecurity.com.np/",
  },
  {
    id: 11,
    date: " 04 Feb 2013 ",
    service: [
      <>
        <Link href="https://kopilaclinic.com.np/" target="_blank">
          Website
        </Link>
      </>,
      "Business eMail",
    ],
    image: "/assets/images/clients/8.png",
    title: "Kopila Clinic",
    description:
      "Your trusted partner in reproductive health and Womens wellness in Damak, Nepal. Newly established in November 2024, our state-of-the-art facility in Jaycees Chowk brings hope and specialized care to families throughout Jhapa and neighboring regions.",
    path: "https://kopilaclinic.com.np/",
  },
  {
    id: 12,
    date: " 04 Feb 2013 ",
    service: [
      <>
        <Link href="https://drpriyankasclinic.com/" target="_blank">
          Website
        </Link>
      </>,
      "Business eMail",
    ],
    image: "/assets/images/clients/9.png",
    title: "Dr. Priyanka's Clinic",
    description:
      "Welcome to Dr. Priyanka's Clinic, a dedicated Obstetrics and Gynecology facility located in the heart of Birtamode, Jhapa, Nepal. Established on April 25, 2023, our clinic is committed to providing comprehensive healthcare services tailored .....",
    path: "https://drpriyankasclinic.com/",
  },
  {
    id: 13,
    date: " 04 Feb 2013 ",
    service: ["Business eMail"],
    image: "/assets/images/clients/10.png",
    title: "FORWAD",
    description:
      "By integrating social development with economic support, we are expanding our reach to uplift livelihoods, protect biodiversity, promote agriculture, and extend humanitarian assistance to communities across the country.",
    path: "https://forward.org.np/",
  },
  {
    id: 14,
    title: "CSK Nepal",
    date: " 04 Feb 2013 ",
    service: [
      "Digital Marketing",
    ],
    image: "/assets/images/clients/11.png",
    description:
      "Chandra Shiva Khadya Udhyog is 6 decades old organisation, producing edible oil and rice products from Koshi Province Nepal.",
    
  },
  {
    id: 15,
    title: "Arogya Bhawan Works Pvt. Ltd.",
    date: " 04 Feb 2013 ",
    service: ["Business eMail"],
    image: "/assets/images/clients/12.png",
    description:
      "In the year 1925 AD Royal Ayurvedic Physician Mr. Shiva Nath Rimal and his younger brother Mr. Narendra Nath Rimal established this organization with the objective to cure and maintain the holistic Ayurvedic system in the center of the Himalayan range.",
    path: "https://www.arogyabhawanworks.com.np/",
  },
  {
    id: 16,
    title: "Advance Pain Specialist Clinic",
    date: " 04 Feb 2013 ",
    service: [
      <>
        <Link href="https://painclinic.com.np/" target="_blank">
          Website
        </Link>
      </>,
      "Business eMail",
    ],
    image: "/assets/images/clients/14.png",
    description:
      "At Advance Pain Specialist Clinic, we strive to transform lives by helping individuals overcome the limitations of pain and embrace a healthier, happier future.",
    path: "https://painclinic.com.np/",
  },
  {
    id: 17,
    title: "Gravure Link Nepal Pvt. Ltd",
    date: " 04 Feb 2013 ",
    service: [
      <>
        <Link href="https://gravelink.com.np/" target="_blank">
          Website
        </Link>
      </>,
    ],
    image: "/assets/images/clients/15.jpg",
    description:
      "Gravure Link Nepal Pvt. Ltd. A leader in the printing sector and producing Rotogravure Electronic Printing Cylinders of the highest caliber. We serve many renowned companies around the country by offering specialized, precised,",
    path: "https://gravelink.com.np/",
  },
  {
    id: 18,
    title: "BKM Masala",
    date: " 04 Feb 2013 ",
    service: [
      <>
        <Link href="https://bkmasala.com.np/" target="_blank">
          Website
        </Link>
      </>,
      "Digital Marketing",
    ],
    image: "/assets/images/clients/18.png",
    description:
      "BK Masala company was established in 2057 BS ( 2001 AD ) to provide the best spices in Nepal. The company has been providing quality and super fine masala from 17 years. Its philosophy is to provide best quality products.",
    path: "https://bkmasala.com.np/",
  },
  {
    id: 19,
    title: "Sundarshan Argo Resort",
    date: " 04 Feb 2013 ",
    service: [
      <>
        <Link href="https://sudarshanagroresort.com.np/" target="_blank">
          Website
        </Link>
      </>,
      "Business eMail",
    ],
    image: "/assets/images/clients/19.png",
    description:
      "Welcome to Sudarshan Park and Resort, your ultimate destination for relaxation and cultural immersion in Nepali style. Nestled in the heart of lush greenery, our resort offers a serene escape where you can enjoy authentic Nepali cuisine, comfortable accommodations, and vibrant cultural experiences.",
    path: "https://sudarshanagroresort.com.np/",
  },
  {
    id: 20,
    title: "Kisanpedia",
    date: " 04 Feb 2013 ",
    service: [
      <>
        <Link href="https://kisanpedia.com/" target="_blank">
          Website
        </Link>
      </>,
      "Business eMail",
    ],
    image: "/assets/images/clients/kisanpedia-LOGO.png",
    description:
      "Kisanpedia is agri-based start-up and is providing 'One stop' agriculture solution to the farmers. We work directly with the farmers or commercial farms to bring an impact on the lives of farmers by helping them in increasing their crop yield, reduce cost of production, and help grow better quality crops to get better price.",
    path: "https://kisanpedia.com/",
  },
  {
    id: 19,
    title: "Lumanti Group",
    date: " 04 Feb 2013 ",
    service: [
      <>
        <Link href="https://lumantigroup.com/" target="_blank">
          Website
        </Link>
      </>,
      "Business eMail",
    ],
    image: "/assets/images/clients/lumanti-group-logo.png",
    description:
      "Lumanti Group is a trusted name in Nepal, operating across multiple industries, including manufacturing, trading, hospitality, consulting, education, and retail. With 14 years of service, 9 companies, and 35+ staff, we have built a strong reputation for excellence. Committed to quality and customer satisfaction, we strive to bring the best products and services to the Nepali market.",
    path: "https://lumantigroup.com/",
  },
];

export const metadata: Metadata = {
  title: "Our Clients | SRIYOG Consulting",
  openGraph: {
    title: "Our Clients | SRIYOG Consulting",
    description:
      "Explore the diverse range of organizations that trust SRIYOG Consulting for their digital transformation needs.",
    url: "https://www.sriyog.com/clients",
    images: [
      {
        url: "/https://sriyog.com/assets/images/og/default.jpg",
        alt: "Our Clients",
      },
    ],
  },
};
export default function Page() {
  return (
    <>
      <Ribbon name="Our Clients" des="" />
      <section className="lg:w-[1180px] max-lg:container max-lg:px-3 mx-auto mb-[45px]">
        <h1 className="text-[32px] text-[#055D59] font-semibold text-center mb-1">
          Organizations driving their revolution with SRIYOG Consulting
        </h1>
        <p className="max-w-[800px] mx-auto text-center mb-[45px]">
          Our IT experts work with your organization to implement a tech
          strategy to evolve at a pace that works to uplift your organization
          digitally. We believe that sharing ideas and building a strategy
          together is a better approach for your long-term success which is
          packaged in a subscription plan.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-between gap-10">
          {clientsData.map((item, idx) => (
            <div
              key={idx + 1}
              className="relative text-gray-700 shadow-[0_.5rem_1rem_rgba(0,0,0,.15)] rounded-lg px-4 lg:h-[460px] sm:h-[480px] h-auto  hover:shadow-lg transition duration-300 ease-in-out"
            >
              <section className=" relative h-48 md:h-32 w-full mb-2 border-b border-[#dbdbdb]">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="object-contain py-4"
                  fill
                />
              </section>
              <p className="font-semibold mb-2 text-xl h-12">{item.title}</p>
              <p className=" mb-2 md:h-24 h-32 ">
                {item.description.slice(0, 160)}...
              </p>
              <p className="font-semibold mb-2 md:mt-12 ">
                Services offered
              </p>
              <div className="flex gap-3  flex-wrap max-lg:mb-4">
                {item.service &&
                  item.service.map((data, idx) => (
                    <div key={idx + 1} className="border px-2 py-1 rounded-md hover:bg-[#055d59] hover:text-white hover:cursor-pointer transition-all duration-300 ease-in-out">
                      {data}
                    </div>
                  ))}
              </div>
              {/* <p className="border-b pb-2 border-[#dbdbdb]">
                Service Started Date : {item.date}
              </p> */}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
