
import Image from "next/image";
import Ribbon from "@/components/Ribbon";
import Link from "next/link";
import { Metadata } from "next";
const teamMembers = [
  {
    id: 1,
    name: "Prakash",
    role: "Project Manager",
    image: "/assets/images/team/1.png",
  },
  {
    id: 2,
    name: "Hiring Manager",
    role: "Information Manager",
    image: "/assets/images/team/2.png",
  },
  {
    id: 3,
    name: "Sakchyam",
    role: "Flutter Developer",
    image: "/assets/images/team/3.png",
  },
  {
    id: 4,
    name: "Aashma",
    role: "Backend Developer",
    image: "/assets/images/team/4.png",
  },
  {
    id: 5,
    name: "Bitisha",
    role: "React JS Developer",
    image: "/assets/images/team/5.png",
  },
  {
    id: 6,
    name: "Lasta",
    role: "React JS Developer",
    image: "/assets/images/team/6.png",
  },
  {
    id: 7,
    name: "Milan",
    role: "UI/UX Designer",
    image: "/assets/images/team/7.png",
  },
  {
    id: 8,
    name: "Prakrit",
    role: "UI/UX Designer",
    image: "/assets/images/team/9.png",
  },
  {
    id: 9,
    name: "Priyanka",
    role: "React JS Developer",
    image: "/assets/images/team/10.png",
  },
  {
    id: 10,
    name: "Sagar",
    role: "Web Developer",
    image: "/assets/images/team/11.png",
  },
  {
    id: 11,
    name: "Rahul",
    role: "React JS Developer",
    image: "/assets/images/team/12.png",
  },
  {
    id: 12,
    name: "Sarad",
    role: "React Native Developer",
    image: "/assets/images/team/8.png",
  },
  {
    id: 13,
    name: "Aaron",
    role: "MERN Stack",
    image: "/assets/images/team/15.png",
  },
  {
    id: 14,
    name: "Alisha",
    role: "MERN Stack",
    image: "/assets/images/team/16.png",
  },
  {
    id: 15,
    name: "Alwens",
    role: "UI/UX Designer",
    image: "/assets/images/team/17.png",
  },
  {
    id: 16,
    name: "Ayoola",
    role: "MERN Stack",
    image: "/assets/images/team/18.png",
  },
  {
    id: 17,
    name: "Binod",
    role: "MERN Stack",
    image: "/assets/images/team/19.png",
  },
  {
    id: 18,
    name: "Bitika",
    role: "MERN Stack",
    image: "/assets/images/team/20.png",
  },
  {
    id: 19,
    name: "Kateryna",
    role: "UI/UX Designer",
    image: "/assets/images/team/21.png",
  },
  {
    id: 20,
    name: "Hammoud",
    role: "MERN Stack",
    image: "/assets/images/team/22.png",
  },
  {
    id: 21,
    name: "Samyod",
    role: "MERN Stack",
    image: "/assets/images/team/23.png",
  },
  {
    id: 22,
    name: "Sanish",
    role: "ReactJS Developer",
    image: "/assets/images/team/24.png",
  },
  {
    id: 23,
    name: "Santosh",
    role: "UI/UX Designer",
    image: "/assets/images/team/25.png",
  },
  {
    id: 24,
    name: "Sarishma",
    role: "MERN Stack",
    image: "/assets/images/team/26.png",
  },
  {
    id: 25,
    name: "Shiva",
    role: "MERN Stack",
    image: "/assets/images/team/27.png",
  },
  {
    id: 26,
    name: "Smriti",
    role: "ReactJS Developer",
    image: "/assets/images/team/28.png",
  },
  {
    id: 27,
    name: "Sneha",
    role: "MERN Stack",
    image: "/assets/images/team/29.png",
  },
];

export const metadata: Metadata = {
  title: "Team | SRIYOG Consulting",
  description: "Meet the team behind SRIYOG Consulting.",
  openGraph: {
    title: "Team | SRIYOG Consulting",
    description: "Meet the team behind SRIYOG Consulting.",
    url: "https://www.sriyog.com/team",
    images: [
      {
        url: "https://sriyog.com/assets/images/og/default.jpg",
        alt: "Team"
      }
    ]
  }
};
const pracasImage = "/assets/images/team/pracas.png";
export default function Example() {
  return (
    <>
      <Ribbon name="Team" des="" />
      <section className="">
        {/*About Pracas */}
        <div className="max-w-[1180px] max-lg:container max-lg:px-3 flex justify-center items-center  mx-auto   ">
          <div className=" bg-[#efefef] rounded-lg text-black w-full border border-gray-300 md:p-0 ">
            <div className="flex flex-col sm:flex-row w-full h-full py-10 md:px-10 px-6 items-center">
              <div className=" h-[390px] flex flex-col items-center justify-center  md:p-0 basis-full w-full sm:basis-[30%] ">
                <div className="relative h-76 w-[85%] md:h-56 md:w-full lg:h-64 lg:w-[75%] ">
                  <Image
                    src={pracasImage}
                    alt="Pracas Upreti"
                    fill
                    className="mx-auto object-contain"
                  />
                </div>

                <br />
                <h2 className="font-bold text-2xl text-center">PRACAS</h2>

                <p className="text-2xl text-center font-semibold">C.T.O</p>
              </div>

              <div className="flex-1 flex flex-col justify-start basis-[70%] ">
                <h1 className="text-3xl font-roboto font-semibold max-lg:text-center">
                  About PRACAS
                </h1>
                <br />
                <p className=" text-gray-900 ">
                  Pracas Upreti&apos;s journey from a startup founder to a
                  technology-driven change-maker in Biratnagar, Nepal,
                  exemplifies the profound impact that individuals can have when
                  they combine innovation with a commitment to social
                  responsibility.
                  <br />
                  <br />
                  Through his endeavors, Upreti has not only transformed his
                  community but has also set a precedent for how technology can
                  be harnessed to drive positive change and create a better
                  future for all.
                  <br />
                  <br />
                  Upreti&apos;s journey into the realm of technology began over
                  a decade ago when he founded his first IT startup in 2007 A.D.
                  as PRACAS Infosys in Biratnagar. Recognizing the potential of
                  technology to bridge gaps and catalyze progress, he embarked
                  on a mission to leverage digital solutions to address local
                  challenges and foster economic development. His vision was not
                  merely to create successful businesses but to effect
                  meaningful change in his community.
                </p>
                {/*Soical Media icons */}
                <br />
                <div className="flex  flex-col gap-3">
                  <p>Follow Pracas on social media</p>
                  <div className="flex gap-3 items-center">


                    <Link href="https://x.com/pracas" target="_blank">
                      <Image
                        src={"/assets/icons/tweeter.svg"}
                        width={20}
                        height={20}
                        alt="Linkedin Image"
                      />
                    </Link>

                    <Link href="https://linkedin.com/in/pracasupreti" target="_blank">
                      <Image
                        src={"/assets/icons/linkedin.svg"}
                        width={20}
                        height={20}
                        alt="Linkedin Image"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1180px] max-lg:container max-lg:px-3 mx-auto my-[45px]">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="!bg-gray-100 text-black border border-gray-300 flex flex-col items-center min-h-[320px] rounded-lg max-lg:py-6 md:pb-4"
              >
                <div className="relative h-76 w-full md:h-56 md:w-full lg:h-64 lg:w-[85%] ">
                  <Image
                    fill
                    className="mx-auto object-contain"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <div className="text-lg font-semibold text-center font-roboto">
                  {member.name}
                </div>
                <p className="text-sm text-center text-gray-600 font-roboto">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
