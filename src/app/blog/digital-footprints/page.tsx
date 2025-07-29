import Image from "next/image";

export default function page() {
  return (
    <>
      <section className="lg:w-[900px] max-lg:container max-lg:px-3 mx-auto my-[45px] space-y-6">
        <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
          <Image
            src="/assets/images/blog/footprints-1.jpg"
            alt="things-to-keep-in-website"
            className="object-cover h-full w-full"
            fill
          />
        </div>

        <div>
          <h1 className="font-extrabold text-4xl text-[#055d59] text-center">
            Digital Footprints
          </h1>
          <p className="text-center italic">
            By: Pracas Upreti, Information Technology Consultant
          </p>
          <p className="text-center italic">November 17, 2019</p>
        </div>

        <p>
          Digital footprint is a trail of data one creates while using the Internet. It includes the websites visited, emails sent, and information submitted to online services. A &quot;passive digital footprint&quot; is a data trail unintentionally left online. For example, when visiting a website it displays a message box regarding the acceptance of cookies, and when cookies are allowed on that respective site, it collects all the information regarding the users like the device used to visit the site, personal information, IP addresses, etc. An &quot;active digital footprint&quot; includes data that is intentionally submitted online. Sending an email contributes to an active digital footprint since the sender expects the data to be seen and/or saved by another person. Updating status on social media, tweeting, changing profile pictures, sending emails all contribute to the digital footprints. The more time one spends on social media, the more digital footprints are left. Everyone who uses the Internet has a digital footprint, so it is not something to be worried about. However, it is wise to consider what trail of data is being left behind. Think of your digital footprint as an extension of who you are. It is the image you create for yourself for the world to see. Below are some of the examples of the ways, one&apos;s digital footprints are taken:
        </p>

        <ul className="list-disc flex flex-col gap-4 pl-3">
          <li>
            Google knows about the location of the user and is tracking them wherever they go which is also known as Location-Based Tracking.
          </li>
          <li>
            Multiple SMS sent through the phones are stored somewhere without the user&apos;s concern.
          </li>
          <li>
            Third-party mobile applications save the contacts of the phone and use those contacts for several marketing campaigns.
          </li>
          <li>
            When a phone number is provided to various organizations, they use those phone numbers for various targeted marketing purposes.
          </li>
          <li>
            The information provided to various organizations is being kept and well maintained on a database.
          </li>
          <li>
            The messages, calls done from various social media&apos;s platforms like WhatsApp, WeChat, Telegram, Facebook, etc. are being tracked.
          </li>
          <li>
            Various contents posted on social media&apos;s can be dangerous in the near future.
          </li>
          <li>
            Even if a Facebook account is deleted, the account details will remain on its server for three months and during that time period, the account details can be downloaded.
          </li>
          <li>
            Various call logs information from the phones is being tracked as well.
          </li>
          <li>
            Whenever certain online marketing sites are browsed and used for purchasing the products, that information is being tracked and used for targeted marketing purposes.
          </li>
          <li>
            Alexa home, Siri is tracking our voices and storing them as databases.
          </li>
        </ul>

        <p>
          With all the concern about digital footprints in this modern world of technology, below are some of the ways in which the Digital Footprints can be bypassed:
        </p>

        <ul className="list-disc flex flex-col gap-4 pl-3">
          <li>
            Using temporary emails are an efficient and effective way to hide one&apos;s digital footprint.
          </li>
          <li>
            VPN can be used to protect oneself from the location tracker, IP trackers and many more.
          </li>
          <li>
            Tor Browser is a great way to secretly browse the Internet without leaving any traces of footprints as it comes with automated VPN services.
          </li>
          <li>
            Activity deletion from social media and other platforms is an effective method as well.
          </li>
          <li>
            Unsubscribe to Mailing Lists
          </li>
          <li>
            Clear your Browsing History &#40;Or Browse in Incognito Mode&#41;
          </li>
          <li>
            Avoid any surveys or questionnaires over the Web.
          </li>
          <li>
            Use multiple, disposable email addresses.
          </li>
          <li>
            Protect the devices used with a strong security system.
          </li>
        </ul>

        <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
          <Image
            src="/assets/images/blog/footprints-2.jpg"
            alt="things-to-keep-in-website"
            className="object-cover h-full w-full"
            fill
          />
        </div>

        <h1 className="text-xl font-[900]">How data is collected?</h1>
        <p>
          Data is the most important and powerful asset in today&apos;s world for many organizations and countries. Data is being collected knowingly or unknowingly from various users around the globe. Many applications that are installed on the phone collect information anonymously without the user&apos;s consent. There are applications that even record audios and images from the phones of the users.
        </p>

        <h1 className="text-xl font-[900]">What companies do with data?</h1>
        <p>
          In this modern world of technology, almost everything is based on the Internet, and data is one of the most important factors. Various companies use the data collected from various online surveys, data collected anonymously to target the people to sell their products. Many companies send emails to the people about the advertisement of products.
        </p>

        <h1 className="text-xl font-[900]">How everyone is tracked?</h1>
        <p>
          Compared to the era before technological enhancements, tracking people has been much easier. With the technology being the major factor, people can be tracked instantly by their Locations, IP Addresses, Email headers, MAC Addresses, Transaction logs, Website accessing location, etc.
        </p>
      </section>
    </>
  );
}
