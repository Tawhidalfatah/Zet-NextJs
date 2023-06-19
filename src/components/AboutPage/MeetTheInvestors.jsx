"use client";

import Image from "next/image";
import SectionContainer from "../Shared/SectionContainer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MeetTheInvestors = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <SectionContainer>
        <h1 className="text-4xl text-center md:text-start font-bold py-16 md:pb-0  md:pt-16">
          Meet the Investors
        </h1>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col items-center md:flex-row md:justify-around gap-5 my-16"
        >
          <Image
            className="hover:scale-105 transition"
            width={300}
            height={200}
            src="/sequoia.webp"
            alt="Sequoia"
          />
          <Image
            className="hover:scale-105 transition"
            width={300}
            height={200}
            src="/nexus.webp"
            alt="Nexus"
          />
          <Image
            className="hover:scale-105 transition"
            width={300}
            height={200}
            src="/catalyst.webp"
            alt="Catalyst"
          />
          <Image
            className="hover:scale-105 transition"
            width={300}
            height={200}
            src="/waterbridge.webp"
            alt="Waterbridge"
          />
        </div>
      </SectionContainer>
    </div>
  );
};

export default MeetTheInvestors;
