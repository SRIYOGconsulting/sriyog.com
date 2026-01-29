"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [topOpen, setTopOpen] = useState(true);

useEffect(() => {
  setInterval(() => {
    const closedAt = sessionStorage.getItem("roadblockClosedAt");
    if (closedAt) {
      setTimeout(() => {
        setTopOpen(false)
      }, 100);
    }else{
      setTimeout(() => {
        setTopOpen(false)
      }, 10000);
    }
  }, 10000);
  }, []);


  if (!topOpen) return null;

  return (
    <header className="w-full">
      <section className="bg-[#055d59] py-3 text-white">
        <div className="max-w-295 mx-auto flex flex-col md:flex-row items-center justify-center gap-3 px-3 text-sm">
          <i className="text-center">
            Discover skilled professionals all over Nepal—right from one app.
          </i>

          <div className="flex gap-4">
            <Link
              href="https://sriyog.app/"
              target="_blank"
              className="border px-3 py-1 rounded-lg italic hover:bg-white hover:text-[#055d59]"
            >
              View Now
            </Link>

            <button
              onClick={() => setTopOpen(false)}
              className="border w-8 h-8 rounded-lg font-bold hover:bg-white hover:text-[#055d59]"
            >
              X
            </button>
          </div>
        </div>
      </section>
    </header>
  );
}
