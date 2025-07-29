"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/effect-fade";
import {
  Autoplay,
  EffectFade,
  FreeMode,
  Navigation,
  Pagination,
} from "swiper/modules";
import Image from "next/image";

export default function Vmgo() {
  useEffect(() => {
    document.title = "Vision | SRIYOG Consulting";
  }, []);
  return (
    <>
      <section className="mb-[45px]">
        <Swiper
          loop={true}
          navigation={true}
          freeMode={true}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            reverseDirection: true,
            pauseOnMouseEnter: true,
          }}
          speed={1000}
          modules={[Navigation, Pagination, FreeMode, Autoplay, EffectFade]}
          className="mySwiper h-[80vh] max-lg:h-[55vh] max-md:h-[40vh] w-full"
        >
          <SwiperSlide className="h-[80vh]">
            <div className="relative w-[100%] h-full">
              <Image
                src="/assets/images/vmgo/1.jpg"
                alt="first-image"
                className="object-cover"
                fill
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[80vh]">
            <div className="relative w-[100%] h-full">
              <Image
                src="/assets/images/vmgo/2.jpg"
                alt="second-image"
                className="object-cover"
                fill
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="lg:w-[1180px] max-lg:container max-lg:px-3 mx-auto mb-[45px]">
        <p className="text-center text-[28px] font-semibold leading-tight mb-[56px] max-md:w-[89%] mx-auto">
          Vision, Mission, Goals and Objectives
        </p>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 place-content-between gap-4">
          <section className="">
            <div className="relative h-40 w-32 mx-auto">
              <Image
                src="/assets/images/vmgo/vision.png"
                alt="vision"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center">Vision</p>
          </section>
          <section className="">
            <div className="relative h-40 w-32 mx-auto">
              <Image
                src="/assets/images/vmgo/mission.png"
                alt="mission"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center">Mission</p>
          </section>
          <section className="">
            <div className="relative h-40 w-32 mx-auto">
              <Image
                src="/assets/images/vmgo/goal.png"
                alt="goals"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center">Goals</p>
          </section>
          <section className="">
            <div className="relative h-40 w-32 mx-auto">
              <Image
                src="/assets/images/vmgo/objective.png"
                alt="objectives"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center">Objectives</p>
          </section>
        </div>
      </section>

      <section className="lg:w-[1180px] max-lg:container max-lg:px-3 mx-auto mb-[45px] ">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 place-items-center mb-[45px]">
          <section className="md:col-span-1 hidden md:block ">
            <div className="relative h-40 w-32">
              <Image
                src="/assets/images/vmgo/vision.png"
                alt="vision"
                fill
                className="object-contain"
              />
            </div>
          </section>
          <section className="md:col-span-2  bg-[#efefef] rounded-lg lg:py-16 lg:px-20 sm:p-8 p-4">
            <p className="text-[1.6rem] font-bold leading-tight mb-[8px]">
              Vision
            </p>
            <p className=" mb-[8px] ">
              Our vision at SRIYOG is to create a future where every individual
              has access to opportunities that match their skills and
              aspirations.{" "}
            </p>
            <p className=" ">
              We envision a world where people searching for any service can
              easily connect with skilled professionals rather than hiring hefty
              commission from any service marketplace, and where an individual
              can have his/her digital profile showcasing their expertise.
            </p>
          </section>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 place-items-center mb-[45px]">
          <section className="md:col-span-2  bg-[#055d59] text-white rounded-lg lg:py-16 lg:px-20 sm:p-8 p-4">
            <p className="text-[1.6rem] font-bold leading-tight mb-[8px]">
              Mission
            </p>
            <p className=" mb-[8px] ">
              At SRIYOG, our mission is to revolutionize the way work is
              connected with workers. We strive to provide a seamless platform
              that empowers individuals and businesses to find the perfect match
              for their needs, fostering opportunities for growth,
              collaboration, and success.
            </p>
          </section>
          <section className="md:col-span-1 hidden md:block ">
            <div className="relative h-40 w-32">
              <Image
                src="/assets/images/vmgo/mission.png"
                alt="mission"
                fill
                className="object-contain"
              />
            </div>
          </section>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 place-items-center mb-[45px]">
          <section className="md:col-span-1 hidden md:block ">
            <div className="relative h-40 w-32">
              <Image
                src="/assets/images/vmgo/goal.png"
                alt="goals"
                fill
                className="object-contain"
              />
            </div>
          </section>
          <section className="md:col-span-2  bg-[#efefef] rounded-lg lg:py-16 lg:px-20 sm:p-8 p-4">
            <p className="text-[1.6rem] font-bold leading-tight mb-[8px]">
              Goals
            </p>
            <ul className="list-disc space-y-[8px] max-md:ml-4">
              <li>
                <p className="font-bold">Facilitate Connections</p>
                <p className="">
                  We believe in the power of direct communication and
                  collaboration with businesses and professionals. Our platform
                  provides tools and features that enable transparent and
                  efficient interactions, fostering strong connections and
                  mutual understanding.
                </p>
              </li>
              <li>
                <p className="font-bold">Promote Transparency</p>
                <p className="">
                  Transparency is at the core of our operations at SRIYOG. We
                  are dedicated to promoting transparency in all interactions
                  and transactions on our platform. Through robust verification
                  processes, we authenticate user profiles and ensure the
                  accuracy of job listings, building trust among our users.
                </p>
              </li>
              <li>
                <p className="font-bold"> Empower Individuals</p>
                <p className="">
                  We are committed to providing equal access to opportunities
                  for businesses and professionals from diverse backgrounds. Our
                  platform offers resources and support to help underserved
                  communities access and utilize our services effectively,
                  promoting inclusivity and diversity.
                </p>
              </li>
              <li>
                <p className="font-bold">Drive Innovation</p>
                <p className="">
                  Innovation drives our efforts at SRIYOG as we continuously
                  explore new technologies and trends to enhance our platform&apos;s
                  capabilities. By staying ahead of the curve, we ensure that
                  our users have access to cutting-edge solutions and the best
                  possible experience.
                </p>
              </li>
            </ul>
          </section>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 place-items-center mb-[45px]">
          <section className="md:col-span-2  bg-[#055d59] text-white rounded-lg lg:py-16 lg:px-20 sm:p-8 p-4">
            <p className="text-[1.6rem] font-bold leading-tight mb-[8px]">
              Objectives
            </p>
             <ul className="list-disc space-y-[8px] max-md:ml-4">
                <li >
                  <p className="font-bold text-white">Expand Reach</p>
                  <p className=" text-white">
                    Expand our reach to new markets and demographics, ensuring
                    that individuals and businesses from all backgrounds have
                    access to our platform.
                  </p>
                </li>
                <li >
                  <p className="font-bold text-white">
                    Enhance User Experience
                  </p>
                  <p className=" text-white">
                    Continuously improve the user experience on our platform,
                    making it easier and more intuitive for users to find what
                    they&apos;re looking for.
                  </p>
                </li>
                <li >
                  <p className="font-bold text-white">Build Partnerships</p>
                  <p className=" text-white">
                    Forge strategic partnerships with businesses, organizations,
                    and educational institutions to create new opportunities for
                    our users.
                  </p>
                </li>
                <li >
                  <p className="font-bold text-white">
                    Promote Diversity and Inclusion
                  </p>
                  <p className=" text-white">
                    Promote diversity and inclusion within our community,
                    ensuring that everyone has an equal opportunity to succeed.
                  </p>
                </li>
                <li >
                  <p className="font-bold text-white">
                    Drive Customer Satisfaction
                  </p>
                  <p className=" text-white">
                    Prioritize customer satisfaction by actively listening to
                    feedback and addressing the needs and concerns of our users.
                  </p>
                </li>
              </ul>
          </section>
          <section className="md:col-span-1 hidden md:block ">
            <div className="relative h-40 w-32">
              <Image
                src="/assets/images/vmgo/objective.png"
                alt="objectives"
                fill
                className="object-contain"
              />
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
