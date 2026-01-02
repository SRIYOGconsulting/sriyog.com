import Ribbon from "@/components/Ribbon";
import { trainings } from "@/src/data/trainings";
import { Trainings } from "@/src/lib/defination";
import Image from "next/image";
import Link from "next/link";

export default function TrainingSinglepageComponent({ id }: { id: string }) {
  console.log(id);
  const trainingData: Trainings | undefined = trainings.find(
    (item) => item.path === id
  );
  console.log(trainingData);

  return (
    <>
      <Ribbon name={`${trainingData?.title_two ? trainingData.title_two : trainingData?.title}`} des="" />
      <section className="max-w-[1180px] mx-auto mb-[45px]  px-6 lg:px-0 ">
        <Image
          src={`${trainingData?.image}`}
          width={1140}
          height={597}
          alt="top_image"
          className=" border-1 border-blue-50 mb-[45px] rounded-[15px]"
        />
        <h1 className="font-extrabold text-[34px] text-center">
          {trainingData?.title}
        </h1>
        <p className="text-center text-[16px] mb-[45px]">
          {trainingData?.desc}
        </p>
        {/* Delete the dummy data after inserting para_one and para_two in the trainings just added there for test purpose */}
        <div className="max-w-[1180px] mx-auto text-[15px] text-justify leading-[23px] flex flex-col gap-4">
          <p>{trainingData?.para_one} </p>
          {/* Delete the dummy data after inserting para_one and para_two in the trainings just added there for test purpose */}
          <p>{trainingData?.para_two} </p>
          <div className="max-w-[1180px] mx-auto text-[15px] text-justify leading-[23px] flex flex-col gap-4">
            <h1 className="font-bold text-lg">Output of training </h1>
            <p>{trainingData?.outputTraining}</p>
          </div>
        </div>
      </section>

      {/*FAQ */}
      <section className="max-w-[1180px] mx-auto mb-[45px] px-6 lg:px-0">
        {/* Section Title */}
        <h2 className="text-center text-3xl md:text-4xl mb-3 font-extrabold">
          FAQ
        </h2>
        <p className="text-center text-sm text-gray-800 mb-8">
          Here are some of the {trainingData?.title} frequently asked questions
        </p>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Column 1 */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {trainingData?.faq.slice(0,3).map((faq, i) => (
              <div key={i} className="relative flex items-start gap-5 group">
                <div className="w-10 h-10 flex items-center justify-center bg-[#055D59] text-white font-bold rounded-full mt-1 shrink-0">
                  <Image
                    src="/assets/images/consulting/target.svg"
                    alt={`FAQ ${i + 1}`}
                    width={40}
                    height={40}
                  />
                </div>
                {i !== 2 && (
                  <div className="absolute left-[19px] top-12 h-[50px] w-[2px] bg-gray-300" />
                )}
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {trainingData?.faq.slice(3, 7).map((faq, i) => (
              <div key={i} className="relative flex items-start gap-5 group">
                <div className="w-10 h-10 flex items-center justify-center bg-[#055D59] text-white font-bold rounded-full mt-1 shrink-0">
                  <Image
                    src="/assets/images/consulting/target.svg"
                    alt={`FAQ ${i + 4}`}
                    width={40}
                    height={40}
                  />
                </div>
                {i !== 3 && (
                  <div className="absolute left-[19px] top-12 h-[50px] w-[2px] bg-gray-300" />
                )}
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Pricing*/}
      <section className="max-w-[1180px] mx-auto  my-24 px-6 lg:px-0 ">
        <div className="flex flex-col sm:flex-row items-start sm:gap-4 sm:items-center gap-8 justify-between">
          <div className="space-y-2">
          <h1 className="text-xl font-bold mb-2">
            Join Our 1-Month Virtual Program!
          </h1>
          <h1 className="text-md sm:text-md font-medium">
           💻 <span className="font-extrabold">Mode:</span> Live Virtual Sessions via Google Meet
          </h1>
          <h1 className="text-md sm:text-md font-medium">
          📅 <span className="font-extrabold">Duration:</span> 1 Full Month
          </h1>
          <h1 className="text-md sm:text-md font-medium">
            💲 <span className="font-extrabold">Fee:</span> USD 100 only
          </h1>
        </div>
        <div className="space-y-2">
          <h1 className="text-md sm:text-md  font-medium">
            <span className="font-extrabold text-xl mb-2">What to Expect:</span>
          </h1>
          <h1 className="text-md sm:text-md  font-medium">
           🎥 Live, interactive sessions  
          </h1>
          <h1 className="text-md sm:text-md  font-medium">
           💬 Real-time discussions & Q&A
          </h1>
          <h1 className="text-md sm:text-md  font-medium">
           🛠️ Practical learning and engagement  
          </h1>
        </div>
        </div>
         <div className="text-end mt-10">
          <Link
            href={"/trainings/apply"}
            className="mr-2 sm:mr-4 text-center mt-2 w-[35%] px-5 py-3 hover:bg-white active:bg-white active:text-[#02312e] hover:text-[#02312e] text-md border border-[#055D59] bg-[#055D59] text-white rounded-[8px] transition"
          >
            Get Certified Now
          </Link>
          {/* <Link
            href={"/meet"}
            className="text-center mt-2 w-[35%] px-8 py-3 text-sm border border-[#055D59] bg-[#055D59] text-white rounded-[8px] transition"
          >
            Check Schedule
          </Link> */}
        </div>
      </section>

      {/* Related Trainings */}
      <section className="max-w-[1180px] mx-auto mb-[45px] px-6 lg:px-0">
        <h1 className="text-center text-xl font-[800]">Related Trainings</h1>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-between items-center mt-8 mb-[80px]">
          {trainings
            .filter((item) =>
              trainingData?.related_courses.includes(item.title)
            ) // Exclude current and related
            .slice(0, 6) // Only show 6
            .map((training) => (
              <div
                key={training.title}
                className="w-full sm:max-w-[316px] h-auto flex flex-col gap-1 mb-6"
              >
                <Link
                  href={`/trainings/${training.path}`}
                  className="hover:underline font-[800] text-sm"
                >
                  <Image
                    src={training.image}
                    width={316}
                    height={195}
                    alt={training.title}
                    className="w-full h-auto rounded-[15px] mb-2 "
                  />
                </Link>

                <h1 className="font-[900] text-center">{training.title}</h1>
                <p className="text-sm">{training.desc.slice(0,140)}</p>

                <Link
                  href={`/trainings/${training.path}`}
                  className="text-center mt-2 w-[35%] px-5 py-1 text-sm border border-[#055D59] text-[#055D59] hover:bg-[#055D59] hover:text-white rounded-[8px] transition"
                >
                  Read More
                </Link>
              </div>
            ))}
        </div>

       
      </section>
    </>
  );
}
