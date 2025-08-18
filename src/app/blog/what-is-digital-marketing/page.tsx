import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: "What is Digital Marketing? A Beginner’s Guide to Growing Your Business Online",
  description: "Learn the basics of digital marketing and how it can help your business thrive in the online world.",
  openGraph: {
    title: "What is Digital Marketing?",
    description: "Learn the basics of digital marketing and how it can help your business thrive in the online world.",
    url: "https://www.sriyog.com/blog/what-is-digital-marketing",
    images: [
      {
        url: "/assets/images/og/default.jpg",
        alt: "What is Digital Marketing?"
      }
    ]
  }
}
export default function WhatisDigitalMArketing() {
  return (
    <>
      <section className=" lg:w-[900px] max-lg:container max-lg:px-3 mx-auto my-[45px] space-y-6">
        <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
          <Image
            src="/assets/images/blog/digital-1.1.jpg"
            alt="things-to-keep-in-website"
            className="object-cover h-full w-full"
            fill
          />
        </div>
        <div>
          <h1 className="font-extrabold text-4xl text-[#055d59] text-center">
            What is Digital Marketing? A Beginner’s Guide to Growing Your
            Business Online
          </h1>
          <p className="text-center italic">
            By: Pracas Upreti, Information Technology Consultant
          </p>
          <p className="text-center italic">May 23, 2025</p>
        </div>
        <p>
          In the past, businesses used newspapers, TV, and radio to advertise
          their products. But today, most people spend their time online. That’s
          why digital marketing has become one of the most important tools for
          growing any business. Digital marketing means using the internet to
          promote your brand, sell products, and reach new customers. It
          includes websites, social media, email, search engines, and online
          ads. In this blog, we’ll explain what digital marketing is, how it
          works, and how you can use it to grow your business.
        </p>

        <p>
          Digital marketing is a simple term for any kind of promotion that uses
          the internet. It includes many platforms like Facebook, Instagram,
          Google, YouTube, email newsletters, and websites. A company can share
          information, talk to customers, answer questions, and even sell
          products online. For example, when you see an ad on YouTube or a
          product post on Facebook, that’s digital marketing in action. This
          type of marketing is often cheaper than traditional methods and allows
          you to reach people all over the world.
        </p>

        <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
          <Image
            src="/assets/images/blog/digital-1.2.jpg"
            alt="things-to-keep-in-website"
            className="object-cover h-full w-full"
            fill
          />
        </div>
        <p>
          There are many types of digital marketing. One of the most common is
          **search engine optimization (SEO)**. SEO helps your website appear on
          Google when people search for something related to your product. For
          example, if you sell shoes and someone searches for “best running
          shoes,” SEO helps your site show up on the first page. Another type is
          **social media marketing**. This includes posting on platforms like
          Facebook, Instagram, LinkedIn, and TikTok. Good social media posts
          help build trust, attract followers, and turn viewers into buyers.
        </p>

        <p>
          **Email marketing** is another powerful tool. It means sending useful
          information or promotions directly to people’s inboxes. Businesses
          collect emails through websites or events, and then send newsletters
          or special offers. **Content marketing** is also important. This means
          creating useful blogs, videos, or guides that help people solve
          problems. For example, a beauty brand might write blogs about skincare
          tips. This brings visitors to their site and builds trust. **Paid
          advertising** is also a part of digital marketing. These are the ads
          you see on Google or Facebook. Businesses pay to show their product to
          a targeted group of people.
        </p>

        <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
          <Image
            src="/assets/images/blog/digital-1.3.jpg"
            alt="things-to-keep-in-website"
            className="object-cover h-full w-full"
            fill
          />
        </div>
        <p>
          One big benefit of digital marketing is that it lets you track
          everything. You can see how many people saw your ad, clicked it,
          bought something, or signed up for a service. This helps you improve
          your strategy over time. You can also test different ideas to see what
          works best. For example, you can try two versions of a headline and
          use the one that performs better. Another benefit is that digital
          marketing works for businesses of all sizes. Whether you are a local
          store or a global brand, the tools are available for everyone.
        </p>
        <p>
          To get started with digital marketing, you don’t need a big budget.
          Start by creating a simple website, writing helpful content, and
          posting regularly on social media. Make sure your website is
          mobile-friendly and loads quickly. Learn some basics of SEO to help
          your site show up on Google. Try email marketing by offering a free
          download or discount in exchange for email addresses. Use tools like
          Google Analytics to track your visitors. Slowly, you can grow your
          presence online and reach more people every day.
        </p>

        <p>
          In conclusion, digital marketing is the future of business growth. It
          helps you connect with your audience, share your message, and sell
          your products 24/7. Whether you are a beginner or an expert, the
          internet offers unlimited opportunities. By learning the basics of
          SEO, content marketing, email campaigns, and social media, you can
          build a strong brand online. Start small, stay consistent, and grow
          step by step. Digital marketing is not just a trend — it’s the new way
          to succeed in the modern world.
        </p>
      </section>
    </>
  );
}
