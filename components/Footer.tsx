"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <footer className="border-t border-[#dee2e6] w-full bg-white">
        <section className="lg:w-[1180px] w-full px-4 md:px-6 lg:px-0 mx-auto py-6 flex flex-wrap justify-between  lg:items-end">
          <div className="grid grid-cols-2 pb-4 sm:grid-cols-2 md:grid-cols-4 place-content-between w-full gap-6 text-[#0D5959]  lg:w-[870px]">
            {[
              [
                {
                  label: (
                    <>
                      <Link prefetch={true} href="/welcome">
                        Welcome
                      </Link>
                    </>
                  ),
                },
                {
                  label: (
                    <>
                      <Link prefetch={true} href="/meeting">
                        Book a Meeting
                      </Link>
                    </>
                  ),
                },
                {
                  label: (
                    <>
                      <Link prefetch={true} href="/faq">
                        FAQs&nbsp;
                        
                      </Link>
                    </>
                  ),
                },
                {
                  label: (
                    <>
                      <Link prefetch={true} href="/vmgo">
                        Vision & Mission
                      </Link>
                    </>
                  ),
                },
                {
                  label: (
                    <>
                      <Link prefetch={true} href="/media">
                        Media Coverage
                      </Link>
                    </>
                  ),
                },
                {
                  label: (
                    <Link prefetch={true} href="/career">
                      Career&nbsp;
                      {/* <span className="bg-[#0D5D59] px-[5px] py-[2px] text-[11px] text-white rounded-[3px]">
                        We&apos;re Hiring
                      </span> */}
                    </Link>
                  ),
                },
                {
                  label: (
                    <>
                      <Link prefetch={true} href="/meet">
                        Virtual Meeting&nbsp;
                      <span className="bg-[#0D5D59] px-[5px] py-[2px] text-[11px] text-white rounded-[3px]">
                        Updated
                      </span> 
                      </Link>
                    </>
                  ),
                },
              ],
              [
                 {
                  label: (
                    <>
                      <Link prefetch={true} href="/survey">
                        IT Survey
                      </Link>
                    </>
                  ),
                },
                {
                  label: (
                    <>
                      <Link prefetch={true} href="/timeline">
                        Timeline
                      </Link>
                    </>
                  ),
                },
                {
                  label: (
                    <>
                      <Link prefetch={true} href="/feedback">
                        Feedback
                      </Link>
                    </>
                  ),
                },
                {
                  label: (
                    <>
                      <Link prefetch={true} href="/pitch">
                        Pitch Deck
                      </Link>
                    </>
                  ),
                },
                {
                  label: (
                    <>
                      <Link prefetch={true} href="/internship">
                        Internship&nbsp;
                      
                      </Link>
                    </>
                  ),
                },
                {
                  label: (
                    <>
                      <Link prefetch={true} href="/testimonials">
                        Testimonials
                      </Link>
                    </>
                  ),
                },
                {
                  label: (
                    <>
                      <Link prefetch={true} href="/portfolio">
                        Portfolio
                      </Link>
                    </>
                  ),
                },
              ],
              [
                {
                  label: (
                    <>
                      <Link prefetch={true} href="/trainings">
                         IT Training
                      
                      </Link>
                    </>
                  ),},
                {
                  label: (
                    <Link
                      prefetch={true}
                      href="https://sriyog.app/"
                      target="_blank"
                    >
                      SRIYOG App
                    </Link>
                  ),
                },
                {
                  label: (
                    <>
                      <Link prefetch={true} href="/fonts">
                        JDR Fonts
                      </Link>
                    </>
                  ),
                },
                {
                  label: (
                    <>
                      <Link prefetch={true} href="/certificates">
                        Certificates
                      </Link>
                    </>
                  ),
                },

                {
                  label: (
                    <>
                      <Link prefetch={true} href="/payment">
                        Payment Details
                      </Link>
                    </>
                  ),
                },
                {
                  label: (
                    <>
                      <Link prefetch={true} href="/partners">
                        Partners
                      </Link>
                    </>
                  ),
                },
                {
                  label: (
                    <>
                      <Link prefetch={true} href="/download">
                        Download
                      </Link>
                    </>
                  ),
                },
              ],
              [
                {
                  label: (
                    <>
                      <Link prefetch={true} href="/videos">
                        Videos
                      </Link>
                    </>
                  ),
                },
                {
                  label: (
                    <>
                      <Link prefetch={true} href="/tutorials">
                        Tutorials
                      </Link>
                    </>
                  ),
                },
                {
                  label: (
                    <>
                      <Link prefetch={true} href="/blog">
                        Blog
                      </Link>
                    </>
                  ),
                },

                {
                  label: (
                    <>
                      <Link prefetch={true} href="/disclaimer">
                        Disclaimer
                      </Link>
                    </>
                  ),
                },
                {
                  label: (
                    <>
                      <Link prefetch={true} href="/sitemap.xml" target="_blank">
                        Sitemap
                      </Link>
                    </>
                  ),
                },

                {
                  label: (
                    <>
                      <Link prefetch={true} href="/tos">
                        Terms of Services
                      </Link>
                    </>
                  ),
                },
                {
                  label: (
                    <>
                      <Link prefetch={true} href="/privacy">
                        Privacy Policy
                      </Link>
                    </>
                  ),
                },
              ],
            ].map((group, index) => (
              <ul key={index} className="space-y-3 ">
                {group.map((item, idx) => (
                  <li key={idx + 1}>{item.label}</li>
                ))}
              </ul>
            ))}
          </div>
          <div className="border-t-4 border-[#055D59] w-[300px] pt-2 px-4 sm:px-5 max-w-md mx-auto text-[#0D5959] space-y-4 shadow-sm">
            <div className="relative w-[250px] mx-auto h-[60px] ">
              <Image
                src="/footer/logo.svg"
                fill
                priority
                className="object-contain"
                alt="SRIYOG Consulting Logo"
              />
            </div>
            <div className="flex items-start gap-2">
              <div className="relative w-5 h-5 mt-1">
                <Image
                  src="/footer/location.svg"
                  fill
                  priority
                  className="object-contain"
                  alt="location"
                />
              </div>
              <p>
                Rem.Work, Kamalpokhari
                <br />
                Kathmandu, Nepal
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-6 h-6">
                <Image
                  src="/footer/phone.svg"
                  fill
                  priority
                  className="object-contain"
                  alt="phone"
                />
              </div>
              <p><Link href="tel:+977-01-4548068">+977-01-4548068</Link></p>
            </div>
            <p className="text-sm">Calling Time: 11 AM to 3 PM NPT</p>
            <div className="flex items-center gap-2">
              <div className="relative w-5 h-5">
                <Image
                  src="/footer/mail.svg"
                  fill
                  priority
                  className="object-contain"
                  alt="email"
                />
              </div>
              <Link prefetch={true} href="mailto:info@sriyog.com">
                info@sriyog.com
              </Link>
            </div>
            <Link
              prefetch={true}
              href="/quote"
              className="block mb-4 bg-[#0D5D59] hover:bg-[#2e5250] text-white text-center font-semibold py-2 rounded-lg transition"
            >
              Request a Quote
            </Link>
          </div>
        </section>

        <section className="w-full border-b-24 ">
          <div className="relative max-lg:container max-lg:px-3 w-[50px] h-[40px] lg:w-[1180px] lg:h-[120px] mx-auto">
            <Image
              src="/footer/footer.svg"
              fill
              priority
              className="object-contain"
              alt="footer"
            />
          </div>
        </section>

        <section className="w-full">
          <div className="lg:w-[1180px] my-4 mx-auto max-md:space-y-2 max-lg:container px-3 flex flex-wrap justify-between items-center">
            <p className="text-[14px] max-md:w-full max-md:text-[12px] max-md:text-center">
              All Rights Reserved. © 2018-{year} SRIYOG Consulting
            </p>
            <div className="flex max-md:w-full max-md:justify-center gap-3">
              <Link
                prefetch={true}
                href="https://p.sriyog.app/playcom"
                target="_blank"
              >
                <div className="relative md:h-[50px] h-[60px] w-[130px] md:w-[100px]">
                  <Image
                    src="/footer/google-play.svg"
                    fill
                    priority
                    className="object-contain"
                    alt="play-store"
                  />
                </div>
              </Link>
              <Link
                prefetch={true}
                href="https://p.sriyog.app/ioscom"
                target="_blank"
              >
                <div className="relative md:h-[50px] h-[60px] w-[130px] md:w-[100px]">
                  <Image
                    src="/footer/app-store.svg"
                    fill
                    priority
                    className="object-contain"
                    alt="app-store"
                  />
                </div>
              </Link>
            </div>
            <div className="flex max-md:w-full max-md:justify-center max-md:items-center gap-3">
              <Link prefetch={true} href="https://github.com/SRIYOGconsulting/" target="_blank">
                <div className="relative h-[20px] w-[20px]">
                  <Image
                    src="/icons/github.svg"
                    fill
                    priority
                    className="object-contain"
                    alt="github"
                  />
                </div>
              </Link>
              
              <Link prefetch={true} href="https://d.sriyog.com/whatsapp" target="_blank">
                <div className="relative h-[20px] w-[20px]">
                  <Image
                    src="/footer/whatsapp.svg"
                    fill
                    priority
                    className="object-contain"
                    alt="WhatsApp"
                  />
                </div>
              </Link>
              
              <Link
                prefetch={true}
                href="https://www.facebook.com/sriyog"
                target="_blank"
              >
                <div className="relative h-[20px] w-[20px]">
                  <Image
                    src="/footer/facebook.svg"
                    fill
                    priority
                    className="object-contain"
                    alt="facebook"
                  />
                </div>
              </Link>
              
              <Link
                prefetch={true}
                href="https://www.linkedin.com/company/sriyog-consulting/"
                target="_blank"
              >
                <div className="relative h-[20px] w-[20px]">
                  <Image
                    src="/footer/linkedIn.svg"
                    fill
                    priority
                    className="object-contain"
                    alt="linkedin"
                  />
                </div>
              </Link>
              <Link
                prefetch={true}
                href="https://youtube.com/@sriyogconsulting"
                target="_blank"
              >
                <div className="relative h-[20px] w-[20px]">
                  <Image
                    src="/footer/youtube.svg"
                    fill
                    priority
                    className="object-contain"
                    alt="youtube"
                  />
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="border-3 border-[#055D59] w-full"></section>
      </footer>
    </>
  );
}
