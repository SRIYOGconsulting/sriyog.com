import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata:Metadata={
  title: "SRIYOG App | Sriyog Consulting",
  description: "Explore the SRIYOG App by Sriyog Consulting.",
  openGraph: {
    title: "SRIYOG App | Sriyog Consulting",
    description: "Explore the SRIYOG App by Sriyog Consulting.",
    url: "https://www.sriyog.com/sriyog-app",
    images: [
      {
        url: "/assets/images/homepage/hero-banner.jpg",
        alt: "SRIYOG App"
      }
    ]
  }
}
export default function App() {
  return (
    <>
      <div className="max-w-[1180px] mx-auto flex flex-col flex-auto items-center justify-center h-[80vh] gap-4">
        <Image
          src="/assets/icons/error.svg"
          width={60}
          height={60}
          alt="Error Image"
        />
        <div className=" flex items-center gap-4">
          <h1 className="text-lg">
            This page has been moved{" "}
            <span className="hover:underline">
              <Link href={"https://sriyog.app/"} className="" target="_blank">
                Click Here
              </Link>
            </span>
          </h1>
        </div>
      </div>
    </>
  );
}
