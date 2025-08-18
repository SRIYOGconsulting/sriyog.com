import Image from "next/image";
import Link from "next/link";

export default function FloatingIcons() {
  return (
    <div className="fixed z-[9999] bottom-36 right-10 text-center">
      <div className="items-center justify-center flex-col flex gap-6">
        {/* WhatsApp */}
        <Link
          href="https://wa.me/9779852024365?text=Hi%2C%20I%27m%20contacting%20you%20through%20www.sriyog.com.%20"
          target="_blank"
          className="group flex flex-col items-center "
        >
          <div className="relative h-[30px] w-[40px] transition-all duration-700 ease-in-out hover:rotate-[120deg]">
            <Image
              src="/assets/icons/whatsapp-new.svg"
              fill
              priority
              className="object-contain"
              alt="WhatsApp"
            />
          </div>
        </Link>

        {/* Phone with continuous pulse animation */}
        <Link
          href="tel:+9779852025735"
          target="_blank"
          className="group flex flex-col items-center "
        >
          <div className="relative h-[30px] w-[40px] animate-pulse-scale hover:mb-3 transition-all duration-200 ease-in-out">
            <Image
              src="/assets/icons/phone.svg"
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
