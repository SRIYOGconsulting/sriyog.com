"use client";
import Link from "next/link";
import { ReactEventHandler, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
export default function Navbar() {
 
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [reqSupportOpen, setReqSupportOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState("");
  const [selectedSupport, setSelectedSupport] = useState("");
  const dropMenuRef = useRef<HTMLDivElement>(null);
  const hamburger = useRef<HTMLImageElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(e: PointerEvent) {
      const target = e.target as Node;

      if (
        dropMenuRef.current &&
        !dropMenuRef.current.contains(target) &&
        hamburger.current &&
        !hamburger.current.contains(target)
      ) {
        setHamburgerOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);
    return () =>
      document.removeEventListener("pointerdown", handleClickOutside);
  }, []);


  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Team", path: "/team" },
    { label: "Consulting", path: "/consulting" },
    { label: "Pricing", path: "/pricing" },
    { label: "Clients", path: "/clients" },
    { label: "Contact", path: "/contact" },
  ];
  return (
    <>
      <nav className="bg-white w-full sticky top-0 left-0 shadow-sm z-50">
        <section className=" lg:w-[1180px] max-lg:container max-lg:px-3 mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="relative lg:h-[90px] h-[80px] w-[200px] lg:w-[200px]"
          >
            <Image
              src="/header/logo.svg"
              alt="logo"
              fill
              priority
              className="py-3 object-contain"
            />
          </Link>
          <div className="hidden lg:block">
            <ul className="space-x-2 flex">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                  prefetch={true}
                  scroll={true}
                    href={item.path}
                    className={`py-2 px-2 font-bold transition duration-300 ease-in-out ${
                      pathname === item.path
                        ? "text-[#0D5D59]"
                        : "text-[#4b4b4b] hover:text-[#0D5D59]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                 prefetch={true}
                  href="/quote"
                  className="bg-[#0D5D59] px-3 text-white font-semibold rounded-lg p-2 hover:bg-[#2e5250]"
                >
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>
          <section className="hidden max-lg:block">
            <div className="flex items-center gap-x-1">
              <div className="hidden md:block relative h-[50px] w-[50px]">
                <Image
                  src="/header/notification.svg"
                  alt="notification"
                  fill
                  priority
                  className="py-3 object-contain"
                />
              </div>
              <div className="hidden md:block relative h-[50px] w-[50px]">
                <Image
                  src="/header/question.svg"
                  alt="query"
                  fill
                  priority
                  className="py-3 object-contain"
                  onClick={() => setReqSupportOpen(true)}
                />
              </div>
              <div className="relative h-[80px] w-[50px]">
                <Image
                  ref={hamburger}
                  src="/header/hamburger.svg"
                  alt="hamburger"
                  fill
                  priority
                  className="py-3 object-contain"
                  onClick={() => setHamburgerOpen(!hamburgerOpen)}
                />
              </div>
            </div>
          </section>
        </section>

        <section
          className={`transition-all duration-500 ease-in-out bg-white absolute top-0 z-50 w-full overflow-hidden ${
            reqSupportOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <form className="px-5 py-4 space-y-5">
            <div className="flex justify-end">
              <button
                className="text-red-800 text-2xl font-bold rounded-md border px-2"
                onClick={(e) => {
                  e.preventDefault();
                  setReqSupportOpen(false);
                }}
              >
                X
              </button>
            </div>
            <p className="font-semibold text-red-800 text-4xl">
              Request Support
            </p>
            {["full Name", "Name of Organization", "City"].map(
              (placeholder) => (
                <input
                  key={placeholder}
                  placeholder={placeholder}
                  className="px-2 py-3 w-full focus:outline-none border border-[#4b4b4b] rounded-md"
                />
              )
            )}

            <div className="relative w-full border border-[#4b4b4b] rounded-md">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setTechOpen(!techOpen);
                }}
                className="w-full text-left p-2 flex justify-between items-center"
              >
                <span className="text-gray-500">
                  {selectedTech || "Select Technical Issue"}
                </span>
                <span className="relative h-[30px] w-[25px]">
                  <Image
                    src={
                      techOpen
                        ? "/header/dropup.svg"
                        : "/header/dropdown.svg"
                    }
                    alt="drop-down"
                    fill
                    priority
                    className="object-contain"
                  />
                </span>
              </button>
              {techOpen && (
                <ul className="absolute top-full left-0 w-full bg-white border border-[#ccc] z-20 rounded-md shadow-md">
                  {["Issue", "Technical", "Billing", "Other"].map((option) => (
                    <li
                      key={option}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelectedTech(option);
                        setTechOpen(false);
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="relative w-full border border-[#4b4b4b] rounded-md">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setSupportOpen(!supportOpen);
                }}
                className="w-full text-left p-2 flex justify-between items-center"
              >
                <span className="text-gray-500">
                  {selectedSupport || "Select Support Type"}
                </span>
                <span className="relative h-[30px] w-[25px]">
                  <Image
                    src={
                      supportOpen
                        ? "/header/dropup.svg"
                        : "/header/dropdown.svg"
                    }
                    alt="drop-down"
                    fill
                    priority
                    className="object-contain"
                  />
                </span>
              </button>
              {supportOpen && (
                <ul className="absolute top-full left-0 w-full bg-white border border-[#ccc] z-20 rounded-md shadow-md">
                  {["Phone", "Email", "Chat"].map((option) => (
                    <li
                      key={option}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelectedSupport(option);
                        setSupportOpen(false);
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {["Phone", "eMail", "Issue Since", "Department", "Message"].map(
              (placeholder, idx) => (
                <input
                  key={idx}
                  placeholder={placeholder}
                  className={`px-2 ${
                    placeholder === "Message" ? "pt-2 pb-16" : "py-3"
                  } w-full focus:outline-none border border-[#4b4b4b] rounded-md`}
                />
              )
            )}
            <input
              type="submit"
              value="Submit"
              className="px-4 hover:bg-red-800 hover:text-white py-2 border-red-800 rounded-md text-red-800 font-semibold border-2"
            />
          </form>
        </section>

        <section
          ref={dropMenuRef}
          className={`transition-all duration-500 ease-in-out bg-white absolute top-full left-0 w-full overflow-hidden z-50 shadow-md rounded-b-md ${
            hamburgerOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="space-y-3 py-5 text-[20px] font-semibold text-[#4b4b4b] text-center">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                 prefetch={true}
                  href={item.path}
                  className={`font-semibold ${
                    pathname === item.path
                      ? "text-[#0D5D59]"
                      : "text-[#4b4b4b] hover:text-[#0D5D59]"
                  }`}
                  onClick={() => setHamburgerOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/quote"
                 prefetch={true}
                className="bg-[#0D5D59] px-3 text-white font-semibold rounded-lg p-2 hover:bg-[#2e5250]"
              >
                Request a Quote
              </Link>
            </li>
          </ul>
        </section>
      </nav>
    </>
  );
}
