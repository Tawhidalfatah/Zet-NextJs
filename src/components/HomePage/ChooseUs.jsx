"use client";

import Image from "next/image";
import SectionContainer from "../Shared/SectionContainer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const benefits = [
  {
    path: "/zero_investment.svg",
    heading: "Zero Investment",
    desc: "Build your business without any investment",
  },
  {
    path: "/quick_payout.svg",
    heading: "Quick Payout",
    desc: "Direct Payout in your bank account in short time",
  },
  {
    path: "/Fin_products.svg",
    heading: "Limitless Earnings",
    desc: "Direct Payout in your bank account in short time",
  },
  {
    path: "/Icon_support.svg",
    heading: "Training & Upskilling",
    desc: "Get trained by finance and sales experts",
  },
  {
    path: "/customerSupport.svg",
    heading: "Customer Support",
    desc: "Access tools and content to build relationship",
  },
  {
    path: "/financialProduct.svg",
    heading: "Financial Products",
    desc: "Trustworthy & high-rated products & categories",
  },
];

const ChooseUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <SectionContainer>
      <div className="flex items-center my-10 pb-32">
        <div className="relative md:block hidden">
          <div className="absolute top-36 text-center">
            <h2 className="text-xl font-bold">
              Why <span className="text-[#145cc5]">Choose Us</span>
            </h2>
            <p>why we are loved by our customers</p>
          </div>
          <div>
            <Image
              src="/checkbg.webp"
              alt="Checked Background"
              width={280}
              height={500}
            />
          </div>
          <div className="absolute top-64">
            <Image
              src="/redshirt.webp"
              alt="Red Shirt wearing person"
              width={277}
              height={374}
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="grid grid-cols-2 md:grid-cols-3 ml-2 md:ml-28 gap-10"
        >
          {benefits.map(({ path, heading, desc }) => (
            <div key={path}>
              <Image
                className="mx-auto md:mx-0"
                src={path}
                alt={heading}
                width={115}
                height={115}
              />
              <br />
              <h1 className="text-xl text-center md:text-start font-bold">
                {heading}
              </h1>
              <p className="font-medium text-center md:text-start">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ChooseUs;
