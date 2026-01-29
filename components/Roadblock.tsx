"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const RoadBlock = () => {
  const seen =
    typeof window !== "undefined"
      ? JSON.parse(sessionStorage.getItem("roadblockseen") || "false")
      : false;

  const [ShowRoadBlock, setShowRoadBlock] = useState<boolean>(!seen);
  const [displayTimeLeft, setDisplayTimeLeft] = useState(10);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

const handleCloseRoadBlock = () => {
  document.body.style.overflow = "auto";
  setShowRoadBlock(false);
  sessionStorage.setItem("roadblockClosedAt", Date.now().toString());
  window.dispatchEvent(new Event("roadblock-closed"));
};


  useEffect(() => {
    if (!seen) {
      sessionStorage.setItem("roadblockseen", JSON.stringify(true));
      document.body.style.overflow = "hidden";
    }
  }, [seen]);

  // Auto close after 15s
  useEffect(() => {
    if (!ShowRoadBlock) return;

    const timer = setTimeout(handleCloseRoadBlock, 15000);
    return () => clearTimeout(timer);
  }, [ShowRoadBlock]);

  // Countdown unlock for X (10s)
  useEffect(() => {
    if (!ShowRoadBlock) return;

    const interval = setInterval(() => {
      setDisplayTimeLeft((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [ShowRoadBlock]);

  // Image logic
  const today = new Date();
  const day = today.getDate();
  const monthNames = [
    "january","february","march","april","may","june",
    "july","august","september","october","november","december",
  ];
  const month = monthNames[today.getMonth()];
  const dailySrc = `/roadblock/${month}/${day}.jpg`;
  const fallbackSrc = "/roadblock/default.jpg";

  useEffect(() => {
    const img = new window.Image();
    img.src = dailySrc;
    img.onload = () => setImageSrc(dailySrc);
    img.onerror = () => setImageSrc(fallbackSrc);
  }, [dailySrc]);

  if (!imageSrc || !ShowRoadBlock) return null;

  return (
    <div className="fixed inset-0 bg-[#d0d7dd] bg-opacity-90 flex items-center justify-center z-9999">
      <div className="relative bg-white rounded-2xl shadow-2xl w-[90vmin] h-[90vmin] p-4 flex items-center justify-center">
        <button
          onClick={() => displayTimeLeft <= 0 && handleCloseRoadBlock()}
          disabled={displayTimeLeft > 0}
          className={`absolute -top-3 -right-3 w-11 h-11 bg-[#055d59] rounded-md text-white font-bold ${
            displayTimeLeft > 0
              ? "cursor-not-allowed opacity-80"
              : "hover:bg-[#044c4a]"
          }`}
        >
          {displayTimeLeft > 0 ? displayTimeLeft : "X"}
        </button>

        <img
          src={imageSrc}
          alt="Advertisement"
          className="w-full h-full object-contain rounded-lg"
        />
      </div>

      <div className="fixed bottom-12 right-5 flex flex-col gap-6">
        <Link href="https://d.sriyog.com/WhatsApp" target="_blank">
          <Image src="/icons/whatsapp.svg" width={40} height={30} alt="WhatsApp" />
        </Link>
        <Link href="tel:+9779852024365">
          <Image src="/icons/phone.svg" width={40} height={30} alt="Phone" />
        </Link>
      </div>
    </div>
  );
};

export default RoadBlock;
