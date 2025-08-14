import Ribbon from "@/components/Ribbon";
import { trainings } from "@/src/data/trainings";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata:Metadata ={
  title:'SRIYOG Consulting Training Programs | Online & Onsite Courses Nepal',
  description:'',
  openGraph:{
    title:'SRIYOG Consulting Training Programs | Online & Onsite Courses Nepal',
  }
} 

export default function Trainings(){
    return (
         <>
    <Ribbon name="Trainings" des=""/>
      <section className="max-w-[1180px] mx-auto px-6 lg:px-0 mb-[45px] mt-[45px] w-full flex flex-col sm:flex-row gap-4 justify-between flex-wrap ">
        {trainings.map((item) => (
          <div
            className=" w-full sm:max-w-[316px] h-[300px] flex flex-col gap-1 mb-6"
            key={item.id}
          >
            <Image
              src={item.image}
              width={400}
              height={400}
              alt={item.title}
              className="w-full rounded-[15px] h-full object-cover  "
            />
            <h1 className="text-center my-2">{item.title}</h1>

            <Link
              href={`${item.path}`}
              target="_blank"
              className="px-4 py-2 border border-[#055D59] text-[#055D59] hover:bg-[#055D59] hover:text-white w-[40%] mx-auto text-center rounded-lg transition-all ease-in duration-[100] "
            >
              Browse More
            </Link>
          </div>
        ))}
      </section>
    </>
    )
}