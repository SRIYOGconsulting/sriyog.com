import Ribbon from "@/components/Ribbon";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Testimonials | SRIYOG Consulting",
};
export default function Testimonials() {
  const testimonialsData = [
    // {
    //   id: 1,
    //   title: "Front-end Developer",
    //   desc: "Even though my internship was remote, it was very effective as I received continuous guidance and support throughout the period. Working in a collaborative environment with regular feedback boosted my confidence and I also got a clearer view of how companies work , which has motivated me to further pursue a career in web development.",
    //   name: "Salina Bastola",
    //   stack: "Himalayan Darshan College",
    //   image: "/assets/images/testimonials/1.png",
    //   addr:"Biratnagar"
    // },
    // {
    //   id: 2,
    //   title: "React Native Developer",
    //   desc: "Beyond programming, this internship strengthened my problem-solving, communication, and teamwork abilities. It was a great introduction to working in a production-level setting with a focus on clean, maintainable code. I’m thankful to the SRIYOG team for their mentorship, which helped boost my confidence as a budding developer.",
    //   name: "Sharad Kunwar",
    //   stack: "Saraswati Multiple Campus ",
    //   image: "/assets/images/testimonials/2.png",
    //   addr:"Kathmandu"
    // },
    // {
    //   id: 3,
    //   title: "React Js Developer",
    //   desc: "My 3-month internship as a React JS Developer at SRIYOG Consulting Pvt. Ltd. provided me the opportunity to work on real-time web projects. I developed reusable components, implemented state management, and contributed to building scalable user interfaces. This helped me understand best practices in component-based architecture.",
    //   name: "Bitisha Thapa",
    //   stack: "Saraswati Multiple Campus",
    //   image: "/assets/images/testimonials/3.png",
    //    addr:"Kathmandu"
    // },
    // {
    //   id: 4,
    //   title: "UI/UX Designer",
    //   desc: "My 3-month internship as a UI/UX Designer at SRIYOG Consulting Pvt. Ltd. was a transformative experience. I had the opportunity to collaborate with developers, gaining hands-on exposure to tools like Figma and work on real-time projects that involved designing intuitive interfaces and improving user experiences through thoughtful, reusable design components.",
    //   name: "Kritika Ghimire",
    //   stack: "Ambition College",
    //   image: "/assets/images/testimonials/4.png",
    //    addr:"Kathmandu"
    // },
    // {
    //   id: 5,
    //   title: "React Js Developer",
    //   desc: "As a React JS Intern at Sriyog Consulting, I had the opportunity to contribute to the development of Kisanpedia.com, a platform focused on agriculture and farmers’ resources.Beyond technical growth, the internship deepened my understanding of user-centered design and the value of teamwork in delivering impactful digital solutions.",
    //   name: "Lalita Ghimire",
    //   stack: "Butwal Multiple Campus",
    //   image: "/assets/images/testimonials/5.png",
    //    addr:"Butwal"
    // },
    // {
    //   id: 6,
    //   title: "Web Developer",
    //   desc: "Joining SRIYOG Consulting has been a transformative experience for me. Not only have I enhanced my technical skills, but I have also significantly developed my soft skills. Working with diverse individuals and collaborating on various tasks has taught me the value of teamwork and effective communication. It has been an enriching and rewarding journey.",
    //   name: "Madan Golay Tamang",
    //   stack: "Lumbini Academic College",
    //   image: "/assets/images/testimonials/6.png",
    //    addr:"Kathmandu"
    // },
     {
      title: "Jayshree Polymers ",
      desc: "I would like to express sincere gratitude to SRIYOG COnsulting Pvt. Ltd. for providing outstanding Business eMail services to our organisation. We have been using Zoho Email service, expertly managed, set up, and operated by your team since june 2024. ",
      name: "Naveen Poddar",
      stack: "CEO",
      image: "/assets/images/testimonials/naveen-poddar-jayshree-polymers.png",
       addr:"Biratnagar"
    },
    {
      title: "Trans Nepal ",
      desc: "We have an excellent experience working with SRIYOG. They designed a professional, user friendly, website for our business and set up and supporting our Business eMail seamlessly. Their attention to details and timely execution made the entire process smooth and stress free. ",
      name: "Anand Singh",
      stack: "General Manager",
      image: "/assets/images/testimonials/anand-singh-transnepal.png",
       addr:"Biratnagar"
    },
     {
      title: "Kopila Clinic",
      desc: "SRIYOG Consulting did a great job designing our website. Prakash ji was responsive and professional and took time to understand our brand. The final website works amazing but  needs few revisions.",
      name: "Sita Rai",
      stack: "Doctor",
      image: "/assets/images/testimonials/dr-sita-rai-kopila-clinic.png",
       addr:"Damak"
    },
         {
      title: "BIRATINFO",
      desc: "Partnering with SRIYOG Consulting has been a transformative experience for our organization. Their team brought a level of technical expertise and professionalism that exceeded our expectations. From planning to deployment, the entire process was smooth, transparent, and incredibly efficient.",
      name: "Sudhir Nepal",
      stack: "Editor-in-Chief",
      image: "/assets/images/testimonials/sudir-nepal-biratinfo.png",
       addr:"Kathmandu"
    },
         {
      title: "Baskota Consulting",
      desc: "We worked with SRIYOG Consulting to create a fully customized corporate website for our business. Their team understood our vision, offered creative solutions, and delivered a sleek, user-friendly platform on time. Their commitment to quality and technical excellence is great.",
      name: "Kishor Baskota",
      stack: "Founder & CEO",
      image: "/assets/images/testimonials/baskotaConsulting-kishorBastoka.jpg",
       addr:"Kathmandu"
    },
         {
      title: "Nepal Motor",
      desc: "We recently partnered with SRIYOG Consulting for the development of a custom car portal and ongoing social media management services. From the initial consultation to final deployment, their team demonstrated a high level of professionalism & technical expertise.",
      name: "Yogendra Dhamala",
      stack: "Director",
      image: "/assets/images/testimonials/yogendra-dhamala-nepalMoter.png",
       addr:"Kathmandu"
    },

  ];
  return (
    <>
      <Ribbon name="Testimonials" des="" />
      <section className=" max-w-[1180px] max-lg:container max-lg:px-3 mx-auto mb-[45px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((item, idx) => (
          <div
            key={idx + 1}
            className="basis-[31%] text-center lg:basis-[45%] md:basis-full shadow-[0_.5rem_1rem_rgba(0,0,0,.15)] hover:shadow-xl transition duration-300 ease-in-out border-t-8 border-[#0D5D59] rounded-xl"
          >
            <div className="flex items-center flex-col gap-6 px-6 py-8">
              <div className=" relative h-44 w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="inline-block pb-3 text-xl font-extrabold">{item.title}</h3>
                <p className="h-48">{item.desc}</p>
              </div>
              <div className="flex gap-1 flex-col">
                <h4 className="font-bold">{item.name}</h4>
                <p>{item.stack}</p>
                <p>{item.addr}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
