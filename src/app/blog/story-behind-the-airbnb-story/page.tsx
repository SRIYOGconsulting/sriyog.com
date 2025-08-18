import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Story Behind Airbnb",
  description: "Explore the journey of Airbnb from a simple idea to a billion-dollar business.",
  openGraph: {
    title: "The Story Behind Airbnb",
    description: "Explore the journey of Airbnb from a simple idea to a billion-dollar business.",
    url: "https://www.sriyog.com/blog/story-behind-the-airbnb-story",
    images: [
      {
        url: "/assets/images/homepage/hero-banner.jpg",
        alt: "The Story Behind Airbnb"
      }
    ]
  }
}
export default function Airbnb() {
  return (
    <>
      <section className="lg:w-[900px] max-lg:container max-lg:px-3 mx-auto my-[45px] space-y-6">
        <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
          <Image
            src="/assets/images/blog/airbnb-1.jpg"
            alt="things-to-keep-in-website"
            className="object-cover h-full w-full"
            fill
          />
        </div>

        <div>
          <h1 className="font-extrabold text-4xl text-[#055d59] text-center">
            Story behind &quot;the airbnb story&quot; book
          </h1>
          <p className="text-center italic">
            By: Pracas Upreti, Information Technology Consultant
          </p>
          <p className="text-center italic">Published on: March 9, 2020</p>
        </div>

        <p>
          People worked for vision not to change the society but to make a
          Digital Empire to print money, create opportunities and inject few
          things which disrupted an industry but not the thoughts and even
          feelings.
        </p>

        <p className="text-2xl text-gray-500 font-[900]">
          &quot;Zero (0) too has value if it stands after 1 to 9, if it&#39;s
          alone it always becomes a big ZERO.&quot;
        </p>

        <p>
          A business must be bounded by feelings, emotions and thoughts to
          change a society. We created thousands to billion dollars of empire,
          business, startups and a system where people can simply earn from few
          clicks in his/her smartphones. The use of technology has been in rapid
          growth stage that there are thousands of ways to earn, learn and lead
          the life easily. Technology has helped in many ways to get connected,
          either it is to become personal, professional or social. Thousands of
          Mobile Applications, different platforms, Gigabytes of storages and
          many megapixels of front and back camera.
        </p>

        <p>
          Airbnb started with a simple idea to share their homes, unused spaces,
          an airbed and hence a billion dollar business. A true statement says
          that &quot;Thousands of mile journey starts with a first step&quot;
          where they themselves tried, where the idea was in mind, a simple
          thing, available resources and the simple website based on WordPress.
          Focused for International&#39;s Design Conference in 2007, Brian
          Chesky and his co-founder Joe Gebbia started renting their apartment
          with Air-Mattress which is now a billion dollar business. The design
          conference which was held in October 2007 overcrowded city hotels so
          they saw the opportunity to start and solve something.
        </p>

        <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
          <Image
            src="/assets/images/blog/airbnb-2.jpg"
            alt="things-to-keep-in-website"
            className="object-cover h-full w-full"
            fill
          />
        </div>

        <p>
          Airbnb founders Joe Gebbia, Nathan Blecharczyk, and Brian Chesky.{" "}
          <br />
          <br />
          The company now has moved very far ahead of HomeAway, VRBO etc.
          Crossing different and difficult turns, now it has kept its name on
          the top of the home sharing business. The early stage was difficult
          where they e-mailed design blog and conference organizers asking them
          to help promote their website, which they supported. <br />
          <br />
          It was hard to let strangers stay and allocate their own rooms, but
          things went smoothly as people had to trust only by seeing a profile
          and some registered and recorded information.{" "}
          <span className="font-[900]">
            Technology helps to build better technology
          </span>
          . So Airbnb did just that—establishing and implementing new ideas,
          verification systems, beautiful photography, user-friendly UI, and
          more. They once said people would read a book about Airbnb—and now we
          are. They even listed companies whose cultures they wanted to emulate.
        </p>

        <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
          <Image
            src="/assets/images/blog/airbnb-3.jpg"
            alt="things-to-keep-in-website"
            className="object-cover h-full w-full"
            fill
          />
        </div>

        <p>
          In 2013, Airbnb introduced the ID Verification system which enhanced
          identity checks for both hosts and guests. The company built
          behavioral models and used machine learning to develop risk-detection
          tools that analyze reservations. <br />
          <br />
          <span className="text-lg font-[900]">
            &quot;Early to bed, early to rise, and work like hell and
            organize&quot; - Chris Lehane
          </span>
        </p>

        <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
          <Image
            src="/assets/images/blog/airbnb-4.jpg"
            alt="things-to-keep-in-website"
            className="object-cover h-full w-full"
            fill
          />
        </div>

        <p>
          Paris, Barcelona, and Santa Monica, CA have some of the strictest
          policies on who can and can&#39;t rent through Airbnb, while
          Amsterdam, Berlin, London, San Francisco, and New York have looser
          rules. Though Airbnb is a billion-dollar company trusted by millions,
          it is banned in many cities and buildings. Beyond location bans,
          Airbnb also reviews and suspends host accounts for violating
          rules—such as operating multiple accounts, poor ratings, or breaching
          terms of service.
        </p>
      </section>
    </>
  );
}
