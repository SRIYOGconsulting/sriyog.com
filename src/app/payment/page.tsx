import Link from "next/link";
import Ribbon from "@/components/Ribbon";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Details | SRIYOG Consulting",
  description: "Payment details for SRIYOG Consulting.",
  openGraph: {
    title: "Payment Details | SRIYOG Consulting",
    description: "Payment details for SRIYOG Consulting.",
    url: "https://www.sriyog.com/payment",
    images: [
      {
        url: "/https://sriyog.com/assets/images/og/default.jpg",
        alt: "Payment Details"
      }
    ]
  }
};
const Payment = () => {
  return (
    <>
      <Ribbon name="Payment" des="" />
      <section className="">
        <div>
          <div className="lg:w-[1180px] max-lg:container max-lg:px-3 mb-[45px] mx-auto">
            <div className="flex flex-col flex-nowrap items-center justify-between gap-12 md:flex-wrap md:flex-row md:px-3">
              {/* CONTACT CONTENT */}
              <div className="flex basis-[50%] md:w-full ">
                <div className="inline-block basis-full ">
                  <div className="text-[24px] text-black w-[80%] md:w-full  mb-9">
                    <Image
                      src={"/assets/images/payment/logo.png"}
                      alt="nabil-bank-logo"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="flex flex-col pb-8 gap-3 sm:mb-0">
                    <span className=" inline-block text-[18px] text-black">
                      Account Name: <br />{" "}
                      <strong> Sriyog Consulting Pvt Ltd.</strong>
                    </span>
                    <span className="  text-[18px] text-black">
                      Account number: 00701017502051
                    </span>
                    <span className="  text-[18px] text-black ">
                      Branch: Kathmandu
                    </span>
                    <span className="  text-[18px] text-black">
                      SWIFT CODE: NARBNPKA
                    </span>
                    <span className="  text-[18px] text-black">
                      URL:{" "}
                      <Link href="https://www.nabilbank.com" target="blank" className="underline ">
                        www.nabilbank.com
                      </Link>
                    </span>
                  </div>
                  <div>
                    <span className="text-[24px] ">VAT Number : 606683203</span>
                  </div>
                </div>
              </div>

              {/* CONTACT FORM CONTENT */}
              <div className="flex basis-[35%] border-[1px] w-full border-black rounded-2xl overflow-hidden ">
                <Image
                  className="w-full"
                  width={300}
                  height={300}
                  src="/assets/images/payment/qr.jpeg"
                  alt="nabil-bank-qr"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
