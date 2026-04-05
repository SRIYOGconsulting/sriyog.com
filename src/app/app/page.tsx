import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto py-6 md:py-12 md:my-10 px-3 sm:px-6 md:px-8 lg:px-48 flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start space-y-6 w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl text-center md:text-left mt-4 text-black">
            Find Skilled Professionals
          </h1>
          <p className="text-xl text-center md:text-left text-black">
            100K+ Downloads
          </p>
          <p className="font-semibold text-center md:text-left text-black">
            Whole Nepal Coverage
          </p>
          <div className="flex space-x-3 md:space-x-4 justify-center md:justify-start">
            <a
              href="https://p.sriyog.app/playcom"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/app/google.png"
                alt="Google Play Store"
                width={150}
                height={50}
                className="h-8 md:h-12 w-auto"
              />
            </a>
            <a href="https://p.sriyog.app/ioscom" target="_blank" rel="noreferrer">
              <Image
                src="/app/apple.png"
                alt="Apple App Store"
                width={150}
                height={50}
                className="h-8 md:h-12 w-auto"
              />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="mobile-image w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0 md:mr-16 lg:mr-0">
          <Image
            src="/app/mobile.png"
            alt="Mobile App Preview"
            width={320}
            height={384}
            className="h-80 md:h-96 w-auto"
          />
        </div>
      </div>
    </>
  );
};

export default Page;
