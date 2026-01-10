"use client";

import { useEffect, useState } from "react";
import FloatingIcons from "./FloatingIcons";
import Image from "next/image";
import Link from "next/link";
import { useFloatingIcons } from "@/src/context/FloatingIconContext";



const RoadBlock = ( ) => {
  const seen = typeof window !== "undefined" 
    ? JSON.parse(sessionStorage.getItem("roadblockseen") || "false")
    : false;

  const [ShowRoadBlock, setShowRoadBlock] = useState<boolean>(!seen);

  const handleCloseRoadBlock = () => {
    document.body.style.overflow = "auto";
    setShowRoadBlock(false);
  };

  useEffect(() => {
    if (!seen) {
      sessionStorage.setItem("roadblockseen", JSON.stringify(true));
      document.body.style.overflow = "hidden";
    }
  }, [seen]);
  
  const today = new Date();
  const day = today.getDate();
  const monthNames = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  const month = monthNames[today.getMonth()];

  const fallbackSrc = "/roadblock/default.jpg";
  const dailySrc = `/roadblock/${month}/${day}.jpg`;

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [displayTimeLeft, setDisplayTimeLeft] = useState(10);

  // Preload image to determine whether dailySrc exists
  useEffect(() => {
    const img = new window.Image();
    img.src = dailySrc;
    img.onload = () => setImageSrc(dailySrc);
    img.onerror = () => setImageSrc(fallbackSrc);
  }, [dailySrc, fallbackSrc]);

  // Auto-close after 15 seconds
  useEffect(() => {
    const autoCloseTimer = setTimeout(() => {
      handleCloseRoadBlock();
    }, 15000);
    return () => clearTimeout(autoCloseTimer);
  }, [handleCloseRoadBlock]);

  // Countdown timer for button (10 seconds)
  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setDisplayTimeLeft((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(countdownTimer);
  }, []);

  // Render nothing until we know which image to show
  if (!imageSrc) return null;

  return (
    <>
     {ShowRoadBlock &&
      <div className="fixed inset-0 w-screen h-screen bg-[#d0d7dd] bg-opacity-90 flex items-center justify-center z-9999">
        <div className="relative bg-white rounded-2xl shadow-2xl w-[90vmin] h-[90vmin] max-w-150 max-h-150 p-4 md:p-6 flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={() => displayTimeLeft <= 0 && handleCloseRoadBlock()}
            disabled={displayTimeLeft > 0}
            className={`absolute -top-3 -right-3 w-11 h-11 bg-[#055d59] rounded-md flex items-center justify-center text-white font-bold text-lg shadow-lg z-10 ${
              displayTimeLeft > 0
                ? "cursor-not-allowed opacity-90"
                : "cursor-pointer hover:bg-[#044c4a] hover:scale-105 transition-all"
            }`}
          >
            {displayTimeLeft <= 0 ? "X" : displayTimeLeft}
          </button>

          {/* Image */}
          <div className="w-full h-full">
            <img
              src={imageSrc}
              onError={() => imageSrc !== fallbackSrc && setImageSrc(fallbackSrc)}
              alt="Advertisement"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
        <div className="fixed z-9999 bottom-12 md:bottom-36 right-5 md:right-10 text-center">
          <div className="items-center justify-center flex-col flex gap-6">
            {/* WhatsApp */}
            <Link
              href="https://d.sriyog.com/WhatsApp"
              target="_blank"
              className="group flex flex-col items-center "
            >
              <div className="relative h-7.5 w-10 transition-all duration-700 ease-in-out hover:rotate-120">
                <Image
                  src="/icons/whatsapp.svg"
                  fill
                  priority
                  className="object-contain"
                  alt="WhatsApp"
                />
              </div>
            </Link>

            {/* Phone with continuous pulse animation */}
            <Link
              href="tel:+9779852024365"
              target="_blank"
              className="group flex flex-col items-center "
            >
              <div className="relative h-7.5 w-10 animate-pulse-scale hover:mb-3 transition-all duration-200 ease-in-out">
                <Image
                  src="/icons/phone.svg"
                  fill
                  priority
                  className="object-contain"
                  alt="Phone"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
     }
     </>
  );
};

export default RoadBlock;