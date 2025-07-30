import Image from "next/image";
import Link from "next/link";

export default function FloatingIcons() {
  return (
    <div className="fixed z-[9999] bottom-36 right-0 text-center">
        
      <div className=" b-2 border-[#4b4b4b] flex gap-2">
        <Link
          href="https://wa.me/9779852024365?text=Hi%2C%20I%27m%20contacting%20you%20through%20www.sriyog.com.%20"
          target="_blank"
          className="group flex flex-col items-center "
        >
          <div className="relative h-[30px] w-[30px] transition-all duration-700 ease-in-out">
            <Image
              src="/assets/icons/whatsapp.svg"
              fill
              priority
              className="object-contain"
              alt="WhatsApp"
            />
          </div>
          <div className="max-h-0 overflow-hidden group-hover:max-h-[50px] transition-all duration-700 ease-in-out">
            <p className="text-[14px] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out">
              SRIYOG
            </p>
          </div>
        </Link>
      </div>

    </div>
  );
}
