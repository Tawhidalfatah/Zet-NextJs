"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { BsLinkedin } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const founders = [
  {
    img: "/Manish.webp",
    name: "Manish Shara",
    title: "Co-Founder & CEO",
    linkedIn: "https://www.linkedin.com/in/manishshara/",
  },
  {
    img: "/Yash.webp",
    name: "Yash Desai",
    title: "Co-Founder",
    linkedIn: "https://www.linkedin.com/in/yash-desai-20a3b5b1/",
  },
  {
    img: "/Lokesh.webp",
    name: "Lokesh Agarwal",
    title: "CTO",
    linkedIn: "https://www.linkedin.com/in/lokesh198/",
  },
];

const MeetOurFounders = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="h-full md:h-[1000px] bg-[#eef6ff] mt-44">
      <div className="text-center pt-16 ">
        <h1 className="font-bold text-4xl leading leading-relaxed">
          Meet our Founders
        </h1>
        <p className="text-xl font-medium">Few words from founders desk</p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex flex-col md:flex-row justify-evenly ml-8 mt-28"
      >
        {founders.map(({ img, name, title, linkedIn }) => (
          <Tilt key={name} scale={1.05} transitionSpeed={1000}>
            <div>
              <Image
                loading="lazy"
                width={420}
                height={415}
                src={img}
                alt={name}
              />
              <div className="py-5 flex justify-evenly  md:justify-between items-center">
                <div>
                  <h3 className="font-medium text-2xl">{name}</h3>
                  <p className="text-xl">{title}</p>
                </div>
                <a target="_blank" href={linkedIn} alt={name}>
                  <BsLinkedin size={35} />
                </a>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default MeetOurFounders;
