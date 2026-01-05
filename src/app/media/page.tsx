import Ribbon from "@/components/Ribbon";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
const name = " Media Coverages";
const mediaItems = [
  {
    img: "/media/kantipur.png",
    description: "“Shree Yoga services also available in Kathmandu, Delhi and Dubai”",
    date: "-Sunday, June 23, 2024",
    link: "https://ekantipur.com/market/2024/06/23/sri-yoga-services-in-kathmandu-delhi-and-dubai-as-well-02-23.html",
  },
  {
    img: "/media/kendrabindu.jpg",
    description:
      "“Shriyoga on membership model, aims to expand services abroad”",
    date: "- Friday, June 14, 2024",
    link: "https://kendrabindu.com/economy/330937/",
  },
  {
    img: "/media/technologykhabar.png",
    description: "“Damak Municipality to be made a startup and technology-friendly city”",
    date: "- Saturday, June 17, 2023",
    link: "https://technologykhabar.com/2023/06/17/140682/",
  },
  {
    img: "/media/business360.png",
    description:
      "“IMEPay as digital payment service provider for Sriyog Consulting”",
    date: "Sunday, June 23, 2024",
    link: "https://www.b360nepal.com/detail/885/imepay-as-digital-payment-service-provider-for-sriyog-consulting",
  },
  {
    img: "/media/arthikpati.png",
    description:
      "“IMEPay as digital payment service provider for Sriyog Consulting”",
    date: "Sunday, June 23, 2024",
    link: "https://www.arthikpati.com/content/2023/02/11/54264",
  },

  {
    img: "/media/nayapatrika.png",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Friday, February 10, 2023",
    link: "https://nayapatrikadaily.com/news-details/107044/2023-02-09",
  },

  {
    img: "/media/ukera.png",
    description:
      "“Agreement between IME Pay and Shree Yoga Consulting for digital payment processing”",
    date: "- Friday, February 10, 2023",
    link: "https://ukeraa.com/news/2023-02-10/2/10/29522/",
  },
  {
    img: "/media/kendrabindu.jpg",
    description:
      "“Agreement on digital payments between IME Pay and Shree Yoga Consulting”",
    date: "- Friday, February 10, 2023",
    link: "https://kendrabindu.com/economy/115024/",
  },
  {
    img: "/media/onlinekendra.png",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Friday, February 10, 2023",
    link: "https://www.onlinekendra.com/economy/2023/02/10/123569",
  },
  {
    img: "/media/sansarnews.png",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Friday, February 10, 2023",
    link: "https://sansarnews.com/357170/",
  },
  {
    img: "/media/deshsanchar.png",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Friday, February 10, 2023",
    link: "https://deshsanchar.com/2023/02/10/761100/",
  },
  {
    img: "/media/nepalsamaya.svg",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Friday, February 10, 2023",
    link: "https://nepalsamaya.com/detail/99308",
  },
  {
    img: "/media/setopati.png",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9, 2023",
    link: "https://www.setopati.com/kinmel/others/294168",
  },
  {
    img: "/media/newskarobar.png",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9, 2023",
    link: "https://www.newskarobar.com/posts/1110045",
  },
  {
    img: "/media/corporatenepal.png",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9, 2023",
    link: "https://www.corporatenepal.com/story/236761",
  },
  {
    img: "/media/bizshala.png",
    description: "“Agreement on digital payments between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9, 2023",
    link: "https://old.bizshala.com/story/%E0%A4%86%E0%A4%87%E0%A4%8F%E0%A4%AE%E0%A4%88-%E0%A4%AA%E0%A5%87-%E0%A4%B0-13",
  },
  {
    img: "/media/nepalipatro.svg",
    description: "“Agreement on digital payments between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9, 2023",
    link: "https://nepalipatro.com.np/news/feeds/2373182",
  },
  {
    img: "/media/capitalnepal.png",
    description: "“Agreement on digital payments between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9, 2023",
    link: "https://www.capitalnepal.com/detail/34606",
  },
  {
    img: "/media/tourismmail.png",
    description: "“ Agreement between IME Pay and Sriyog Consulting”",
    date: "- Thursday, February 9, 2023",
    link: "https://www.tourismmail.com/news/detail/100917/",
  },
  {
    img: "/media/matribhumi.png",
    description: "“Agreement between IME Pay and Sriyog Consulting”",
    date: "- Thursday, February 9,2023",
    link: "https://matribhuminews.com/2023/02/09/186876/",
  },
  {
    img: "/media/nepalkhabar.png",
    description: "“Agreement between IME Pay and Sriyog Consulting”",
    date: "- Thursday, February 9,2023",
    link: "",
  },
  {
    img: "/media/arthikawaz.png",
    description: "“Agreement between IME Pay and Sriyog Consulting”",
    date: "- Thursday, February 9,2023",
    link: "https://arthikawaj.com/ime-pay-22/",
  },
  {
    img: "/media/bizkhabar.png",
    description:
      "“Agreement between IME Pay and Shree Yoga Consulting, IME Pay will remain Shree Yoga’s digital payment service provider”",
    date: "- Thursday, February 9,2023",
    link: "https://www.bizkhabar.com/corporate-news-in-nepal/150161.html",
  },
  {
    img: "/media/lokantar.png",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9,2023",
    link: "https://www.lokantar.com/story/213658/2023/2/9/market/ime-pay",
  },
  {
    img: "/media/news-abhiyan.png",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9,2023",
    link: "https://market.newsabhiyan.com.np/news-details.php?nid=288466",
  },
  {
    img: "/media/ratopati.png",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9,2023",
    link: "https://www.ratopati.com/story/345665/ime-pay",
  },
  {
    img: "/media/gyanmandu.png",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9,2023",
    link: "https://www.gyanmandu.com/content/8539",
  },
  {
    img: "/media/arthiksanjal.png",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9,2023",
    link: "https://www.aarthiksanjal.com/economy/87379.html",
  },
  {
    img: "/media/nepalpatranews.png",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9,2023",
    link: "https://nepalpatranews.com/posts/3419",
  },
  {
    img: "/media/arthikbazar.svg",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9,2023",
    link: "https://aarthikbazarnews.com/2023/02/09/71043/#",
  },
  {
    img: "/media/arthapath.png",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9,2023",
    link: "https://www.arthapath.com/samachar/2023/02/09/99042/",
  },
  {
    img: "/media/taksar.jpeg",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9,2023",
    link: "https://taksarnews.com/2023/02/8092/",
  },
  {
    img: "/media/arthasansar.png",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9, 2023",
    link: "https://arthasansar.com/news/47227",
  },
  {
    img: "/media/hamroartha.png",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9, 2023",
    link: "https://www.hamroartha.com/bank/48394/",
  },
  {
    img: "/media/bainkingsamachar.png",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9, 2023",
    link: "https://bankingsamachar.com/news/9860/",
  },
  {
    img: "/media/gdpnepal.jpeg",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9, 2023",
    link: "https://gdpnepal.com/archives/31845",
  },
  {
    img: "/media/newsanchar.png",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9, 2023",
    link: "https://newsanchar.com/2023/02/106861/",
  },
  {
    img: "/media/clickmandu.png",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9, 2023",
    link: "https://clickmandu.com/2023/02/231994.html",
  },
  {
    img: "/media/bikashnews.png",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9, 2023",
    link: "https://www.bikashnews.com/2023/02/09/387240.html",
  },
  {
    img: "/media/insuranceKhabar.png",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9, 2023",
    link: "https://insurancekhabar.com/2023/02/167973/",
  },
  {
    img: "/media/beemapost.png",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9, 2023",
    link: "https://www.beemapost.com/2023/02/69469/",
  },
  {
    img: "/media/gaunsahar.png",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9, 2023",
    link: "https://gaunsahar.com/news-details/53221/2023-02-09",
  },
  {
    img: "/media/arthatantra.png",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9, 2023",
    link: "https://www.arthatantra.com/2023/02/09/141735/",
  },
  {
    img: "/media/dainiki.png",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9, 2023",
    link: "https://dainiki.com/252447/",
  },
  {
    img: "/media/globenepal.png",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9, 2023",
    link: "https://globenepal.com/2023/02/55324",
  },
  {
    img: "/media/newspolar.gif",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9, 2023",
    link: "https://newspolar.com/archives/153519",
  },
  {
    img: "/media/technologykhabar.png",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9, 2023",
    link: "https://technologykhabar.com/2023/02/09/129982/",
  },
  {
    img: "/media/arthasanjal.png",
    description: "“Agreement between IME Pay and Shree Yoga Consulting”",
    date: "- Thursday, February 9, 2023",
    link: "https://arthasanjal.com/52055?utm_source=nepalipatro&utm_medium=np_mobile&utm_campaign=np_news",
  },
  {
    img: "/media/rstca.png",
    description: "“Best Startup in Nepal”",
    date: "- Monday, July 11, 2022",
    link: "https://www.award.rstca.com.np/2022/07/11/best-startup-in-nepal/",
  },
  {
    img: "/media/techpana.png",
    description: "“A startup that connects those with skills and those who want to use services”",
    date: "- Wednesday, February 2, 2022",
    link: "https://techpana.com/2022/118114",
  },
  {
    img: "/media/setoghar.jpg",
    description:
      "“Shriyoga.com remains active in providing employment services through technology”",
    date: "- Wednesday, February 2, 2022",
    link: "https://www.setoghar.com/archives/75998",
  },
  {
    img: "/media/techsathi.png",
    description:
      "“Sriyog: Nepal’s Digital Platform to Connect Part-Time Employees and Employers”",
    date: "- Sunday, August 9, 2020",
    link: "https://techsathi.com/sriyog-nepal",
  },
  {
    img: "/media/nagarik.png",
    description: "“Sriyog: Nepal’s Digital Platform to Connect Part-Time Employees and Employers”",
    date: "- Sunday, August 9, 2020",
    link: "https://shukrabar.nagariknetwork.com/news/5321",
  },
  {
    img: "/media/12khari.png",
    description: "“Need a part-time job? You can find it at Shree Yoga”",
    date: "- Monday, September 16, 2019",
    link: "https://baahrakhari.com/detail/216093",
  },
  {
    img: "/media/abhiyan.png",
    description: "“Shriyoga.com for the unemployed”",
    date: "-Sunday, September 15, 2019",
    link: "https://abhiyandaily.com/article/berojgaarkaa-laagi-shriiyog-ddtt-km",
  },
  {
    img: "/media/technologykhabar.png",
    description:
      "“Digital platform 'Shriyog.com' in operation, providing part-time employment opportunities”",
    date: "- Friday, September 13, 2019",
    link: "https://technologykhabar.com/tag/%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%AF%E0%A5%8B%E0%A4%97-%E0%A4%A1%E0%A4%9F-%E0%A4%95%E0%A4%AE/",
  },
  {
    img: "/media/ujyalo.png",
    description: "“For those who want to work part-time, 'Shriyoga.com!'”",
    date: "- Friday, September 13, 2019",
    link: "https://ujyaaloonline.com/story/26189/2019/9/13/shreeyog-web-portal-for-part-time",
  },
  {
    img: "/media/deshsanchar.png",
    description: "“Shriyog.com, a digital platform for finding jobs”",
    date: "- Friday, September 13, 2019",
    link: "https://deshsanchar.com/2019/09/13/248880/",
  },
  {
    img: "/media/economic-khabar.gif",
    description: "“Shriyoga.com, a common place for those who want to do things”",
    date: "- Friday, September 13, 2019",
    link: "https://economickhabar.com/detail/271/",
  },
  {
    img: "/media/ictsamachar.png",
    description: "“Official launch of ShreeYog.com, an opportunity to work part-time””",
    date: "- Thursday, September 12, 2019",
    link: "https://ictsamachar.com/news/1714/",
  },
  {
    img: "/media/setopati.png",
    description:
      "“Part-time Jabko Aavsar Dine Digital Platform Shriyoga Datakam Sanchalan””",
    date: "- Thursday, September 12, 2019",
    link: "https://www.setopati.com/kinmel/employment/189754",
  },
  {
    img: "/media/nagarik-bazar.png",
    description: "“Official launch of Shree Yoga.com”",
    date: "- Thursday, September 12, 2019",
    link: "https://nagarikbazaar.nagariknetwork.com/news/sriyog-officially-started-nepali",
  },
  {
    img: "/media/ap1.png",
    description: "“Development of a website to create part-time jobs - Prakash Upreti”",
    date: "- Saturday, August 17, 2019",
    link: "https://www.youtube.com/watch?v=BM9yTsfkgb4",
  },
  {
    img: "/media/nari.png",
    description: "“Employment through apps”",
    date: "- Thursday, August 15, 2019",
    link: "https://narimag.com.np/miscellaneous/2019/08/15/20190814144145.html",
  },
  {
    img: "/media/nuwakotexpress.png",
    description: "“Living with ICT Awards Top 11 Announced”",
    date: "- Tuesday, July 9, 2019",
    link: "https://www.facebook.com/ourbrt/videos/428264288017698/",
  },
  {
    img: "/media/ourbiratnagar.jpeg",
    description: "“Shri Yoga will contribute to creating an employment environment in Nepal””",
    date: "- Sunday, June 30, 2019",
    link: "https://www.facebook.com/ourbrt/videos/428264288017698/",
  },
  {
    img: "/media/nepaltimes.jpeg",
    description: "“Shriyog.com is becoming a support for the unemployed: Founder Upreti”",
    date: "- Sunday, June 30, 2019",
    link: "https://www.facebook.com/nepaltimesnews/videos/584995215361054/",
  },
  {
    img: "/media/saptakoshi-fm.png",
    description: "“Sumadhur Bhet- Sima Basnet with Prakash Upreti”",
    date: "- Friday, June 7, 2019",
    link: "https://www.youtube.com/watch?v=VmTuwHmrTFw",
  },
  {
    img: "/media/nepaliheadlines.png",
    description:
      "“Shriyoga is providing employment opportunities to millions by saying, 'Time is money, don't waste it”",
    date: "- Sunday, May 26, 2019",
    link: "https://nepaliheadlines.com/sriyog-partime-jobs/",
  },
  {
    img: "/media/saptahik.png",
    description: "“Shriyoga finds work and workers”",
    date: "- Monday, May 13, 2019",
    link: "https://saptahik.com.np/career/2019/05/13/20190512150435",
  },
  {
    img: "/media/ictsamachar.png",
    description: "“Employment from home – Digital platform for getting work from home – Employment through apps”",
    date: "- Monday, May 13, 2019",
    link: "https://ictsamachar.com/news/2645/",
  },
  {
    img: "/media/kantipur.png",
    description: "“Shriyoga finds work and workers”",
    date: "- Monday, May 13, 2019",
    link: "https://ekantipur.com/business/2019/05/12/155763031743792163.html",
  },
  {
    img: "/media/nepaltelevision.png",
    description: "“Nepal Startup Meet 2019”",
    date: "- Wednesday,April 3, 2019",
    link: "https://www.youtube.com/watch?v=U2YBTuQbAHg",
  },
  {
    img: "/media/thekathmandupost.png",
    description:
      "“Five startups receive investment pledges at Nepal Startup Meet 2019 ”",
    date: "- Tuesday, March 26, 2019",
    link: "https://kathmandupost.com/money/2019/03/26/five-startups-receive-investment-pledges-at-nepal-startup-meet-2019",
  },
  {
    img: "/media/nagarik-post.png",
    description: "“Shriyog is a platform for unemployed people to work part-time”",
    date: "- Wednesday, January 30, 2019",
    link: "https://nepali.nagarikpost.com/allnepalkhabar/post/2019-01-30-03-29-56",
  },
  {
    img: "/media/onlinekhabar.png",
    description: "“Shriyog is a platform for unemployed people to work part-time”",
    date: "- Wednesday, January 9, 2019",
    link: "https://www.onlinekhabar.com/2019/01/733498",
  },
  {
    img: "/media/kendrabindu.jpg",
    description: "“Now ShreeYog.com will provide employment opportunities to the unemployed”",
    date: "- Tuesday, December 18, 2018",
    link: "https://kendrabindu.com/others/39670/",
  },
  {
    img: "/media/deshsanchar.png",
    description: "“Digital 'platform' for 78 professions”",
    date: "- Friday, December 7, 2018",
    link: "https://deshsanchar.com/2018/12/07/130854/",
  },
  {
    img: "/media/artha-sarokar.png",
    description:
      "“Do you need a job or do you need someone to take on the job? 'Shriyoga' can be the best option for both!”",
    date: "- Tuesday, November 13, 2018",
    link: "https://arthasarokar.com/2018/11/sriyog-.html",
  },
  {
    img: "/media/purbikhabar.png",
    description: "“Shriyog.com is becoming a bridge between the unemployed and employers”",
    date: "- Saturday, September 22, 2018",
    link: "https://www.purbikhabar.com/news/view?id=1010",
  },
  {
    img: "/media/etcnepal.png",
    description: "“Now Find Local Professionals Using Sriyog.com”",
    date: "- Wednesday, April 12,2017",
    link: "https://www.etcnepal.com/now-find-local-professionals-using-sriyog-com/",
  },
  {
    img: "/media/techlekh.png",
    description: "“Sriyog Makes It Easy To Find Your Local Professionals”",
    date: "- Saturday, April 1,2017",
    link: "https://techlekh.com/sriyog-makes-easy-find-local-professionals/",
  },
];
export const metadata: Metadata = {
  title: "Media Coverages | SRIYOG Consulting",
  description: "Media coverages and news articles about SRIYOG Consulting.",
  openGraph: {
    title: "Media Coverages | SRIYOG Consulting",
    description: "Media coverages and news articles about SRIYOG Consulting.",
    url: "https://www.sriyog.com/media",
    images: [
      {
        url: "https://sriyog.com/og/default.jpg",
        alt: "Media Coverages"
      }
    ]
  }
};
export default function Media() {
  return (
    <>
      <Ribbon name={name} des={""} />

      <div className="w-full px-4 max-md:px-0  lg:px-8 mb-[56px]">
        <div className="lg:w-[1180px] max-lg:container max-lg:px-3 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
            {mediaItems.map((item, index) => (
              <div
                key={index + 1}
                className="flex  flex-col items-start px-8 py-12  border border-[#dbdbdb] hover:shadow-md rounded-lg"
              >
                <div className="relative w-full h-24 border-b border-[#dbdbdb] ">
                  <Image
                    src={item.img}
                    alt="media"
                    fill
                    priority
                    className="object-contain pb-2"
                  />
                </div>

                <p className="mt-6 text-left h-[49px] grid position-center text-[16px]  font-medium italic">
                  {item.description}
                </p>
                <p className="mt-6 w-full font-bold text-left text-[16px]">
                  {item.date}
                </p>
                <div className="w-full max-lg:[88%] max-md:w-[89%] flex justify-start">
                  <Link
                    href={item.link}
                    className="mt-6 px-4 py-2 text-[14px] hover:bg-[#055d59]  text-[#4b4b4b] border border-[#dbdbdb] font-medium hover:text-white  rounded-md transition-all duration-300 ease-in-out"
                    target="_blank"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
