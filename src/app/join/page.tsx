import Link from "next/link";
import Image from "next/image";
import {Metadata} from "next";


export const metadata:Metadata = {
  title: "Join | SRIYOG Consulting",
  description: "Join SRIYOG Consulting and be a part of our team.",
  openGraph: {
    title: "Join | SRIYOG Consulting",
    description: "Join SRIYOG Consulting and be a part of our team.",
    url: "https://www.sriyog.com/join",
    images: [
      {
        url: "/https://sriyog.com/assets/images/og/default.jpg",
        alt: "Join"
      }
    ]
  }
}

export default function Join() {
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
              <Link
                href={"https://sriyog.app/join"}
                className=""
                target="_blank"
              >
                Click Here
              </Link>
            </span>
          </h1>
        </div>
      </div>
    </>
  );
}
