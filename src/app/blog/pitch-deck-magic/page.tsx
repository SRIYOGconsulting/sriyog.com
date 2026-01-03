import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata:Metadata ={
  title:"Pitch Deck Magic : How to create the best pitch deck?",
  description:"Learn the secrets to crafting an effective pitch deck that captivates investors.",
  openGraph: {
    title: "Pitch Deck Magic : How to create the best pitch deck?",
    description: "Learn the secrets to crafting an effective pitch deck that captivates investors.",
    url: "https://www.sriyog.com/blog/pitch-deck-magic",
    images: [
      {
        url: "https://sriyog.com/og/default.jpg",
        alt: "Pitch Deck Magic : How to create the best pitch deck?"
      }
    ]
  }
}
export default function PitchDeck() {
  return (
    <>
      <section className="lg:w-[900px] max-lg:container max-lg:px-3 mx-auto my-[45px] space-y-6">
        <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
          <Image
            src="/blog/pitchdesk-1.jpg"
            alt="things-to-keep-in-website"
            className="object-cover h-full w-full"
            fill
          />
        </div>

        <div>
          <h1 className="font-extrabold text-4xl text-[#055d59] text-center">
            PITCH Deck Magic : How to create the best pitch deck?
          </h1>
          <p className="text-center italic">
            By: Pracas Upreti, Information Technology Consultant
          </p>
          <p className="text-center italic">August 20, 2019</p>
        </div>

        <p>
          Creating pitch deck is the most essential part of startup growth. Few
          number of slides helps to build multinational brands from hundreds to
          billion dollar startup and business has crafted their pitch deck which
          has helped to scale their business. Either you are pitching your angel
          investor or pitching with Accel, Sequoia Capital, Khosla Ventures,
          Andreessen Horowitz, Tiger Global; everyone judges the startup with
          their pitch deck. Limitations of time can be brutal pain to manage
          everything in 3 mins or 5 minutes pitching while covering all topics
          of important pitch deck.
        </p>

        <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
          <Image
            src="/blog/pitchdesk-2.jpg"
            alt="things-to-keep-in-website"
            className="object-cover h-full w-full"
            fill
          />
        </div>

        <p className="text-2xl font-[900]">
          &quot;Venture Capital funds to small, early-stage emerging ideas,
          business or startups which has extreme scalable future.&quot;
        </p>

        <p>
          It is all about creating magic and choosing right things to investors
          who not only trusts you but also he can read future of the startup
          clearly. Major things which are discussed most of the all times are{" "}
          <Link
            href="https://pracas.com.np/entrepreneurship/business-model-canvas/"
            className="text-blue-600 hover:underline font-[900]"
          >
            Business Model Canvas
          </Link>
          , Minimum Viable Products, Business Plan etc. Showing the right pitch
          deck to right person can be a great investor.
          <br />
          <br />
          Copying, Pasting or downloading Pitch deck Template will ruin your
          creativity. Grabbing vision can be great alternative but the same
          thing and replica of AirBnB won&#39;t attract a person pitching in Sri
          Lanka. The format must be same with 10/12 slides, problems, market
          situation, rich graphics, cool colors but photo of{" "}
          <Link
            href="https://en.wikipedia.org/wiki/Masayoshi_Son"
            className="text-blue-600 hover:underline font-[900]"
          >
            Masayoshi Son
          </Link>
          , story of other similar rocked startup or brand will not fetch
          investment.
          <br />
          <br />
          The pitch deck must fit the standard pitching time. The major things
          should be kept at first and minor things later. Good in graphics,
          viewable non stylish fonts, mention everything in details, add a short
          story and avoid long slides, long paragraphs, right animations, no
          long definitions, easy to understand, no jargon words, no welcome
          message or speech.
        </p>

        <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
          <Image
            src="/blog/pitchdesk-3.jpg"
            alt="things-to-keep-in-website"
            className="object-cover h-full w-full"
            fill
          />
        </div>

        <p className="text-lg font-[900]">Keeping in mind:</p>
        <ul className="list-disc px-3 ">
          <li>
            Device Friendly &mdash; The pitch deck must fit multiple operating
            system, version of Windows, Mac or any other targeted devices.
          </li>
          <li>
            Size Friendly : The ratio of projection should be maintained if the
            deck is going to be presented. The 16:9 format will be the good
            option for on screen or projection. (if the projector supports
            rectangle projection)
          </li>
          <li>
            Normal and beautiful fonts &#40; not cursive &#41; &mdash; Fonts
            must be easy to understand and should be viewed by both of the
            persons sitting in the first or last.
          </li>
          <li>
            Lightweight in file size &mdash; The file size must be easy to
            download, share by email &amp; should load faster.
          </li>
          <li>
            Don&#39;t forget to save &quot;PowerPoint slideshow file{" "}
            <span className="text-blue-600 font-900">
              <Link href="https://fileinfo.com/extension/ppsx">ppsx</Link>
            </span>
            &quot; if you are in Windows.
          </li>
          <li>
            Clean and clear &mdash; More clean and more clear can express the
            clear vision of the pitch deck.
          </li>
          <li>
            Source the images &mdash; Linking or mentioning source can be better
            option to use copyright photos.
          </li>
          <li>
            File Format &mdash; Good to be in .pdf format. Sometimes Powerpoint
            format or Keynote can work.
          </li>
        </ul>

        <p className="text-lg font-[900]">Keeping in mind:</p>
        <ul className="list-disc">
          <li>
            Exit strategy : Exit Strategy is known as the point or the time
            where the investor will take his/her chunk and leave the company.
            Mostly angel investors are happy to invest as angel investment. Once
            the business is ready for next series of funding, they exit. This
            strategy should be mentioned properly to show the way or options to
            the investors.
          </li>
          <li>
            Demo and screenshots : Demo of product. i.e. Tangible or intangible.
            Screenshots of products. Android/ iOS links or small animated or
            screen recorded videos of the products.
          </li>
          <li>
            Investment and use of funds : Projection details of the funds.
            Mention how the fund will be invested in the project and what will
            be the profit.
          </li>
        </ul>

        <p>
          The pitch desk must be easy to understand, specific. Adding slogan
          helps to understand the vision of your startup in one sentence like
          &quot;UBER for Part Time Workers&quot;. Not only words but the plans
          and target must be similar to stand along with the brand company.
        </p>

        <p className="font-[900]">
          Create Pitch Online :{" "}
          <span>
            <Link
              className="text-blue-600"
              href="https://slidebean.com/pitch-deck-template"
            >
              SlideBean
            </Link>{" "}
            |{" "}
            <Link
              className="text-blue-600"
              href="https://slidebean.com/pitch-deck-template"
            >
              PitchDeck.io
            </Link>{" "}
            |{" "}
            <Link
              className="text-blue-600"
              href="https://www.canva.com/create/sales-presentations/"
            >
              Canva
            </Link>
            |{" "}
            <Link
              className="text-blue-600"
              href="https://xtensio.com/pitch-deck-template/"
            >
              Xtensio
            </Link>{" "}
            |{" "}
            <Link
              className="text-blue-600"
              href="https://www.slidor.agency/peetch"
            >
              Slidor
            </Link>{" "}
            |{" "}
            <Link className="text-blue-600" href="https://pitchdeckfire.com/">
              Pitch Deck Fire
            </Link>
          </span>
        </p>

        <p className="font-[900]">
          Famous Pitch Deck :{" "}
          <span>
            <Link
              className="text-blue-600"
              href="https://www.slideshare.net/slideshow/facebook-pitch-deck-87761364/87761364"
            >
              FaceBook
            </Link>{" "}
            |{" "}
            <Link
              className="text-blue-600"
              href="https://www.slideshare.net/slideshow/uber-pitch-deck-87832684/87832684"
            >
              Uber
            </Link>{" "}
            |{" "}
            <Link
              className="text-blue-600"
              href="https://www.slideshare.net/slideshow/tesla-investor-presentation-model-s/88233810"
            >
              Tesla
            </Link>{" "}
            |{" "}
            <Link
              className="text-blue-600"
              href="https://www.slideshare.net/slideshow/airbnb-first-pitch-deck-editable/45768374"
            >
              AirBnB
            </Link>{" "}
            |{" "}
            <Link
              className="text-blue-600"
              href="https://www.slideshare.net/AlexanderJarvis/youtube-pitch-deck"
            >
              Youtube
            </Link>{" "}
            |{" "}
            <Link
              className="text-blue-600"
              href="https://www.slideshare.net/webjoe/linkedin-deck-27367069"
            >
              LinkedIn Series B
            </Link>{" "}
            |{" "}
            <Link
              className="text-blue-600"
              href="https://www.slideshare.net/slideshow/how-to-pitch-an-angel/32714896#21"
            >
              Apple
            </Link>{" "}
            |{" "}
            <Link
              className="text-blue-600"
              href="https://www.slideshare.net/AlexanderJarvis/dropbox-seed-stage-pitch-deck"
            >
              DropBox
            </Link>{" "}
            |{" "}
            <Link
              className="text-blue-600"
              href="https://www.slideshare.net/slideshow/tinder-pitch-deck/69837113"
            >
              Tinder
            </Link>
          </span>
        </p>

        <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
          <Image
            src="/blog/pitchdesk-3.jpg"
            alt="things-to-keep-in-website"
            className="object-cover h-full w-full"
            fill
          />
        </div>

        <h1 className="text-lg font-[900]">
          Sequoia Capital Pitch Deck Template :{" "}
          <Link
            className="text-blue-600"
            href="https://www.slideshare.net/slideshow/sequoia-capital-pitchdecktemplate/46231251"
          >
            Click Here
          </Link>
          <p>
            Finally the pitch desk must be easy to understand, specific. Adding
            slogan helps to understand the vision of your startup in one
            sentence like &quot;
            <Link
              href="https://www.slideshare.net/slideshow/sriyogcom-pitch-deck-2019/156253132"
              className="text-blue-600 hover:underline"
            >
              UBER for Part Time Workers
            </Link>
            &quot;. Not only words but the plans and target must be similar to
            stand along with the brand company.
          </p>
        </h1>
      </section>
    </>
  );
}
