"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function Header() {
  const [topOpen, setTopOpen] = useState(true);
  return (
    <>
      <header className="w-full h-auto">
        {topOpen && (
          <section className="bg-[#055d59] w-full py-3">
            <div className="lg:max-w-[1180px] max-lg:container max-lg:px-3 mx-auto text-white lg:text-[14px] sm:text-[12px] text-[14px]">
              <div className="flex md:flex-row flex-col md:items-center items-center md:gap-2 gap-3 md:justify-center">
                <i className="block md:text-left text-center w-full md:w-auto">
                  Discover skilled professionals all over Nepal—right from one app. Download the SRIYOG App today.
                </i>
                <div className="flex items-center gap-5 justify-center mt-1 md:mt-0">
                  <Link
                    href="https://sriyog.app/"
                    className="py-[3px] px-3 rounded-lg border-[1.5px] italic font-semibold hover:bg-white hover:text-[#055d59] hover:border-white transition-all duration-300 ease-in-out whitespace-nowrap"
                    target="_blank"
                  >
                    View Now
                  </Link>
                  <button
                    onClick={() => setTopOpen(false)}
                    className="border-[1.5px] text-lg w-[30px] h-[30px] rounded-lg font-bold hover:cursor-pointer hover:bg-white hover:text-[#055d59] hover:border-white transition-all duration-300 ease-in-out flex-shrink-0"
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
       
      </header>
    </>
  );
}
