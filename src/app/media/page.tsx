import Ribbon from "@/components/Ribbon";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
const name = " Media Coverages";

const mediaItems = [
  {
    img: "/assets/images/media/kantipur.png",
    description: "काठमाडौं, दिल्ली र दुबईमा पनि श्रीयोगको सेवा",
    date: "-Sunday, June 23, 2024",
    link: "https://ekantipur.com/market/2024/06/23/sri-yoga-services-in-kathmandu-delhi-and-dubai-as-well-02-23.html",
  },
  {
    img: "/assets/images/media/kendrabindu.jpg",
    description:
      "“मेम्बरशिप मोडेलमा श्रीयोग, विदेशमा पनि सेवा विस्तारको लक्ष्य”",
    date: "- Friday, June 14, 2024",
    link: "https://kendrabindu.com/economy/330937/",
  },
  {
    img: "/assets/images/media/technologykhabar.png",
    description: "“दमक नगरपालिकालाई स्टार्टअप र प्रविधि मैत्री शहर बनाईने”",
    date: "- Saturday, June 17, 2023",
    link: "https://technologykhabar.com/2023/06/17/140682/",
  },
  {
    img: "/assets/images/media/business360.png",
    description:
      "“IMEPay as digital payment service provider for Sriyog Consulting”",
    date: "Sunday, June 23, 2024",
    link: "https://www.b360nepal.com/detail/885/imepay-as-digital-payment-service-provider-for-sriyog-consulting",
  },
  {
    img: "/assets/images/media/arthikpati.png",
    description:
      "“IMEPay as digital payment service provider for Sriyog Consulting”",
    date: "Sunday, June 23, 2024",
    link: "https://www.arthikpati.com/content/2023/02/11/54264",
  },

  {
    img: "/assets/images/media/nayapatrika.png",
    description: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "- Friday, February 10, 2023",
    link: "https://nayapatrikadaily.com/news-details/107044/2023-02-09",
  },

  {
    img: "/assets/images/media/ukera.png",
    description:
      "“आइएमई पे र श्रीयोग कन्सल्टिङबीच डिजिटल भुक्तानी प्रकृयाका लागि सम्झौता”",
    date: "- Friday, February 10, 2023",
    link: "https://ukeraa.com/news/2023-02-10/2/10/29522/",
  },
  {
    img: "/assets/images/media/kendrabindu.jpg",
    description:
      "“आइएमई पे र श्रीयोग कन्सल्टिङबीच डिजिटल भुक्तानी सम्बन्धी सम्झौता”",
    date: "- Friday, February 10, 2023",
    link: "https://kendrabindu.com/economy/115024/",
  },
  {
    img: "/assets/images/media/onlinekendra.png",
    description: "“आइएमई पे र श्रीयोग कन्सल्टिङवीच सम्झौता ”",
    date: "- Friday, February 10, 2023",
    link: "https://www.onlinekendra.com/economy/2023/02/10/123569",
  },
  {
    img: "/assets/images/media/sansarnews.png",
    description: "“आइएमई पे र श्रीयोग कन्सल्टिङवीच सम्झौता ”",
    date: "- Friday, February 10, 2023",
    link: "https://sansarnews.com/357170/",
  },
  {
    img: "/assets/images/media/deshsanchar.png",
    description: "“आइएमई पे र श्रीयोग कन्सल्टिङवीच सम्झौता ”",
    date: "- Friday, February 10, 2023",
    link: "https://deshsanchar.com/2023/02/10/761100/",
  },
  {
    img: "/assets/images/media/nepalsamaya.svg",
    description: "“आइएमई पे र श्रीयोग कन्सल्टिङवीच सम्झौता ”",
    date: "- Friday, February 10, 2023",
    link: "https://nepalsamaya.com/detail/99308",
  },
  {
    img: "/assets/images/media/setopati.png",
    description: "“आइएमई पे र श्रीयोग कन्सल्टिङवीच सम्झौता ”",
    date: "- Thursday, February 9, 2023",
    link: "https://www.setopati.com/kinmel/others/294168",
  },
  {
    img: "/assets/images/media/newskarobar.png",
    description: "“आइएमई पे र श्रीयोग कन्सल्टिङवीच सम्झौता ”",
    date: "- Thursday, February 9, 2023",
    link: "https://www.newskarobar.com/posts/1110045",
  },
  {
    img: "/assets/images/media/corporatenepal.png",
    description: "“आइएमई पे र श्रीयोग कन्सल्टिङवीच सम्झौता ”",
    date: "- Thursday, February 9, 2023",
    link: "https://www.corporatenepal.com/story/236761",
  },
  {
    img: "/assets/images/media/bizshala.png",
    description: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच डिजिटल भुक्तानीमा सम्झौता”",
    date: "- Thursday, February 9, 2023",
    link: "https://old.bizshala.com/story/%E0%A4%86%E0%A4%87%E0%A4%8F%E0%A4%AE%E0%A4%88-%E0%A4%AA%E0%A5%87-%E0%A4%B0-13",
  },
  {
    img: "/assets/images/media/nepalipatro.svg",
    description: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच डिजिटल भुक्तानीमा सम्झौता”",
    date: "- Thursday, February 9, 2023",
    link: "https://nepalipatro.com.np/news/feeds/2373182",
  },
  {
    img: "/assets/images/media/capitalnepal.png",
    description: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच डिजिटल भुक्तानीमा सम्झौता”",
    date: "- Thursday, February 9, 2023",
    link: "https://www.capitalnepal.com/detail/34606",
  },
  {
    img: "/assets/images/media/tourismmail.png",
    description: "“ Agreement between IME Pay and Sriyog Consulting”",
    date: "- Thursday, February 9, 2023",
    link: "https://www.tourismmail.com/news/detail/100917/",
  },
  {
    img: "/assets/images/media/matribhumi.png",
    description: "“आइएमई पे र श्रीयोग कन्सल्टिङवीच सम्झौता”",
    date: "- Thursday, February 9,2023",
    link: "https://matribhuminews.com/2023/02/09/186876/",
  },
  {
    img: "/assets/images/media/nepalkhabar.png",
    description: "“आइएमई पे र श्रीयोग कन्सल्टिङवीच सम्झौता”",
    date: "- Thursday, February 9,2023",
    link: "",
  },
  {
    img: "/assets/images/media/arthikawaz.png",
    description: "“आइएमई पे र श्रीयोग कन्सल्टिङवीच सम्झौता”",
    date: "- Thursday, February 9,2023",
    link: "https://arthikawaj.com/ime-pay-22/",
  },
  {
    img: "/assets/images/media/bizkhabar.png",
    description:
      "“आइएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता, आइएमई पे श्रीयोगको डिजिटल भुक्तानी सेवा प्रदायक रहने”",
    date: "- Thursday, February 9,2023",
    link: "https://www.bizkhabar.com/corporate-news-in-nepal/150161.html",
  },
  {
    img: "/assets/images/media/lokantar.png",
    description: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "- Thursday, February 9,2023",
    link: "https://www.lokantar.com/story/213658/2023/2/9/market/ime-pay",
  },
  {
    img: "/assets/images/media/news-abhiyan.png",
    description: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "- Thursday, February 9,2023",
    link: "https://market.newsabhiyan.com.np/news-details.php?nid=288466",
  },
  {
    img: "/assets/images/media/ratopati.png",
    description: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "- Thursday, February 9,2023",
    link: "https://www.ratopati.com/story/345665/ime-pay",
  },
  {
    img: "/assets/images/media/gyanmandu.png",
    description: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "- Thursday, February 9,2023",
    link: "https://www.gyanmandu.com/content/8539",
  },
  {
    img: "/assets/images/media/arthiksanjal.png",
    description: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "- Thursday, February 9,2023",
    link: "https://www.aarthiksanjal.com/economy/87379.html",
  },
  {
    img: "/assets/images/media/nepalpatranews.png",
    description: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "- Thursday, February 9,2023",
    link: "https://nepalpatranews.com/posts/3419",
  },
  {
    img: "/assets/images/media/arthikbazar.svg",
    description: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "- Thursday, February 9,2023",
    link: "https://aarthikbazarnews.com/2023/02/09/71043/#",
  },
  {
    img: "/assets/images/media/arthapath.png",
    description: "“आइएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "- Thursday, February 9,2023",
    link: "https://www.arthapath.com/samachar/2023/02/09/99042/",
  },
  {
    img: "/assets/images/media/taksar.jpeg",
    description: "“आईएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "- Thursday, February 9,2023",
    link: "https://taksarnews.com/2023/02/8092/",
  },
  {
    img: "/assets/images/media/arthasansar.png",
    description: "“आईएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "- Thursday, February 9, 2023",
    link: "https://arthasansar.com/news/47227",
  },
  {
    img: "/assets/images/media/hamroartha.png",
    description: "“आईएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "- Thursday, February 9, 2023",
    link: "https://www.hamroartha.com/bank/48394/",
  },
  {
    img: "/assets/images/media/bainkingsamachar.png",
    description: "“आईएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "- Thursday, February 9, 2023",
    link: "https://bankingsamachar.com/news/9860/",
  },
  {
    img: "/assets/images/media/gdpnepal.jpeg",
    description: "“आईएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "- Thursday, February 9, 2023",
    link: "https://gdpnepal.com/archives/31845",
  },
  {
    img: "/assets/images/media/newsanchar.png",
    description: "“आईएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "- Thursday, February 9, 2023",
    link: "https://newsanchar.com/2023/02/106861/",
  },
  {
    img: "/assets/images/media/clickmandu.png",
    description: "“आईएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "- Thursday, February 9, 2023",
    link: "https://clickmandu.com/2023/02/231994.html",
  },
  {
    img: "/assets/images/media/bikashnews.png",
    description: "“आईएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "- Thursday, February 9, 2023",
    link: "https://www.bikashnews.com/2023/02/09/387240.html",
  },
  {
    img: "/assets/images/media/insuranceKhabar.png",
    description: "“आईएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "- Thursday, February 9, 2023",
    link: "https://insurancekhabar.com/2023/02/167973/",
  },
  {
    img: "/assets/images/media/beemapost.png",
    description: "“आईएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "- Thursday, February 9, 2023",
    link: "https://www.beemapost.com/2023/02/69469/",
  },
  {
    img: "/assets/images/media/gaunsahar.png",
    description: "“आईएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "- Thursday, February 9, 2023",
    link: "https://gaunsahar.com/news-details/53221/2023-02-09",
  },
  {
    img: "/assets/images/media/arthatantra.png",
    description: "“आईएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "- Thursday, February 9, 2023",
    link: "https://www.arthatantra.com/2023/02/09/141735/",
  },
  {
    img: "/assets/images/media/dainiki.png",
    description: "“आईएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "- Thursday, February 9, 2023",
    link: "https://dainiki.com/252447/",
  },
  {
    img: "/assets/images/media/globenepal.png",
    description: "“आईएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "- Thursday, February 9, 2023",
    link: "https://globenepal.com/2023/02/55324",
  },
  {
    img: "/assets/images/media/newspolar.gif",
    description: "“आईएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "- Thursday, February 9, 2023",
    link: "https://newspolar.com/archives/153519",
  },
  {
    img: "/assets/images/media/technologykhabar.png",
    description: "“आईएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "- Thursday, February 9, 2023",
    link: "https://technologykhabar.com/2023/02/09/129982/",
  },
  {
    img: "/assets/images/media/arthasanjal.png",
    description: "“आईएमई पे र श्रीयोग कन्सल्टिङबीच सम्झौता”",
    date: "- Thursday, February 9, 2023",
    link: "https://arthasanjal.com/52055?utm_source=nepalipatro&utm_medium=np_mobile&utm_campaign=np_news",
  },
  {
    img: "/assets/images/media/rstca.png",
    description: "“Best Startup in Nepal”",
    date: "- Monday, July 11, 2022",
    link: "https://www.award.rstca.com.np/2022/07/11/best-startup-in-nepal/",
  },
  {
    img: "/assets/images/media/techpana.png",
    description: "“सीप भएका र सेवा लिन चाहनेलाई आपसमा जोड्ने स्टार्टअप”",
    date: "- Wednesday, February 2, 2022",
    link: "https://techpana.com/2022/118114",
  },
  {
    img: "/assets/images/media/setoghar.jpg",
    description:
      "“प्रविधि मार्फत राेजगारी सेवा प्रवाह कार्यमा क्रियाशिल रहँदै श्रीयोग डटकम”",
    date: "- Wednesday, February 2, 2022",
    link: "https://www.setoghar.com/archives/75998",
  },
  {
    img: "/assets/images/media/techsathi.png",
    description:
      "“Sriyog: Nepal’s Digital Platform to Connect Part-Time Employees and Employers”",
    date: "- Sunday, August 9, 2020",
    link: "https://techsathi.com/sriyog-nepal",
  },
  {
    img: "/assets/images/media/nagarik.png",
    description: "“श्रीयोगले रोजगारी दिने”",
    date: "- Sunday, August 9, 2020",
    link: "https://shukrabar.nagariknetwork.com/news/5321",
  },
  {
    img: "/assets/images/media/12khari.png",
    description: "“पार्ट टाइम काम गर्ने चाहिएको छ ? श्रीयोगमा पाइन्छ”",
    date: "- Monday, September 16, 2019",
    link: "https://baahrakhari.com/detail/216093",
  },
  {
    img: "/assets/images/media/abhiyan.png",
    description: "“बेरोजगारका लागि श्रीयोग डट कम”",
    date: "-Sunday, September 15, 2019",
    link: "https://abhiyandaily.com/article/berojgaarkaa-laagi-shriiyog-ddtt-km",
  },
  {
    img: "/assets/images/media/technologykhabar.png",
    description:
      "“डिजिटल प्लेटफर्म ‘श्रीयोग डटकम’ संचालनमा, पार्टटाइम राेजगारीको अवसर उपलब्ध गराउने ”",
    date: "- Friday, September 13, 2019",
    link: "https://technologykhabar.com/tag/%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%AF%E0%A5%8B%E0%A4%97-%E0%A4%A1%E0%A4%9F-%E0%A4%95%E0%A4%AE/",
  },
  {
    img: "/assets/images/media/ujyalo.png",
    description: "“पार्ट–टाइम काम गर्न चाहनेहरुका लागि 'श्रीयाेग डटकम !'”",
    date: "- Friday, September 13, 2019",
    link: "https://ujyaaloonline.com/story/26189/2019/9/13/shreeyog-web-portal-for-part-time",
  },
  {
    img: "/assets/images/media/deshsanchar.png",
    description: "“जागिर खोज्‍ने डिजिटल प्लेटफर्म श्रीयोग डट कम”",
    date: "- Friday, September 13, 2019",
    link: "https://deshsanchar.com/2019/09/13/248880/",
  },
  {
    img: "/assets/images/media/economic-khabar.gif",
    description: "“काम गर्ने गराउनेको साझा थलो श्रीयोग डटकम”",
    date: "- Friday, September 13, 2019",
    link: "https://economickhabar.com/detail/271/",
  },
  {
    img: "/assets/images/media/ictsamachar.png",
    description: "“श्रीयोग डट कमको औपचारिक शुभारम्भ, पार्टटाईम काम गर्ने मौका”",
    date: "- Thursday, September 12, 2019",
    link: "https://ictsamachar.com/news/1714/",
  },
  {
    img: "/assets/images/media/setopati.png",
    description:
      "“पार्टटाइम जबको अवसर दिने डिजिटल प्लेटफर्म श्रीयोग डटकम सञ्चालन”",
    date: "- Thursday, September 12, 2019",
    link: "https://www.setopati.com/kinmel/employment/189754",
  },
  {
    img: "/assets/images/media/nagarik-bazar.png",
    description: "“श्रीयोग डट कमको औपचारिक शुभारम्भ”",
    date: "- Thursday, September 12, 2019",
    link: "https://nagarikbazaar.nagariknetwork.com/news/sriyog-officially-started-nepali",
  },
  {
    img: "/assets/images/media/ap1.png",
    description: "“पार्टटाइम जागिर जुराउन वेबसाइटको बिकास - प्रकाश उप्रेती”",
    date: "- Saturday, August 17, 2019",
    link: "https://www.youtube.com/watch?v=BM9yTsfkgb4",
  },
  {
    img: "/assets/images/media/nari.png",
    description: "“एप्सबाट रोजगारी”",
    date: "- Thursday, August 15, 2019",
    link: "https://narimag.com.np/miscellaneous/2019/08/15/20190814144145.html",
  },
  {
    img: "/assets/images/media/nuwakotexpress.png",
    description: "“लिभिङ विद आइसिटी अवार्डका उत्कृष्ट ११ को घोषणा”",
    date: "- Tuesday, July 9, 2019",
    link: "https://www.facebook.com/ourbrt/videos/428264288017698/",
  },
  {
    img: "/assets/images/media/ourbiratnagar.jpeg",
    description: "“नेपालमा रोजगारीको वातावरण बनाउन श्रीयोगले योगदान दिनेछ”",
    date: "- Sunday, June 30, 2019",
    link: "https://www.facebook.com/ourbrt/videos/428264288017698/",
  },
  {
    img: "/assets/images/media/nepaltimes.jpeg",
    description: "“बेरोजगारको सहारा बन्दै श्रीयोग डट कम : संस्थापक उप्रेती”",
    date: "- Sunday, June 30, 2019",
    link: "https://www.facebook.com/nepaltimesnews/videos/584995215361054/",
  },
  {
    img: "/assets/images/media/saptakoshi-fm.png",
    description: "“Sumadhur Bhet- Sima Basnet with Prakash Upreti”",
    date: "- Friday, June 7, 2019",
    link: "https://www.youtube.com/watch?v=VmTuwHmrTFw",
  },
  {
    img: "/assets/images/media/nepaliheadlines.png",
    description:
      "“‘समय पैसा हो, खेर नफालौ’ भन्दै श्रीयोगले दिदैछ लाखौंलाई रोजगारीको अवसर”",
    date: "- Sunday, May 26, 2019",
    link: "https://nepaliheadlines.com/sriyog-partime-jobs/",
  },
  {
    img: "/assets/images/media/saptahik.png",
    description: "“श्रीयोगले खोजिदिन्छ काम र कामदार”",
    date: "- Monday, May 13, 2019",
    link: "https://saptahik.com.np/career/2019/05/13/20190512150435",
  },
  {
    img: "/assets/images/media/ictsamachar.png",
    description:
      "“घरबाटै रोजगारी – घरमै कामदार जागिर पाउने डिजिटल प्लाटफर्म – एप्स मार्फत रोजगारी”",
    date: "- Monday, May 13, 2019",
    link: "https://ictsamachar.com/news/2645/",
  },
  {
    img: "/assets/images/media/kantipur.png",
    description: "“वेबसाइटमार्फत काम र कामदार”",
    date: "- Monday, May 13, 2019",
    link: "https://ekantipur.com/business/2019/05/12/155763031743792163.html",
  },
  {
    img: "/assets/images/media/nepaltelevision.png",
    description: "“Nepal Startup Meet 2019”",
    date: "- Wednesday,April 3, 2019",
    link: "https://www.youtube.com/watch?v=U2YBTuQbAHg",
  },
  {
    img: "/assets/images/media/thekathmandupost.png",
    description:
      "“Five startups receive investment pledges at Nepal Startup Meet 2019 ”",
    date: "- Tuesday, March 26, 2019",
    link: "https://kathmandupost.com/money/2019/03/26/five-startups-receive-investment-pledges-at-nepal-startup-meet-2019",
  },
  {
    img: "/assets/images/media/nagarik-post.png",
    description: "“श्रीयोग बेरोजगारलाई पार्ट टाइम काम गर्ने एउटा प्लेटफर्म”",
    date: "- Wednesday, January 30, 2019",
    link: "https://nepali.nagarikpost.com/allnepalkhabar/post/2019-01-30-03-29-56",
  },
  {
    img: "/assets/images/media/onlinekhabar.png",
    description: "“बेरोजगार हुनुहुन्छ? श्रीयोगले खोजी दिनेछ अबसर”",
    date: "- Wednesday, January 9, 2019",
    link: "https://www.onlinekhabar.com/2019/01/733498",
  },
  {
    img: "/assets/images/media/kendrabindu.jpg",
    description: "“अब बेरोजगारहरुलाई श्रीयोग डटकमले रोजगारीको अवसर जुटाइदिने”",
    date: "- Tuesday, December 18, 2018",
    link: "https://kendrabindu.com/others/39670/",
  },
  {
    img: "/assets/images/media/deshsanchar.png",
    description: "“७८ थरि पेशाका लागि डिजिटल ‘प्लेटफर्म’”",
    date: "- Friday, December 7, 2018",
    link: "https://deshsanchar.com/2018/12/07/130854/",
  },
  {
    img: "/assets/images/media/artha-sarokar.png",
    description:
      "“जागिर चाहियो कि जागिर खाने मान्छे चाहियो ? दुवै कामका लागि ‘श्रीयोग’ बन्न सक्छ उत्तम विकल्प !”",
    date: "- Tuesday, November 13, 2018",
    link: "https://arthasarokar.com/2018/11/sriyog-.html",
  },
  {
    img: "/assets/images/media/purbikhabar.png",
    description: "“बेरोजगार र रोजगारदाताको पूल वन्दै श्रीयोग डट कम”",
    date: "- Saturday, September 22, 2018",
    link: "https://www.purbikhabar.com/news/view?id=1010",
  },
  {
    img: "/assets/images/media/etcnepal.png",
    description: "“Now Find Local Professionals Using Sriyog.com”",
    date: "- Wednesday, April 12,2017",
    link: "https://www.etcnepal.com/now-find-local-professionals-using-sriyog-com/",
  },
  {
    img: "/assets/images/media/techlekh.png",
    description: "“Sriyog Makes It Easy To Find Your Local Professionals”",
    date: "- Saturday, April 1,2017",
    link: "https://techlekh.com/sriyog-makes-easy-find-local-professionals/",
  },
];
export const metadata: Metadata = {
  title: "Media Coverages | SRIYOG Consulting",
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
