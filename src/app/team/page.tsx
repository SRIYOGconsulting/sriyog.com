import Image from "next/image";
import Ribbon from "@/components/Ribbon";
import Link from "next/link";
import { Metadata } from "next";
const images = [
  "/assets/images/team/1.png",
  "/assets/images/team/2.png",
  "/assets/images/team/3.png",
  "/assets/images/team/4.png",
  "/assets/images/team/5.png",
  "/assets/images/team/6.png",
  "/assets/images/team/7.png",
  "/assets/images/team/9.png",
  "/assets/images/team/10.png",
  "/assets/images/team/11.png",
  "/assets/images/team/12.png",
   "/assets/images/team/8.png",
];

const names = [
  "Niranjan",
  "Madan",
  "Sakchyam",
  "Aashma",
  "Bitisha",
  "Lasta",
  "Milan",
  "Prakrit",
  "Priyanka",
  "Sagar",
  "Rahul",
  "Sarad"
];
const roles = [
  "Project Manager",
  "Information Manager",
  "Flutter Developer",
  "Backend Developer",
  "React JS Developer",
  "React JS Developer",
  "UI/UX Designer",
  "UI/UX Designer",
  "React JS Developer",
  "Web Developer",
  "React JS Developer",
  "React Native Developer",
];

export const metadata: Metadata = {
  title: "Team | SRIYOG Consulting",
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
                    {/* <Link href="https://t.me/pracasupreti" target="_blank">
                      <Image
                        src={"/assets/icons/telegram1.svg"}
                        width={20}
                        height={20}
                        alt="Linkedin Image"
                      />
                    </Link> */}

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
            {images.map((img, index) => (
              <div
                key={index}
                className="!bg-gray-100 text-black border border-gray-300  flex flex-col items-center min-h-[320px] rounded-lg max-lg:py-6 md:pb-4"
              >
                <div className="relative h-76 w-full md:h-56 md:w-full lg:h-64 lg:w-[85%] ">
                  <Image
                    fill
                    className="mx-auto object-contain "
                    src={img}
                    alt={`Team Member ${index + 1}`}
                  />
                </div>
                <div className=" text-lg font-semibold text-center font-roboto">
                  {names[index]}
                </div>
                <p className="text-sm text-center text-gray-600 font-roboto">
                  {roles[index]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
