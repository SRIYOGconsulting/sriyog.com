import Image from "next/image";
import Link from "next/link";

export default function FloatingIcons() {
  return (
    <div className="fixed z-[999] bottom-36 right-10 text-center">
      <div className="items-center justify-center flex-col flex gap-6">
        {/* WhatsApp */}
        <Link
          href="https://d.sriyog.com/whatsapp"
          target="_blank"
          className="group flex flex-col items-center "
        >
          <div className="relative h-[30px] w-[40px] transition-all duration-700 ease-in-out hover:rotate-[120deg]">
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
          <div className="relative h-[30px] w-[40px] animate-pulse-scale hover:mb-3 transition-all duration-200 ease-in-out">
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
  );
}
