"use client";
import { useState } from "react";
import Link from "next/link";
export default function Header() {
  const [topOpen, setTopOpen] = useState(true);

  return (
    <>
      <header className="w-full h-auto">
        {topOpen && (
          <section className="bg-[#055d59] w-full py-3">
            <div className="lg:max-w-[1180px] max-lg:container max-lg:px-3 mx-auto text-white flex justify-between items-center lg:text-[14px] sm:text-[12px] text-[14px]">
              <div className="flex gap-2">
                <p>Helpline Number</p>
                <Link href="tel:+977-01-4548068">+977-01-4548068</Link>
              </div>
              <div className="gap-2 flex items-center">
                <i className="hidden md:block">
                  SRIYOG App is having its own homepage and a new company.
                </i>
                <Link
                  href="https://sriyog.app/"
                  className="py-[3px] px-1 mx-2 hidden md:block rounded-lg border-[1.5px] italic font-semibold hover:bg-white hover:text-[#055d59] hover:border-white transition-all duration-300 ease-in-out"
                  target="_blank"
                >
                  View Now
                </Link>
                <button
                  onClick={() => setTopOpen(false)}
                  className="border-[1.5px] text-lg w-[30px] h-[30px] rounded-lg font-bold hover:cursor-pointer hover:bg-white hover:text-[#055d59] hover:border-white transition-all duration-300 ease-in-out"
                >
                  X
                </button>
              </div>
            </div>
          </section>
        )}
       
      </header>
    </>
  );
}
