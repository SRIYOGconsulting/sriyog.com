import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata:Metadata ={
  title:"Essential Things To Keep In The Website | SRIYOG Consulting",
  description:"Key elements and best practices for creating a successful website.",
  openGraph: {
    title: "Essential Things To Keep In The Website | SRIYOG Consulting",
    description: "Key elements and best practices for creating a successful website.",
    url: "https://www.sriyog.com/blog/essential-things-to-keep-in-the-website",
    images: [
      {
        url: "https://sriyog.com/assets/images/og/default.jpg",
        alt: "Essential Things To Keep In The Website | SRIYOG Consulting"
      }
    ]
  }
}
export default function Ettkitw() {
  return (
    <>
      <section className=" lg:w-[900px] max-lg:container max-lg:px-3 mx-auto my-[45px] space-y-6">
        <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
          <Image
            src="/assets/images/homepage/blog/essesntial-things-to-keep-on-website.png"
            alt="essesntial-things-to-keep-on-website"
            className="object-cover h-full w-full"
            fill
          />
        </div>
        <div>
          <h1 className="font-extrabold text-4xl text-[#055d59] text-center">
            Essential things to Keep in the Website
          </h1>
          <p className="text-center italic">
            By: Pracas Upreti, Information Technology Consultant
          </p>
          <p className="text-center italic">Published on: August 28, 2019</p>
        </div>
        <p>
          {" "}
          A website is not only the few lines of code or beautiful layout.
          Simple websites can be built in few few hours to few days and months
          too. Following major talent is needed to complete a website. Like a
          pro team, pro website needs to be made professional as per as the
          need. Website development cost is very less amount as compared with
          the status, fastest advertising method, easy to get books, forms,
          download, reading publications, news & events etc.
        </p>
        <ul className="list-disc space-y-6 px-3">
          <li>
            Domain Registrar - A person who registers domain name personally,
            can be a domain manager, or any company who sells domain like
            <Link
              href="https://www.godaddy.com/en-in"
              className="text-blue-600"
              target="_blank"
            >
              {" "}
              Godaddy
            </Link>
            ,
            <Link
              href="https://www.namesilo.com/"
              className="text-blue-600"
              target="_blank"
            >
              {" "}
              NameSilo
            </Link>
            ,
            <Link
              href="https://www.namecheap.com/"
              className="text-blue-600"
              target="_blank"
            >
              {" "}
              NameCheap
            </Link>
            ,
            <Link
              href="https://www.cloudflare.com/"
              className="text-blue-600"
              target="_blank"
            >
              {" "}
              CloudFlare
            </Link>{" "}
            etc.
          </li>
          <li>
            Web Host Manager - A person who allocated web hosting space in any
            dedicated, VPS, Reseller, Shared, Grid or hosts website in Raspberry
            Pi based home server.
          </li>
          <li>
            UX/UI Designer : Making catchy and appealing looks, a person who
            thinks a lot with viewers perspective and makes website layout.
          </li>
        </ul>
        <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
          <Image
            src="/assets/images/homepage/blog/uiux-design.jpg"
            alt="uiux-design"
            className="object-cover h-full w-full"
            fill
          />
        </div>
        <ul className="list-disc space-y-6 px-3">
          <li>
            {" "}
            Developer : The designed layout needs to export in HTML/CSS format
            so developer can make it responsive format, add code, maps, embeds
            files and more.
          </li>
          <li>
            SEO Manager : Google loves unique, elegant, clean code, speed
            loading website, so the website must have proper title, header tags
            managed properly, alt tags for images, unique and friendlier content
            must be maintained to get good rank in Google and other search
            engines.
          </li>
          <li>
            QA Tester : Ensuring quality is the most crucial part of website
            when it is ready to upload. Even a small mistake can ruin the
            business.
          </li>
          <li className="list-none text-3xl font-extrabold text-gray-600">
            Major things to manage in website :
          </li>
          <li>
            Form with captcha - Forms are basically placed in logins, contact
            page, subscription page, user signin process.Bots can be very great
            pain for forms, they can create users, flood subscription, attack
            login pages. This can be skipped or saved with Captcha. Google
            provides the best option of{" "}
            <Link
              className="text-blue-600 "
              href="https://en.wikipedia.org/wiki/CAPTCHA"
              target="_blank"
            >
              Captcha
            </Link>{" "}
            service as{" "}
            <Link
              className="text-blue-600 "
              href="https://cloud.google.com/security/products/recaptcha"
              target="_blank"
            >
              reCaptcha
            </Link>
            .
          </li>
          <li className="list-none">
            <div className="relative w-full md:h-[450px] h-[250px] ">
              <Image
                src="/assets/images/homepage/blog/capcha.png"
                alt="capcha"
                className="object-contain h-full w-full"
                fill
              />
            </div>
          </li>
          <li>
            {" "}
            Flickr Imaging : Storing photos in Flickr will keep original file
            size and it can be downloaded in multiple sizes as per as our needs.
            Embedding Flickr photos to any html website/ WordPress based website
            is very easier. Not only it saves photos, but it also saves loading
            time of website, options to see images, download images and even
            easier to print in future.
          </li>
          <li>
            Google Analytics : It helps to show the exact stats, the details
            from where the visitors are coming in the website, list of keywords,
            dwelling time in website, tree, bounce rate, current users and data
            of visitors, device type and more information which is the essential
            part of every business/ startup and for webmaster too.
          </li>
          <li>
            TAWK : Free chat system which can automatically welcome visitors,
            chat directly with them from website, monitor visitor source
            country, know the IP Address, can convert chat to tickets, managing
            knowledge based system to trigger the link of website of any
            message. It is similar like welcoming visitors from backend side so
            it can be easier for anyone to get instant answer or confirmation.
          </li>
          <li>
            Phone Calling Link (tel): Mobile can be first or second source of
            website traffic, when someone visits contact page to find phone
            number, he may needs to copy the number to dial from dial pad. The
            phone calling link is similar like hyperlink, email link e.g.{" "}
            <Link
              href="tel:98520-25735"
              className="text-blue-600"
              target="_blank"
            >
              (977) 98520-25735
            </Link>{" "}
            which can automatically dial phone numbers directly from any html
            page opening dial pad.
          </li>
          <li>
            Location Map - Placing exact location map in the website makes
            visitor easy to reach mentioned location which avoids duplicates,
            confusion of address, seeing nearest landmark and more it can help
            to find location in click. Sending location in WhatsApp, Messenger,
            Viber can be trouble everytime whenever someone visits the premises.
          </li>
          <li className="list-none">
            <div className="relative w-full md:h-[450px] h-[250px] ">
              <Image
                src="/assets/images/homepage/blog/web-app.png"
                alt="web-app"
                className="object-contain h-full w-full"
                fill
              />
            </div>
          </li>

          <li>
            {" "}
            404 error pages - It mostly occurs when website is redesigned with
            new links, lost links or any links which path has changed. Any 404
            page with filename .php,html,htm,jsp can be read by managed by
            .htaccess so show as 404 error page which displays messages like
            page is missing, lost and has option of redirecting to homepage or
            contact page. Blank pages are bad option for Google SEO rank.
          </li>
          <li>
            Favicon : A small icon which is displayed in browser bar. .ico file,
            png or jpg now a days are displayed with company logo, symbol or can
            be a pic of blogger in any website / blog/ news website / shopping
            carts or anywhere which makes easier to identify the webpage when
            title of website are hidden when multiple tabs are opened.
          </li>
          <li>
            OG Protocol : OG Protocol is the best option to enable rich object
            in a social graph. Social media pulls OG Protocol data to show the
            details of Title, Type, Image, URL etc. It shows the structured data
            when someone shares link in Facebook Post. The options can be Basic
            Metadata, Optional Metadata, Structured Properties, Arrays, Object
            Types, Video. The protocol was originally created at Facebook which
            is inspired by Dublin Core.
          </li>
          <li>
            Authors Name : Best ways to post article, blog, news, event details
            or any personal thoughts to official blog post helps increase to
            reach more audience. This can be managed by placing authors code in
            meta section.
          </li>
          <li>
            CloudFlare : CloudFlare is not web hosting company. It helps to
            speed website by placing multiple nodes. When someone from Kathmandu
            browses a website, the website is accessed by its server located in
            for e.g. France. When someone from Biratnagar browses website,
            CloudFlare shows the cached data from Kathmandu node. It helps to
            speed up website loading speed. Secures from DDOS attacks and has
            many options to secure, speed, manage website.
          </li>
          <li className="list-none">
            <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden">
              <Image
                src="/assets/images/homepage/blog/cloudfare.jpg"
                alt="cloudfare"
                className="object-cover h-full w-full"
                fill
              />
            </div>
          </li>
          <li>
            {" "}
            Google Tag Manager in all websites : JavaScript and HTML tags are
            used for tracking and analyzing website. The tag management system
            is created by Google. Snippets of code of tracking pixels are
            deployed to manage marketing tags. Differentiating Google Tag
            Manager and Google Analytics is GTM is inserted in website including
            analytics tags which takes data from website and sends it to Google
            Analytics then analyzes, tracks, monitors data.
          </li>
          <li>
            Head , Meta, Description, Keywords : Options to let know search
            engine robots, crawlers to know your website strength, matching
            keywords, alt tags in images, description of page helps to get good
            ranks in search engine optimization which plays great role in
            backend. Rankbrain is Google new Machine learning based search
            engine algorithm, which was confirmed by Google on 26 October 2015
            which processes search results to provide the exact or relevant
            results to search queries. The website must be good in managing
            head, meta, description, keywords.
          </li>
          <li>
            ALT Tags for images & hyperlinks : Whenever someone searches
            &quot;Steve Jobs&quot; in Google Images, Google shows the result
            from it&apos;s stored images whose file names are mentioned as
            &quot;Steve Jobs&quot;. The new algorithm of Face Detection
            technology has helped to identify and show results of images in its
            image search result. Inserting alt tags helps to identify and this
            is good option to be showcased result in Google Image search result.
          </li>
          <li className="list-none">
            <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
              <Image
                src="/assets/images/homepage/blog/contact-from-mailer.jpg"
                alt="contact-from-mailer"
                className="object-cover h-full w-full"
                fill
              />
            </div>
          </li>
          <li>
            {" "}
            Contact Form Mailer : Form mailer helps to avoid writing messages
            from Web Based email system like Gmail, Hotmail, Yahoo. A short and
            sweet message can be directly sent from contact page or any page
            where form has been embedded or scripted. This can be simple 3/4 box
            form with multiple option of forms to get subscribe, send resume,
            forms for application or option of collecting large information.
          </li>
          <li>
            Business eMail : When a businessman, an employee or any person from
            any organisation emails to anyone then using Gmail, Hotmail or any
            other emails creates less impacts. A bank can never have emails like
            support.abcbank.ktm@gmail.com. Having corporate email not only
            creates impacts but it helps to secure data when someone leaves the
            company and it can be great pain for data migration.
          </li>
          <li>
            Google Search Console formerly Google Webmaster Tool : Submitting
            website in Google Webmaster section allows website to check the
            status of optimization, indexing visibility of website. Google
            Search Console is the rebranded name of Google Webmaster Tools which
            was announced on 20 May 2015. It evaluates and maintain the
            performance of website in search results. The service is provided
            free of charge for webmasters.
          </li>
          <li>
            Twitter / Facebook Widgets : Social media presence helps to ease
            process for announcing news, notice, updates, uploading photos and
            more. Placing Twitter update feed, Facebook page feed makes website
            very interactive and also it helps to avoid spending time for
            logging website when the website is managed by third party
            providers. Few clicks can spread messages to million people.
          </li>
          <li className="list-none">
            <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
              <Image
                src="/assets/images/homepage/blog/google-translate.jpg"
                alt="google-translate"
                className="object-cover h-full w-full"
                fill
              />
            </div>
          </li>
          <li>
            {" "}
            Google Translate : When a visitor from Japan visits a website which
            is in English can be trouble for a person who is expert in Japanese
            but not in English. The free translation system developed by Google
            helps to automatically translate the website language forcely. It
            can be good alternative when a small button is placed in any corner
            of website, making easier for visitor to change the language.
          </li>
          <li>
            Social Sharing Buttons : Social Media Sharing is the best way to
            promote website socially. It can grow faster. Social Sharing buttons
            catches the viewer&apos;s eye and also it makes easy to share any
            website, page or any post. The concept of Growthhacking helps to
            attract more visitors. When someone shares a news in Facebook, it
            reaches to their friend list.
          </li>
          <li>
            Social Presence : Social Media like Facebook, Twitter, Instagram,
            LinkedIn pages are very informative way to showcase the details,
            information, videos, photos, announcement of any business or
            companies. People can be Fan page on facebook and followers in
            Twitter. These works as alternative to advertising of products.
          </li>
          <li>
            Hello Bar : A sleek bar, pop up banner, a subscription box. Multiple
            options to show message, links of new blog post, announcement in
            website or any newsletter links can be easily managed with Hello
            Bar. Hello Bar has multiple options to Convert visitors into
            customers and they have mentioned in their website. It supports
            installations as HTML, segment, Big Commerce, Ucraft, GoDaddy&apos;s
            website builder and has WordPress plugin too.
          </li>
        </ul>
      </section>
    </>
  );
}
