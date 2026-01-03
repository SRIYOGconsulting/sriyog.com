import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Great Hack: How Social Media impacts politics?",
  description: "Explore the influence of social media on politics and elections through the lens of the Cambridge Analytica scandal.",
  openGraph: {
    title: "The Great Hack: How Social Media impacts politics?",
    description: "Explore the influence of social media on politics and elections through the lens of the Cambridge Analytica scandal.",
    url: "https://www.sriyog.com/blog/the-great-hack-how-social-media-impacts-politics",
    images: [
      {
        url: "https://sriyog.com/og/default.jpg",
        alt: "The Great Hack: How Social Media impacts politics?"
      }
    ]
  } 
};

export default function TheGreatHack() {
  return (
    <>
      <section className="lg:w-[900px] max-lg:container max-lg:px-3 mx-auto my-[45px] space-y-6">
        <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
          <Image
            src="/blog/hack-1.jpg"
            alt="things-to-keep-in-website"
            className="object-cover h-full w-full"
            fill
          />
        </div>

        <div>
          <h1 className="font-extrabold text-4xl text-[#055d59] text-center">
            The Great Hack : How Social Media impacts politics?
          </h1>
          <p className="text-center italic">
            By: Pracas Upreti, Information Technology Consultant
          </p>
          <p className="text-center italic">August 3, 2019</p>
        </div>

        <p>
          A great mixture of political and social media influence which shows how few millions of data can be used to win an election of the entire country easily. The Data War and a documentary which has been shown in the such way that it helps to easily understand <span className="font-[900]">how we have been exposed in the digital era</span>. The way we install the apps, allow apps to access the vital information of our phone as well as what we eat, drink, visit, do etc.
        </p>

        <p>
          <Link href="https://en.wikipedia.org/wiki/Cambridge_Analytica" className="text-blue-600 hover:underline">Cambridge</Link> Analytica a British political consulting firm which combined data mining, data brokerage, and data analysis was playing great impact to fluctuate elections for various countries where it has nearly 10 projects a year.
        </p>

        <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
          <Image
            src="/blog/hack-2.jpg"
            alt="things-to-keep-in-website"
            className="object-cover h-full w-full"
            fill
          />
        </div>

        <p>
          The data according to <Link className="text-blue-600 hover:underline" href="https://www.facebook.com/BloombergPolitics/">Bloomberg Politics</Link> shows that <span className="font-[900]">5.9 Millions ads campaigns were made for Donald Trump where Hillary Rodham Clinton has only 66,000.</span> The influence of social media reached in such height where between June and November 2016, <b>Trump spent over $44 Million on the social network platform with Clinton at $28 million.</b> 84% of all the ad budget were used to maintain <b>call-to-action</b>, donating, liking or sharing the post where Clinton used as only 56%.
        </p>

        <p>
          Researchers at Cambridge University psychometrics centre created a app called &quot;this is your digital life&quot; a third party app which was downloaded by nearly 300,000 people which accessed to not only their but their friends&apos; too.
        </p>

        <p>
          Social Media is controlling human brains and in the same way it&apos;s destroying it. Now it is very easy to take a user in control, force them to see the ads, make them like post, comment it, share it, analyze their interest and feelings. Modern methodologies and technologies are there to make, manipulate and train the brain in the way where people are treated as a device, an electronic instrument which anyone can decide what they are forced to make.
        </p>

        <b>Digital Spend by Campaign</b>

        <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
          <Image
            src="/blog/hack-3.jpg"
            alt="things-to-keep-in-website"
            className="object-cover h-full w-full"
            fill
          />
        </div>

        <b>The negative marketing</b>

        <p>
          Cambridge Analytica invented the &quot;Crooked Hillary&quot; moniker used in Trump&apos;s presidential campaign. Millions of videos views were received through Facebook, Google &amp; YouTube which phrase was &quot;<span className="font-[900]">Crooked Hillary</span>&quot; which was linked to an independent organization called &quot;Make America Number 1&quot; so that was not untraceable to the Trump Campaign. A simple <span className="font-[900]">bloodstream</span> of the internet which grew with a little force made great negative impact. &ldquo;The zeros, the OO of crooked were a pair of handcuffs. Those were made in hundreds of different kinds of creative, and were put it online.&rdquo;
        </p>

        <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
          <Image
            src="/blog/hack-4.jpg"
            alt="things-to-keep-in-website"
            className="object-cover h-full w-full"
            fill
          />
        </div>

        <p>
          Cambridge Analytica&rsquo;s CEO, <span className="text-blue-600 hover:underline">Alexander Nix</span> said in one interview said that data was key to behind Trump&apos;s successful campaign. He also said they run all the digital campaign, the television campaign and the data informed all the strategy. Cambridge Analytica harvested the personal data of millions of people&apos;s facebook profiles without their consent and used it for political advertising purposes. A journalist Harry Davies for The Guardian reported that Nix run Cambridge Analytica was working for United States Senator Ted Cruz using data harvested from millions of people&apos;s Facebook accounts without their consent.
        </p>

        <b>THE PLOT</b>

        <p>
          A data scientist named Aleksandr Kogan from Cambridge University, developed an app, which he provided the app to Cambridge Analytica which scrapped data of several hundred thousand Facebook users with a small trick of survey as only for academic use. This was the process where Cambridge Analytica processed all data from millions of Facebook users which was later on managed to analyze the perception and views of voters.
        </p>

        <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
          <Image
            src="/blog/hack-5.jpg"
            alt="things-to-keep-in-website"
            className="object-cover h-full w-full"
            fill
          />
        </div>

        <p>
          The use of Social media in politics is use of social media campaigns, messages, views, images, video promotions to convince, bypass, force, sell emotions in those platforms such as Facebook, YouTube, Pinterest, LinkedIn, Twitter, VK etc. The process and activities that is used to influence to the people and parties geographically to politics and it is involved system to upgrow political values.
        </p>

        <p>
          The internet plays a crucial role in spreading news, bloodstream or creating positive impact which is compared a cheapest and easiest way to promote and criticize anything from a person to a big party <span className="font-[900]">managing from any dark corner of the world targeting any big to small governance and parties.</span>
        </p>
      </section>
    </>
  );
}
