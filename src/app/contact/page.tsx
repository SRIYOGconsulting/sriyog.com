import Ribbon from "@/components/Ribbon";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | SRIYOG Consulting",
  description: "Get in touch with SRIYOG Consulting for expert guidance and support.",
  openGraph: {
    title: "Contact Us | SRIYOG Consulting",
    description: "Get in touch with SRIYOG Consulting for expert guidance and support.",
    url: "https://www.sriyog.com/contact",
    images: [
      {
        url: "https://sriyog.com/assets/images/og/default.jpg",
        alt: "Contact Us"
      }
    ]
  }
};
export default function Page() {
  const card = [
   
    {
      img: "/assets/images/contact/1.png",
      name: "Prakash ",
      field: "Project Manager",
      app: "eMail",
      link: "mailto:pm@sriyog.com",
    },
    {
      img: "/assets/images/contact/2.png",
      name: "Bijay",
      field: "Internship Coordinator",
      app: "eMail",
      link: "mailto:internship@sriyog.com",
    },
     {
      img: "/assets/images/contact/3.png",
      name: "PRACAS",
      field: "CTO",
      app: "eMail",
      link: "mailto:p@sriyog.com",
    },
  ];
  return (
    <>
      <>
        <Ribbon name="Contact Us" des="" />

        <section className="lg:w-[1180px] mx-auto mb-[45px] grid grid-cols-1 lg:grid-cols-2 place-content-between gap-10 ">
          <div className=" text-[#333]  max-lg:container max-lg:px-3 h-[703px] max-md:h-auto mx-auto ">
            <p className="font-semibold text-[1.8rem]  mb-[15px] max-md:text-[1.5rem] text-[#055d59]">
              Welcome to SRIYOG Consulting
            </p>
            <p className="mb-[45px]">
              Welcome to SRIYOG Consulting! We&apos;re located at Rem.Work, Kamalpokhari,
              Kathmandu, Nepal.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.193460784485!2d85.32073757615186!3d27.711312476180435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef740a066ed089%3A0xaf7934e44a7b1e17!2sSRIYOG!5e0!3m2!1sen!2snp!4v1741059444503!5m2!1sen!2snp"
              width="100%"
              height="300"
              style={{ border: "0" }}
              className="mb-[45px]"
            ></iframe>
            <div className="flex flex-wrap justify-between">
              <div className="w-[238.5px] mb-[25px] max-md:w-full">
                <div className="flex gap-2 items-center text-[1.6rem] font-semibold ">
                  <div className="relative h-10 w-10">
                    <Image
                      src="/assets/icons/user-id.svg"
                      alt="registration"
                      className="object-contain"
                      fill
                    />
                  </div>
                  <span className="text-[#055d59] ">Training</span>
                </div>
                <p className="text-[14px] max-md:text-[16px]">
                  Join our team to sharpen your skills.
                </p>
              </div>
              <div className="w-[238.5px] mb-[25px] max-md:w-full">
                <div className="flex gap-2 items-center text-[1.6rem] font-semibold ">
                  <div className="relative h-10 w-10">
                    <Image
                      src="/assets/icons/user.svg"
                      alt="membership"
                      className="object-contain"
                      fill
                    />
                  </div>
                  <span className="text-[#055d59] ">Workshop</span>
                </div>

                <p className="text-[14px] max-md:text-[16px]">
                  Host an IT workshop & seminar.
                </p>
              </div>
              <div className="w-[238.5px] mb-[25px] max-md:w-full">
                <div className="flex gap-2 items-center text-[1.6rem] font-semibold ">
                  <div className="relative h-10 w-10">
                    <Image
                      src="/assets/icons/loudspeaker.svg"
                      alt="promotion"
                      className="object-contain"
                      fill
                    />
                  </div>
                  <span className="text-[#055d59] ">Meeting</span>
                </div>
                <p className="text-[14px] max-md:text-[16px]">
                   Book a Meeting to discuss and clarify your needs.
                </p>
              </div>
              <div className="w-[238.5px] mb-[25px] max-md:w-full">
                <div className="flex gap-2 items-center text-[1.6rem] font-semibold ">
                  <div className="relative h-10 w-10">
                    <Image
                      src="/assets/icons/shield.svg"
                      alt="security"
                      className="object-contain"
                      fill
                    />
                  </div>
                  <span className="text-[#055d59] ">Internship</span>
                </div>
                <p className="text-[14px] max-md:text-[16px]">
                  Get experienced in real time projects.
                </p>
              </div>
            </div>
          </div>
          <div className="  bg-[#efefef] p-[45px] max-lg:w-full lg:rounded-lg  max-lg:px-3  max-md:h-auto">
            <div className="text-[#055d59] font-semibold text-[1.6rem] flex items-center mb-[40px]  gap-2">
              <div className="relative h-10 w-10">
                <Image
                  src="/assets/icons/mail.svg"
                  alt="mail"
                  fill
                  className="object-contain"
                />
              </div>
              Send Your Queries
            </div>
            <form>
              <section className="mb-4 flex flex-wrap justify-between w-full ">
                <div className="w-[48%] max-md:w-full">
                  <label htmlFor="fname">First Name</label>
                  <br />
                  <input
                    type="text"
                    name=""
                    id="fname"
                    className="mt-1 px-3 py-2  rounded-md w-full bg-white focus:outline-none  max-md:mb-4"
                    placeholder="eg: Madan"
                    required
                  />
                </div>
                <div className="w-[48%] max-md:w-full">
                  <label htmlFor="lname">Last Name</label>
                  <br />
                  <input
                    type="text"
                    name=""
                    id="lname"
                    className="mt-1 px-3 py-2 bg-white focus:outline-none rounded-md w-full"
                    placeholder="eg: Tamang"
                    required
                  />
                </div>
              </section>
              <section className="mb-4 w-full">
                <label htmlFor="mail">Email</label>
                <br />
                <input
                  type="email"
                  name=""
                  id="mail"
                  placeholder="eg: madan@sriyog.com"
                  className="mt-1 px-3 py-2 rounded-md w-full bg-white focus:outline-none border-[#4b4b4b]"
                  required
                />
                <span className="text-[12px] text-[#333]">
                  We&apos;ll never share your email with anyone else.
                </span>
              </section>
              <section className="mb-4 flex flex-wrap justify-between">
                <div className="w-[30%] max-md:w-full">
                  <label htmlFor="country">Country Code</label>
                  <br />
                  <select
                    name="countryCode"
                    id="country"
                    className="w-full px-2 py-[0.65rem] mt-1 rounded-md bg-white focus:outline-none   max-md:mb-4"
                    required
                  >
                    <option value="+977-">Nepal (+977)</option>
                    <option value="+93-">Afghanistan (+93)</option>
                    <option value="+355-">Albania (+355)</option>
                    <option value="+213-">Algeria (+213)</option>
                    <option value="+376-">Andorra (+376)</option>
                    <option value="+244-">Angola (+244)</option>
                    <option value="+1-268-">
                      Antigua and Barbuda (+1-268)
                    </option>
                    <option value="+54-">Argentina (+54)</option>
                    <option value="+374-">Armenia (+374)</option>
                    <option value="+61-">Australia (+61)</option>
                    <option value="+43-">Austria (+43)</option>
                    <option value="+994-">Azerbaijan (+994)</option>
                    <option value="+973-">Bahrain (+973)</option>
                    <option value="+880-">Bangladesh (+880)</option>
                    <option value="+1-246-">Barbados (+1-246)</option>
                    <option value="+375-">Belarus (+375)</option>
                    <option value="+32-">Belgium (+32)</option>
                    <option value="+501-">Belize (+501)</option>
                    <option value="+229-">Benin (+229)</option>
                    <option value="+975-">Bhutan (+975)</option>
                    <option value="+591-">Bolivia (+591)</option>
                    <option value="+387-">Bosnia and Herzegovina (+387)</option>
                    <option value="+267-">Botswana (+267)</option>
                    <option value="+55-">Brazil (+55)</option>
                    <option value="+673-">Brunei (+673)</option>
                    <option value="+359-">Bulgaria (+359)</option>
                    <option value="+226-">Burkina Faso (+226)</option>
                    <option value="+257-">Burundi (+257)</option>
                    <option value="+855-">Cambodia (+855)</option>
                    <option value="+237-">Cameroon (+237)</option>
                    <option value="+1-">Canada (+1)</option>
                    <option value="+238-">Cape Verde (+238)</option>
                    <option value="+236-">
                      Central African Republic (+236)
                    </option>
                    <option value="+235-">Chad (+235)</option>
                    <option value="+56-">Chile (+56)</option>
                    <option value="+86-">China (+86)</option>
                    <option value="+57-">Colombia (+57)</option>
                    <option value="+269-">Comoros (+269)</option>
                    <option value="+506-">Costa Rica (+506)</option>
                    <option value="+385-">Croatia (+385)</option>
                    <option value="+53-">Cuba (+53)</option>
                    <option value="+357-">Cyprus (+357)</option>
                    <option value="+420-">Czech Republic (+420)</option>
                    <option value="+45-">Denmark (+45)</option>
                    <option value="+253-">Djibouti (+253)</option>
                    <option value="+1-767-">Dominica (+1-767)</option>
                    <option value="+1-809-">Dominican Republic (+1-809)</option>
                    <option value="+593-">Ecuador (+593)</option>
                    <option value="+20-">Egypt (+20)</option>
                    <option value="+503-">El Salvador (+503)</option>
                    <option value="+240-">Equatorial Guinea (+240)</option>
                    <option value="+291-">Eritrea (+291)</option>
                    <option value="+372-">Estonia (+372)</option>
                    <option value="+251-">Ethiopia (+251)</option>
                    <option value="+679-">Fiji (+679)</option>
                    <option value="+358-">Finland (+358)</option>
                    <option value="+33-">France (+33)</option>
                    <option value="+241-">Gabon (+241)</option>
                    <option value="+220-">Gambia (+220)</option>
                    <option value="+995-">Georgia (+995)</option>
                    <option value="+49-">Germany (+49)</option>
                    <option value="+233-">Ghana (+233)</option>
                    <option value="+30-">Greece (+30)</option>
                    <option value="+1-473-">Grenada (+1-473)</option>
                    <option value="+502-">Guatemala (+502)</option>
                    <option value="+224-">Guinea (+224)</option>
                    <option value="+245-">Guinea-Bissau (+245)</option>
                    <option value="+592-">Guyana (+592)</option>
                    <option value="+509-">Haiti (+509)</option>
                    <option value="+504-">Honduras (+504)</option>
                    <option value="+36-">Hungary (+36)</option>
                    <option value="+354-">Iceland (+354)</option>
                    <option value="+91-">India (+91)</option>
                    <option value="+62-">Indonesia (+62)</option>
                    <option value="+98-">Iran (+98)</option>
                    <option value="+964-">Iraq (+964)</option>
                    <option value="+353-">Ireland (+353)</option>
                    <option value="+972-">Israel (+972)</option>
                    <option value="+39-">Italy (+39)</option>
                    <option value="+225-">Ivory Coast (+225)</option>
                    <option value="+1-876-">Jamaica (+1-876)</option>
                    <option value="+81-">Japan (+81)</option>
                    <option value="+962-">Jordan (+962)</option>
                    <option value="+7-">Kazakhstan (+7)</option>
                    <option value="+254-">Kenya (+254)</option>
                    <option value="+686-">Kiribati (+686)</option>
                    <option value="+965-">Kuwait (+965)</option>
                    <option value="+996-">Kyrgyzstan (+996)</option>
                    <option value="+856-">Laos (+856)</option>
                    <option value="+371-">Latvia (+371)</option>
                    <option value="+961-">Lebanon (+961)</option>
                    <option value="+266-">Lesotho (+266)</option>
                    <option value="+231-">Liberia (+231)</option>
                    <option value="+218-">Libya (+218)</option>
                    <option value="+423-">Liechtenstein (+423)</option>
                    <option value="+370-">Lithuania (+370)</option>
                    <option value="+352-">Luxembourg (+352)</option>
                    <option value="+389-">North Macedonia (+389)</option>
                    <option value="+261-">Madagascar (+261)</option>
                    <option value="+265-">Malawi (+265)</option>
                    <option value="+60-">Malaysia (+60)</option>
                    <option value="+960-">Maldives (+960)</option>
                    <option value="+223-">Mali (+223)</option>
                    <option value="+356-">Malta (+356)</option>
                    <option value="+692-">Marshall Islands (+692)</option>
                    <option value="+222-">Mauritania (+222)</option>
                    <option value="+230-">Mauritius (+230)</option>
                    <option value="+52-">Mexico (+52)</option>
                    <option value="+691-">Micronesia (+691)</option>
                    <option value="+373-">Moldova (+373)</option>
                    <option value="+377-">Monaco (+377)</option>
                    <option value="+976-">Mongolia (+976)</option>
                    <option value="+382-">Montenegro (+382)</option>
                    <option value="+212-">Morocco (+212)</option>
                    <option value="+258-">Mozambique (+258)</option>
                    <option value="+95-">Myanmar (+95)</option>
                    <option value="+264-">Namibia (+264)</option>
                    <option value="+31-">Netherlands (+31)</option>
                    <option value="+64-">New Zealand (+64)</option>
                    <option value="+505-">Nicaragua (+505)</option>
                    <option value="+227-">Niger (+227)</option>
                    <option value="+234-">Nigeria (+234)</option>
                    <option value="+850-">North Korea (+850)</option>
                    <option value="+47-">Norway (+47)</option>
                    <option value="+968-">Oman (+968)</option>
                    <option value="+92-">Pakistan (+92)</option>
                    <option value="+680-">Palau (+680)</option>
                    <option value="+970-">Palestine (+970)</option>
                    <option value="+507-">Panama (+507)</option>
                    <option value="+675-">Papua New Guinea (+675)</option>
                    <option value="+595-">Paraguay (+595)</option>
                    <option value="+51-">Peru (+51)</option>
                    <option value="+63-">Philippines (+63)</option>
                    <option value="+48-">Poland (+48)</option>
                    <option value="+351-">Portugal (+351)</option>
                    <option value="+974-">Qatar (+974)</option>
                    <option value="+40-">Romania (+40)</option>
                    <option value="+7-">Russia (+7)</option>
                    <option value="+250-">Rwanda (+250)</option>
                  </select>
                </div>
                <div className="w-[40%] max-md:w-full">
                  <label htmlFor="phone">Phone</label>
                  <br />
                  <input
                    type="text"
                    name=""
                    id="phone"
                    placeholder="Phone"
                    className="mt-1 px-3 py-2 rounded-md w-full bg-white focus:outline-none max-md:mb-4"
                    required
                  />
                </div>
                <div className="w-[25%] max-md:w-full">
                  <label htmlFor="ext">Extension</label>
                  <br />
                  <input
                    type="text"
                    name=""
                    id="ext"
                    placeholder="Extension"
                    className="mt-1 px-3 py-2 rounded-md w-full bg-white focus:outline-none border-[#4b4b4b]"
                    required
                  />
                </div>
              </section>
              <section className="mb-5">
                <label htmlFor="help" className="text-[#333]">
                  What do you need help with?
                </label>
                <br />
                <select
                  name="help"
                  id="help"
                  className="w-full px-3 py-2 mt-1 rounded-md bg-white  focus:outline-none border-[#4b4b4b]"
                  required
                >
                  <option value="">Sales</option>
                  <option value="">Support</option>
                  <option value="">Billing</option>
                  <option value="">Complain</option>
                  <option value="">Training</option>
                  <option value="">Internship</option>
                  <option value="">Certificates</option>
                  <option value="">Meeting</option>
                  <option value="">Others</option>
                </select>
              </section>
              <section className="mb-4">
                <textarea
                  name=""
                  id=""
                  className="w-full h-[90px] px-3 rounded-md py-2 bg-white focus:outline-none border-[#4b4b4b]"
                  placeholder="Message"
                ></textarea>
              </section>
              <input
                type="submit"
                name=""
                id=""
                value="Submit"
                className=" border-[1.5px]  text-white  py-2 px-6 font-medium bg-[#055d59] rounded-md transition duration-300 ease-in-out cursor-pointer "
              />
            </form>
          </div>
        </section>

        <section className=" w-full mb-[56px]  py-[40px]">
            <h2 className="text-[2rem] text-center font-bold text-[#0D5D59]">
              Quick Contact
            </h2>
            <p className="text-gray-600 text-center mb-12 pt-3">
              Quick contact the relevant people.
            </p>
          <div className="max-w-[1180px] max-lg:w-full mx-auto flex flex-wrap justify-around">
            {card.map((item, index) => (
              <div
                key={index + 1}
                className="w-[28%] max-md:w-[85%]  p-[25px] text-[#333] text-center rounded-md "
              >
                <div className="relative mb-3  max-md:w-[90%] h-60 w-full mx-auto  rounded-[50%]">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-contain p-[2px]"
                  />
                </div>

                <p className="text-[1.1rem] font-semibold mb-3">{item.name}</p>
                <p className="mb-5">{item.field}</p>
                <Link
                  href={item.link}
                  target="_blank"
                  className="bg-white rounded-md text-[#4b4b4b] border-[1.5px] hover:bg-[#055d59] hover:text-white transition duration-300 ease-in-out font-medium py-2 px-5"
                >
                  {item.app}
                </Link>
              </div>
            ))}
          </div>
        </section>
      </>
    </>
  );
}
