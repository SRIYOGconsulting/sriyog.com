import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | SRIYOG Consulting",
  description: "Stay updated with the latest insights and trends in UI/UX, SEO, and Digital Marketing.",
  openGraph: {
    title: "Blog | SRIYOG Consulting",
    description: "Stay updated with the latest insights and trends in UI/UX, SEO, and Digital Marketing.",
    url: "https://www.sriyog.com/blog",
    images: [
      {
        url: "https://sriyog.com/og/default.jpg",
        alt: "SRIYOG Blog"
      }
    ]
  }
};
export default function BlogPage() {
  const footerCards = [
    {
      id: 1,
      title: "Top 5 UI/UX Tips to Make Your Website Look Better",
      image: "/blog/UI-UX-3.0.jpg",
      date: "24 DEC 2024",
      views: "13K VIEWS",
      category: "UI/UX",
      path: "blog/top-five-ui-ux-tips",
    },
    {
      id: 2,
      title: "What is UI/UX Design? A Beginner’s Guide",
      image: "/blog/UI-UX-1.0.jpg",
      date: "26 JUNE 2025",
      views: "14K VIEWS",
      category: "UI/UX",
      path: "blog/what-is-UI-UX-design",
    },
    {
      id: 3,
      title: "Why Good UI/UX Design Matters for Any Website or App",
      image: "/blog/UI-UX-2.0.jpg",
      date: "13 JAN 2025",
      views: "23K VIEWS ",
      category: "UI/UX",
      path: "blog/why-good-ui-ux-matters",
    },
    {
      id: 4,
      title: "What is SEO and Why Is It Important for Your Website?",
      image: "/blog/SEO-1.0.jpg",
      date: "17 FEB 2025",
      views: "3K VIEWS",
      category: "SEO",
      path: "blog/what-is-seo-and-its-important",
    },
    {
      id: 5,
      title: "     SEO Techniques That Really Work in 2025     ",
      image: "/blog/SEO-2.0.jpg",
      date: "10 FEB 2025",
      views: "4.1K VIEWS",
      category: "SEO",
      path: "blog/seo-techniques-that-really-work",
    },
    {
      id: 6,
      title: "How to Do Keyword Research for SEO: A Step-by-Step Guide  ",
      image: "/blog/SEO-3.0.jpg",
      date: "29 APRIL 2025",
      views: "2.2K VIEWS",
      category: "SEO",
      path: "blog/how-to-do-keyword-research-for-seo",
    },

    {
      id: 7,
      title:
        " What is Digital Marketing? A Beginner’s Guide to Growing Your Business Online",
      image: "/blog/digital-1.1.jpg",
      date: "23 MAY 2025",
      views: "23K VIEWS ",
      category: "Digital Marketing",
      path: "blog/what-is-digital-marketing",
    },
    {
      id: 8,
      title: "How SEO Helps Your Digital Marketing Strategy",
      image: "/blog/digital-3.0.jpg",
      date: "21 JAN 2025",
      views: "5K VIEWS ",
      category: "Digital Marketing",
      path: "blog/how-seo-helps-your-digital-marketing-strategy",
    },
    {
      id: 9,
      title: "The Importance of Social Media in Digital Marketing",
      image: "/blog/digital-2.0.jpg",
      date: "08 AUGUST 2025",
      views: "2K VIEWS",
      category: "Digital Marketing",
      path: "blog/the-importance-of-social-media",
    },
  ];
  const bottomCards = [
    {
      id: 1,
      title: "The Great Hack: How Social Media impacts politics?",
      image: "/blog/hack-1.jpg",
      desc: "A great mixture of political and social media influence which shows how few millions of data can be used to win an election of the entire country easily.",
      path: "blog/the-great-hack-how-social-media-impacts-politics",
    },
    {
      id: 2,
      title: "20 Books that can change you",
      image: "/blog/4.jpg",
      desc: "Life is all about creating news things, changing the world. It depends upon a passion, dedication, a good mentorship, effective plan, good investment and must have a vision to serve the community.",
      path: "blog/20-books-that-can-change-you",
    },
  ];
  const cards = [
    {
      id: 1,
      title: "16-60 Theory : Design your best life",
      image: "/blog/lifedesign-1.jpg",
      category: "Lifestyle",
      desc: " We have always seen that fish mostly lies in two places, i.e. River and Aquarium. A fish living in aquarium has regular food, well maintained (artificial) ... ",
      date: "27 August 2025",
      views: "25k VIEWS",
      read: "4 Mins Read",
      isCenter: false,
      path: "blog/design-your-life",
    },
    {
      id: 2,
      title: 'Story behind "the airbnb story"​ book',
      image: "/blog/airbnb-1.jpg",
      category: "Hotels",
      desc: "People worked for vision not to change the society but to make a Digital Empire to print money, create opportunities and inject few things which disrupted an industry but not the thoughts and even feelings.",
      date: "18 August 2025",
      views: "25k VIEWS",
      read: "3 Mins Read",
      isCenter: true,
      path: "blog/story-behind-the-airbnb-story",
    },
    {
      id: 3,
      title: "Project Ideas Around the House",
      image: "/blog/pitchdesk-1.jpg",
      category: "Lifestyle",
      desc: " Creating pitch deck is the most essential part of startup growth. Few number of slides helps to build multinational brands from hundreds...",
      date: "27 August 2025",
      views: "25k VIEWS",
      read: "2 Mins Read",
      isCenter: false,
      path: "blog/pitch-deck-magic",
    },
  ];
  return (
    <>
      {/* Top Blog Grid */}
      <section className="w-full md:max-w-[1180px] mx-auto px-0 md:px-0 pt-10 mb-[45px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Blog Card 1 */}

          <Link
            href="blog/21-stages-of-web-development"
            className="h-[270px] lg:h-[560px] lg:col-span-2 lg:row-span-2 rounded-lg overflow-hidden"
          >
            <div className="relative group h-full w-full">
              <Image
                src="/homepage/blog/web-development-stages.jpeg"
                alt="blog-1"
                className="object-cover group-hover:scale-110 transition duration-500 ease-in-out"
                fill
                sizes="100vw"
                priority
              />
              <div className="absolute p-4 z-10 bottom-0 bg-gradient-to-t from-black/85 via-black/70 to-transparent text-white w-full">
                <section className="flex gap-4 text-sm mb-1">
                  <p>Web Dev</p>
                  <p>
                    2<sup>nd</sup> April , 2025
                  </p>
                </section>
                <p className="text-2xl translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  21 Stages of Web Development
                </p>
                <section className="text-sm max-h-0 translate-y-3 group-hover:translate-y-0 group-hover:max-h-28 transition-all duration-500 ease-in-out">
                  <p className="my-2">
                    Having a website makes a business cross the boundaries and
                    can cater its products, services or brand image globally.
                  </p>
                  <p className="text-sm">PRACAS Upreti</p>
                  <p className="text-sm">CTO</p>
                </section>
              </div>
            </div>
          </Link>

          {/* Blog Card 2 */}
          <Link
            href="blog/corporate-email"
            className="h-[270px] lg:col-span-2 rounded-lg overflow-hidden"
          >
            <div className="relative group h-full w-full">
              <Image
                src="/homepage/blog/corporate-email.png"
                alt="blog-2"
                className="object-fill group-hover:scale-110 transition duration-500 ease-in-out"
                fill
                sizes="100vw"
                priority
              />
              <div className="absolute p-4 z-10 bottom-0 bg-gradient-to-t from-black/85 via-black/70 to-transparent text-white w-full">
                <section className="flex gap-4 text-sm mb-1">
                  <p>Email</p>
                  <p>
                    27<sup>nd</sup> December , 2025
                  </p>
                </section>
                <p className="text-2xl translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  What is a Corporate/Business eMail?
                </p>
                <section className="text-sm max-h-0 translate-y-3 group-hover:translate-y-0 group-hover:max-h-36 transition-all duration-500 ease-in-out">
                  <p className="my-2">
                    Corporate emails tied to a custom domain shape a
                    company&apos;s identity and credibility.
                  </p>
                  <p className="text-sm">Lalita Ghimire</p>
                  <p className="text-sm">React JS Developer</p>
                </section>
              </div>
            </div>
          </Link>

          {/* Blog Card 3 */}
          <Link
            href="blog/things-to-keep-in-business-website"
            className="h-[270px] rounded-lg overflow-hidden"
          >
            <div className="relative group h-full w-full">
              <Image
                src="/homepage/blog/things-to-keep-in-website.png"
                alt="blog-3"
                fill
                sizes="100vw"
                className="object-cover group-hover:scale-110 transition duration-500 ease-in-out"
                priority
              />
              <div className="absolute p-4 z-10 bottom-0 bg-gradient-to-t from-black/85 via-black/70 to-transparent text-white w-full">
                <section className="flex gap-4 mb-1 text-sm">
                  <p>Technology</p>
                  <p>
                    1<sup>st</sup> January, 2025
                  </p>
                </section>
                <p className="text-2xl translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  Things to Keep in Business Website
                </p>
                <section className="text-sm max-h-0 translate-y-3 group-hover:translate-y-0 group-hover:max-h-36 transition-all duration-500 ease-in-out">
                  <p className="my-2">
                    A website is a collection of related web pages accessible
                    online.
                  </p>
                  <p className="text-sm">Niranjan Sharma</p>
                  <p className="text-sm">Project Manager</p>
                </section>
              </div>
            </div>
          </Link>

          {/* Blog Card 4 */}
          <Link
            href="blog/essential-things-to-keep-in-the-website"
            className="h-[270px] rounded-lg overflow-hidden"
          >
            <div className="relative group h-full w-full">
              <Image
                src="/homepage/blog/essesntial-things-to-keep-on-website.png"
                alt="blog-4"
                fill
                sizes="100vw"
                className="object-cover group-hover:scale-110 transition duration-500 ease-in-out"
                priority
              />
              <div className="absolute p-4 z-10 bottom-0 bg-gradient-to-t from-black/85 via-black/70 to-transparent text-white w-full">
                <section className="flex gap-4 mb-1 text-sm">
                  <p>Web</p>
                  <p>
                    28<sup>th</sup> August, 2019
                  </p>
                </section>
                <p className="text-xl translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  Essential Things to Keep in the Website
                </p>
                <section className="text-sm max-h-0 translate-y-4 group-hover:max-h-36 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  <p className="my-2">
                    Websites aren&apos;t just layouts — they reflect brand and
                    function too.
                  </p>
                  <p className="text-sm">Madan Tamang</p>
                  <p className="text-sm">Web Developer</p>
                </section>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Two Column Blog Feature */}
      <section className="max-w-[1180px] mx-auto px-6: md:px-0 mb-[45px] ">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column */}
          <div className="md:w-1/2 border border-gray-300 p-4 shadow-lg rounded-lg">
            <Image
              src="/homepage/blog/corporate-email.png"
              width={500}
              height={300}
              alt="corporate-email"
              className="w-full rounded-lg"
            />
            <h1 className="text-lg font-bold mt-4">
              What is Corporate/Business eMail?
            </h1>
            <p className="text-sm mt-2 mb-3">
              In today&apos;s competitive business environment, professional
              email branding is key to credibility.
            </p>
            <Link
              href="blog/corporate-email"
              className="inline-block mt-3 border border-gray-500 px-3 py-1 rounded-md text-sm"
            >
              Read More
            </Link>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 flex flex-col gap-5">
            {/* Top */}
            <div className="flex gap-4 shadow-lg p-4 rounded-lg">
              <div className="flex-1 text-sm">
                <h1 className="text-lg font-bold">
                  Digital Dashain : Practicing FinTech in family.
                </h1>
                <p className="mt-2">
                  Dashain, festival of victory and in another hand a charm of
                  Durga Puja, holidays in Nepal, Ravana Dahan in India and this
                  is celebrated as Navaratri
                </p>
                <Link
                  href="blog/digital-dashain"
                  className="inline-block mt-3 border border-gray-500 px-3 py-1 rounded-md text-sm"
                >
                  Read More
                </Link>
              </div>
              <Image
                src="/blog/dashain-1.jpg"
                width={150}
                height={250}
                alt="things-to-keep"
                className="object-cover h-[200px] rounded-md"
              />
            </div>

            {/* Bottom */}
            <div className="flex gap-4 shadow-lg p-4 rounded-lg">
              <div className="flex-1 text-sm">
                <h1 className="text-lg font-bold">
                  Pegasus Spyware – You Are Hacked
                </h1>
                <p className="mt-2">
                  Just two decades ago, basic phones ruled Nepal. Today, spyware
                  and hacking threats are part of our digital reality.
                </p>
                <Link
                  href="blog/pegasus-sypyware"
                  className="inline-block mt-3 border border-gray-500 px-3 py-1 rounded-md text-sm"
                >
                  Read More
                </Link>
              </div>
              <Image
                src="/blog/5.jpg"
                width={150}
                height={150}
                alt="pegasus"
                className="object-cover h-[200px] rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 md:max-w-[1180px] md:px-0 mx-auto mb-[45px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-2 items-stretch justify-between  lg:px-0">
          {cards.map((item) => (
            <Link
              href={item.path}
              key={item.id}
              className={`${
                item.isCenter ? "scale-[1.05]" : ""
              } w-full md:max-w-[350px] shadow-xl transition-all duration-100 ease-in-out border-gray-400 pb-4 rounded-md `}
            >
              <div className="w-full ">
                <Image
                  src={item.image}
                  width={350}
                  height={250}
                  alt={item.title}
                  className="w-full h-[343px] rounded-t-md sm:h-[250px] object-cover"
                />
              </div>
              <div className="px-4">
                <p
                  className={`${
                    item.category === "Lifestyle"
                      ? "text-green-700"
                      : "text-red-600"
                  } font-[700] mt-4`}
                >
                  {item.category}.
                </p>
                <h1 className="font-[800] text-xl h-[60px] mt-1 ">
                  {item.title}
                </h1>
                <p className="text-sm text-gray-700 mt-2 h-[80px] ">
                  {item.desc}
                </p>

                <div className="flex text-sm text-gray-700 gap-4 mt-4">
                  <p>{item.date}</p>
                  <p>{item.read}</p>
                  {/* <p>{item.views}</p> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/*Bottom cards */}
      <section className="max-w-[1180px]  mx-auto  px-6 md:px-0 mb-[45px] flex flex-col md:flex-row gap-7 ">
        {bottomCards.map((item) => (
          <div key={item.id} className=" w-full md:max-w-[50%] shadow-sm">
            <div className="w-full ">
              <Image
                src={item.image}
                width={600}
                height={500}
                alt={item.image}
                className="h-[300px] rounded-t-md"
              />
            </div>
            <div className="px-2 pb-2 border-gray-200 border  ">
              <h1 className="text-xl font-[800] mt-2">{item.title}</h1>
              <p className="mt-2 text-sm">{item.desc}</p>
              <Link
                href={item.path}
                className="inline-block mt-3 border border-gray-500 px-3 py-1 rounded-md text-sm"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </section>
      {/*Different blogs */}
      <section className="w-full px-6 md:max-w-[1180px] md:px-0 mx-auto mb-[45px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["UI/UX", "SEO", "Digital Marketing"].map((category) => (
            <div key={category}>
              <h2 className="text-xl font-bold mb-4 uppercase">{category}</h2>
              <hr className="w-[20%] rounded-full border-none outline-none bg-gray-500 h-1 mb-2 -mt-3" />
              <div className="flex flex-col gap-4 border-t pt-3 border-gray-400">
                {footerCards
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <Link
                      href={item.path}
                      key={item.id}
                      className="flex gap-4  "
                    >
                      <Image
                        src={item.image}
                        width={120}
                        height={90}
                        alt={item.title}
                        className="rounded-md object-cover w-[120px] h-[90px] shrink-0"
                      />
                      <div className="flex flex-col justify-between ">
                        <h3 className="text-base font-semibold leading-snug line-clamp-2">
                          {item.title}
                        </h3>
                        <div className="text-sm text-gray-500 flex gap-3 mt-2">
                          <p>{item.date}</p>
                          {/* <p>{item.views}</p> */}
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
