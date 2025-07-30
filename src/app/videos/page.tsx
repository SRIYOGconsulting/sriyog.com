import React from "react";
import { Metadata } from "next";
import Ribbon from "@/components/Ribbon";

export const metadata: Metadata = {
  title: "Videos | SRIYOG Consulting",
};

const _1 = "https://www.youtube.com/embed/eS0Fm8zbk0c?autoplay=1";
const _2 = "https://www.youtube.com/embed/jgcHULl0ML8?autoplay=1";
const _3 = "https://www.youtube.com/embed/dwbmS85CanQ?autoplay=1";
const _4 = "https://www.youtube.com/embed/BM9yTsfkgb4?autoplay=1";
const _5 = "https://www.youtube.com/embed/bc7vYj3Oqz8?autoplay=1";
const _6 = "https://www.youtube.com/embed/3y1_MxeOq8s?autoplay=1";
const _7 = "https://www.youtube.com/embed/3y1_MxeOq8s?autoplay=1";
const _8 = "https://www.youtube.com/embed/3y1_MxeOq8s?autoplay=1";

const page = () => {
  const tutorialVideo = [
    {
      id: 1,
      name: "Nepal Startup Meet",
      url: _1,
    },
    {
      id: 2,
      name: "Nepal Startup Meet 2019: Sriyog.com",
      url: _2,
    },
    {
      id: 3,
      name: "SRIYOG Nepal Startup Meet",
      url: _3,
    },
    {
      id: 4,
      name: "पार्टटाइम जागिर जुराउन वेबसाइटको बिकास - प्रकाश उप्रेती",
      url: _4,
    },
    {
      id: 5,
      name: "बेरोजगारको सहारा बन्दै श्रीयोग डट कम संस्थापक उप्रेती",
      url: _5,
    },
    {
      id: 6,
      name: "Sambhawana Podcast 19: Sriyog.com - Desired Professional Platform",
      url: _6,
    },
    {
      id: 7,
      name: "पार्ट टाइम रोजगारीको लागि SRIYOG|| Part time jobs in Nepal",
      url: _7,
    },
    {
      id: 8,
      name: "Sumadhur Bhet- Sima Basnet with Prakash Upreti",
      url: _8,
    },
  ];

  return (
    // <>
    //   <section className="video-page-section mb-14">

    //     <div className="max-w-[1180px] mx-auto">
    //       <div className="bg-white px-4 sm:px-0 py-3 text-center">
    //         <div>
    //           <h2 className=" mt-14 mb-4 text-[28px] font-semibold text-[#0D5D59]  inline-block">
    //             SRIYOG Videos
    //           </h2>
    //           <div className="mt-5 grid grid-cols-2 items-center justify-around gap-10">
    //             {tutorialVideo.map((video, index) => {
    //               const { name, url } = video;
    //               return (
    //                 <>
    //                   <div key={index}>
    //                     {url && (
    //                       <iframe
    //                         className="w-full h-[315px]"
    //                         src={url}
    //                         title="YouTube video player"
    //                         frameborder="0"
    //                         allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //                         referrerpolicy="strict-origin-when-cross-origin"
    //                         allowfullscreen
    //                       ></iframe>
    //                     )}
    //                     {name && (
    //                       <p className="mt-2 text-[18px] font-semibold text-[#4b4b4b]">
    //                         {name}
    //                       </p>
    //                     )}
    //                   </div>
    //                 </>
    //               );
    //             })}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </>

    <>
      <Ribbon name="Videos" des="" />

      <section className="lg:w-[1180px] mx-auto max-lg:container max-lg:px-3 mb-[45px]">
        <div className="bg-[#0D5D59] px-4 py-14 text-center ">
          <h1 className="my-8 text-center text-[34px] md:text-[32px] font-semibold text-white inline-block">
            Featured SRIYOG Video
          </h1>
          <div className="max-w-[1180px] mx-auto">
            <iframe
              className=" w-full h-[600px] rounded-xl shadow-xl"
              src="https://www.youtube.com/embed/ctzTleg6j1c"
              title="SRIYOG Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div>
          <h2 className=" mb-4 text-[28px] text-center font-semibold text-[#0D5D59]">
            SRIYOG Videos
          </h2>
          <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 w-full place-content-between gap-10">
            {tutorialVideo.map((video) => (
              <div key={video.id}>
                <iframe
                  className="w-full  h-[200px] rounded-lg"
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
};

export default page;
