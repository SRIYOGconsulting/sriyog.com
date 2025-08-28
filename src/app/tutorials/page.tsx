import Ribbon from "@/components/Ribbon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tutorials | SRIYOG Consulting",
  description: "Watch our tutorial videos to enhance your skills.",
  openGraph: {
    title: "Tutorials | SRIYOG Consulting",
    description: "Watch our tutorial videos to enhance your skills.",
    url: "https://www.sriyog.com/tutorials",
    images: [
      {
        url: "/https://sriyog.com/assets/images/og/default.jpg",
        alt: "Tutorials"
      }
    ]
  }
};
export default function Tutorials() {
  const videoData = [
   
    {
      id: 14,
      name: "BIRATINFO - Signup, CMS, New Posting system in BroadPress",
      url: "https://www.youtube.com/embed/RGNFbtIG4Zk?si=RGNFbtIG4Zk-9A",
    },
    {
      id: 1,
      name: "Share Google Docs File for cloud collaboration",
      url: "https://www.youtube.com/embed/AJkgb8DseCI?si=9v7ZSdWCDIqJv-9A",
    },
    {
      id: 2,
      name: "Managing format in Google Docs file",
      url: "https://www.youtube.com/embed/lJToZISRfSc?si=_ZdTIHWbBnoNLbCw",
    },
    {
      id: 3,
      name: "Neuro Hospital - Book An Appointment",
      url: "https://www.youtube.com/embed/XAkvJCmYBuE?si=NX0md8liafOnIfRD",
    },
    {
      id: 4,
      name: "How to use FileZilla ?",
      url: "https://www.youtube.com/embed/SodTAKePTCA?si=ZfTiW4rPTVjafZtR",
    },
    {
      id: 5,
      name: "AnyDesk remote desktop manager download and install guide",
      url: "https://www.youtube.com/embed/HOWlxB6SfW0?si=y-8pUQ4iESmKEYtS",
    },
    {
      id: 6,
      name: "Type in Nepali | The easiest way to type in Nepali from google input tools",
      url: "https://www.youtube.com/embed/RKXZHRu7aLs?si=ZjDALWyY-f_j8p54",
    },
    {
      id: 7,
      name: "Download thunderbird and setup",
      url: "https://www.youtube.com/embed/IB_oB3NxHTg?si=upsCfuVfBZd1ROPj",
    },
    {
      id: 8,
      name: "Resize bulk photos with Fast Stone Photo Resizer",
      url: "https://www.youtube.com/embed/JFZm5sXsoSo?si=B0qQsWrXg2cv8bEJ",
    },
    {
      id: 9,
      name: "Setup Email in Outlook 2013",
      url: "https://www.youtube.com/embed/_XRs8SWowa0?si=orsthztohZaOAsxE",
    },
    {
      id: 10,
      name: "Microsoft Office Outlook 2007 Setting up POP3 Email Accounts",
      url: "https://www.youtube.com/embed/xwi626KOBU4?si=p69yunrU15CJvDCz",
    },
    {
      id: 11,
      name: "how to use fine reader WMV V9",
      url: "https://www.youtube.com/embed/sANWlO-C5ds?si=d_YbX7-rcwQPTaVk",
    },
    {
      id: 12,
      name: "Import emails from Gmail to Yandex Mail",
      url: "https://www.youtube.com/embed/3s9S3Gglc9U?si=JFYPhSLNiRkQeZJg",
    },
    {
      id: 13,
      name: "Setup email in thunderbird",
      url: "https://www.youtube.com/embed/3ubxPw0wNRY?si=2syWxsQCObF0MZ-I",
    },
  ];
  return (
    <>
      <Ribbon name="Tutorials" des="" />
      <section className="lg:w-[1180px] mx-auto max-lg:container max-lg:px-3 mb-[45px]">
        <div>
          <h2 className=" mb-4 text-[28px] text-center font-semibold text-[#0D5D59]">
            Tutorial Videos 
          </h2>
          <div className="mt-5 grid md:grid-cols-2  grid-cols-1 w-full place-content-between gap-10">
            {videoData.map((video) => (
              <div key={video.id}>
                <iframe
                  className="w-full  h-[350px] rounded-lg"
                  src={video.url}
                  title="YouTube video player"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <p className="inline-block mt-3 w-full text-start font-semibold text-[#4b4b4b]">
                  {video.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
