import Image from "next/image";

export default function TwentyBooks() {
  return (
    <>
      <section className=" lg:w-[900px] max-lg:container max-lg:px-3 mx-auto my-[45px] space-y-6">
        <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
          <Image
            src="/assets/images/blog/books-1.jpg"
            alt="things-to-keep-in-website"
            className="object-cover h-full w-full"
            fill
          />
        </div>
        <div>
          <h1 className="font-extrabold text-4xl text-[#055d59] text-center">
            20 Books that can change YOU
          </h1>
          <p className="text-center italic">
            By: Pracas Upreti, Information Technology Consultant
          </p>
          <p className="text-center italic">June 18, 2018</p>
        </div>
        <p>
          Life is all about creating news things, changing the world. It depends
          upon a passion, dedication, a good mentorship, effective plan, good
          investment and must have a vision to serve the community. It needs to
          see the dream to make it true. A person who thought just to make a
          networking site to his campus made a world renowned facebook. A person
          who forget bringing his USB drive to college created DropBox.
          Everything starts to solve the pain, solve the problem and also to
          make changes in society. Coming to the Bollywood,{" "}
          <span className="italic underline">
            Even a director, actor or a producer are unknown that their movie
            will beat the box office or will be flopped.
          </span>{" "}
          The assumption goes wrong most of the time. Nobody start walking after
          their birth, it takes few years to stand, few years to walk properly
          and more years to run and only few becomes Bolt.
        </p>
        <div className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden ">
          <Image
            src="/assets/images/blog/books-2.jpg"
            alt="things-to-keep-in-website"
            className="object-cover h-full w-full"
            fill
          />
        </div>
        <p>
          To succeed it needs dedication, study, plan and vision to go great.
          But the question comes, how to succeed? what is dedication?, what is
          study?, what is plan? and what is vision ? The answer for everything
          is to study. It can be seeing YouTube videos, reading books, listening
          podcast and few other ways to make your dream come true.
        </p>

        <p className="underline italic">
          Your brain is like a sword, if you hit in a stone, it will be blunt
          but if you rub properly in stone then it will be more sharp.
        </p>
        <p>
          Brain copies things, Even a single line can change someone&apos;s life.
          Reading books can be very helpful to know the past, present and future
          too. Few books are listed below which can be very helpful for Startup,
          Entrepreneurs, Business Owner, Students, Founders &amp; Co-Founders and
          those who plans to make changes human&apos;s life.
        </p>

        {Array.from({ length: 21 }, (_, i) => {
          const index = i + 3;
          return (
            <div
              key={index}
              className="relative w-full md:h-[450px] h-[250px] rounded-3xl overflow-hidden "
            >
              <Image
                src={`/assets/images/blog/books-${index}.jpg`}
                alt="things-to-keep-in-website"
                className="object-cover h-full w-full"
                fill
              />
            </div>
          );
        })}

        <p>
          The collection are based truly on personal experience and thoughts. It
          may differ from person to person or may be different for others from
          different domain. &mdash; Prakash Upreti
        </p>
      </section>
    </>
  );
}
