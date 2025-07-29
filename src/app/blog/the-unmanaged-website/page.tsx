import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="lg:w-[900px] max-lg:container max-lg:px-3 mx-auto my-[45px] space-y-6">
        <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
          <Image
            src="/assets/images/blog/unmanaged-1.jpg"
            alt="things-to-keep-in-website"
            className="object-cover h-full w-full"
            fill
          />
        </div>

        <div>
          <h1 className="font-extrabold text-4xl text-[#055d59] text-center">
            The unmanaged website
          </h1>
          <p className="text-center italic">
            By: Pracas Upreti, Information Technology Consultant
          </p>
          <p className="text-center italic">Published on: March 9, 2025</p>
        </div>

        <p>
          During my college days at Hyderabad &#40;2000&ndash;2006&#41;, I was keenly interested in making a personal website&mdash;quite a dream back in 2003. Since I couldn&apos;t register my name as prakash@hotmail.com, I changed the &apos;k&apos; to &apos;c&apos; and made pracas@hotmail.com in 2000, which had a 2MB limit. That became my digital identity. After researching domain names using Google, I settled on www.pracas.com &#40;captured by Sedo Parking since 2005&#41;. Net4 India Hyderabad charged me INR 600 to register the domain, marking the beginning of my website journey.
        </p>

        <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
          <Image
            src="/assets/images/blog/unmanaged-2.jpg"
            alt="things-to-keep-in-website"
            className="object-cover h-full w-full"
            fill
          />
        </div>

        <p>
          Being an IT student, most of my time was spent on a desktop gifted to a senior by his elder brother, who worked at <Link href="https://lockheedmartin.com/en-us/index.html/" className="text-blue-600 font-[900]">Lockheed Martin</Link> in the USA.
        </p>

        <p>
          Internet was a luxury then&mdash;only a few had dial-up or DSL. I managed to learn Photoshop 7 and Dreamweaver MX 2004. My sister once gifted me the &apos;Dreamweaver MX 2004 Bible&apos; by <Link href="https://blog.adobe.com/en/authors/joseph-lowery.html" className="text-blue-600 font-[900]">Joseph Lowery</Link> instead of a T-shirt. I read it 13 times to master Dreamweaver.
        </p>

        <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
          <Image
            src="/assets/images/blog/unmanaged-3.jpg"
            alt="things-to-keep-in-website"
            className="object-cover h-full w-full"
            fill
          />
        </div>

        <p>
          I began my tech journey in 2003 and still consider myself a lifelong IT student. I learned about FTP from a senior&apos;s book, and <Link href="https://www.globalscape.com/cuteftp" className="text-blue-600 font-[900] hover:underline">Cute FTP</Link> was the go-to client for file transfer.
        </p>

        <p>
          While traveling from <Link href="https://en.wikipedia.org/wiki/Puttaparthi" className="font-[900] hover:underline text-blue-600 text-lg">Puttaparthi</Link> to Bangalore, I met a co-passenger from <Link href="https://en.wikipedia.org/wiki/Kathmandu" className="text-blue-600 text-lg font-[900] hover:underline">Kathmandu</Link> who introduced me to free hosting platforms. He became one of my inspirations. Over two decades, I&apos;ve been guided and supported by people worldwide in my personal and tech life.
        </p>

        <p>
          In the early 2000s, we used <Link className="text-blue-600 text-lg font-[900] hover:underline" href="https://gist.github.com/msikma/04bfae8670300a12c55937c3b61d670a">Photoshop 7</Link> to slice images and Dreamweaver to manage code. Over time, IT evolved: OS patches, bulky updates, and cloud sync became the norm.
        </p>

        <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
          <Image
            src="/assets/images/blog/unmanaged-4.jpg"
            alt="things-to-keep-in-website"
            className="object-cover h-full w-full"
            fill
          />
        </div>

        <p>
          I&apos;ve registered over 1000 domains and deployed 500+ websites across the USA, Canada, UAE, Ghana, South Africa, and more. As people shifted from PCs to smartphones, design and delivery trends changed drastically.
        </p>

        <p>
          From 2015&ndash;2021, organizations heavily invested in office infrastructure but often neglected digital strategy. A restaurant may invest in interiors but skip websites and apps. In Nepal, few agencies offer business consulting, and it&apos;s tough convincing people to audit their digital presence or IT systems.
        </p>

        <p>
          While in Kathmandu, I found several ministry and corporate websites poorly maintained&mdash;broken images, no SSL, bad ratios&mdash;damaging the country&apos;s image.
        </p>

        <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
          <Image
            src="/assets/images/blog/unmanaged-5.jpg"
            alt="things-to-keep-in-website"
            className="object-cover h-full w-full"
            fill
          />
        </div>

        <p>
          Web design blends logic and creativity. Today&apos;s websites need features like:
        </p>

        <ul className="list-disc pl-3">
          <li>OG Protocol</li>
          <li>Call to Action Button</li>
          <li>Favicon</li>
          <li>SSL Certificate</li>
          <li>Proper use of Title and Meta Description</li>
          <li>Avoiding cursive writing fonts</li>
          <li>Search Engine Friendly Tags</li>
          <li>Contact Forms</li>
          <li>Google RankBrain-compliant coding</li>
          <li>Optimized image sizes</li>
          <li>Social Media Integration</li>
          <li>Images with proper aspect ratios</li>
          <li>Proper use of CSS tags</li>
          <li>Hosting location &amp; server load</li>
          <li>Bandwidth considerations</li>
        </ul>

        <p>
          Managing these basics creates a strong first impression. Websites are an organization&apos;s front door. While mobile apps are optional, a website is essential and must be managed properly.
        </p>

        <p>
          Every website is a gateway to information. In the past, even checking SLC results online wasn&apos;t possible. Now, with even basic <span className="text-lg font-[900]">NOKIA</span> phones, people can access online services, thanks to tech advancement.
        </p>
      </section>
    </>
  );
}
