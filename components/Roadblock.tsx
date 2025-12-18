"use client";

import { useEffect, useState } from "react";

interface RoadBlockProps {
  onClose: () => void;
}

const RoadBlock: React.FC<RoadBlockProps> = ({ onClose }) => {
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
    const img = new Image();
    img.src = dailySrc;
    img.onload = () => setImageSrc(dailySrc);
    img.onerror = () => setImageSrc(fallbackSrc);
  }, [dailySrc, fallbackSrc]);

  // Auto-close after 15 seconds
  useEffect(() => {
    const autoCloseTimer = setTimeout(() => {
      onClose();
    }, 15000);
    return () => clearTimeout(autoCloseTimer);
  }, [onClose]);

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
    <div className="fixed inset-0 w-screen h-screen bg-[#d0d7dd] bg-opacity-90 flex items-center justify-center z-[9999]">
      <div className="relative bg-white rounded-lg shadow-2xl w-[90vmin] h-[90vmin] max-w-[600px] max-h-[600px] p-4 md:p-6 flex items-center justify-center">
        {/* Close button */}
        <button
          onClick={() => displayTimeLeft <= 0 && onClose()}
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
    </div>
  );
};

export default RoadBlock;