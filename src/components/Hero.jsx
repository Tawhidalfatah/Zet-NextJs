"use client";

import { useEffect } from "react";
import SectionContainer from "./SectionContainer";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <SectionContainer>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="bg-[#e9f4ff] w-full h-96 md:flex items-center gap-10 relative"
      >
        <div className="flex flex-col justify-between leading pt-14 leading-relaxed md:ml-16 gap-5 items-center md:items-start">
          <h2 className="text-4xl text-center md:text-start font-bold leading leading-normal">
            Become a Financial Advisor and{" "}
            <span className="text-[#264eff]">Earn Rs.1</span> <br />
            <span className="text-[#264eff]">Lakh/Month</span>
          </h2>
          <p className="text-xl">No Investment Required</p>

          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=in.onecode.app"
          >
            <Image
              src="/googleplay.svg"
              alt="Google Play Download"
              width={120}
              height={35}
            ></Image>
          </a>
        </div>

        <Image
          className="hidden md:block absolute right-14 bottom-0"
          alt="Hero"
          src="/HeroImgNew.webp"
          width={485}
          height={478}
        ></Image>
      </div>
    </SectionContainer>
  );
};

export default Hero;
