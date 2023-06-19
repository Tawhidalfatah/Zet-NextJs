"use client";

import Image from "next/image";
import SectionContainer from "../Shared/SectionContainer";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";

import { useEffect } from "react";

const investors = [
  {
    img: "/kunal.webp",
    name: "Kunal Shah",
    title: "Founder, CRED",
  },
  {
    img: "/gaurav.webp",
    name: "Gaurav Munjal",
    title: "Founder, UNACADEMY",
  },
  {
    img: "/vaish.webp",
    name: "Aakrit Vaish",
    title: "Co-Founder, HAPTIK  ",
  },
  {
    img: "/mathur.webp",
    name: "Harshil Mathur",
    title: "Founder, RAZORPAY",
  },
  {
    img: "/vidit.webp",
    name: "Vidit Aatrey",
    title: "Founder & CEO, MEESHO",
  },
  {
    img: "/amrish.webp",
    name: "Amrish Rau",
    title: "CEO, PINELABS",
  },
  {
    img: "/lalit.webp",
    name: "Lalit Keshre",
    title: "CEO, GROWW",
  },
  {
    img: "/gokul.webp",
    name: "Gokul Rajaram",
    title: "Product, DOORDASH",
  },
];

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
          data-aos-duration="1000"
          className="flex flex-col items-center md:flex-row md:justify-around gap-5 my-16"
        >
          <Tilt scale={1.05} transitionSpeed={1000}>
            <Image
              loading="lazy"
              width={300}
              height={200}
              src="/sequoia.webp"
              alt="Sequoia"
            />
          </Tilt>
          <Tilt scale={1.05} transitionSpeed={1000}>
            <Image
              loading="lazy"
              width={300}
              height={200}
              src="/nexus.webp"
              alt="Nexus"
            />
          </Tilt>
          <Tilt scale={1.05} transitionSpeed={1000}>
            <Image
              loading="lazy"
              width={300}
              height={200}
              src="/catalyst.webp"
              alt="Catalyst"
            />
          </Tilt>
          <Tilt scale={1.05} transitionSpeed={1000}>
            {" "}
            <Image
              loading="lazy"
              width={300}
              height={200}
              src="/waterbridge.webp"
              alt="Waterbridge"
            />
          </Tilt>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 ml-3 md:ml-32">
          {investors.map(({ img, name, title }) => (
            <Tilt key={name} scale={1.05} transitionSpeed={1000}>
              <div>
                <Image
                  loading="lazy"
                  width={205}
                  height={175}
                  src={img}
                  alt={name}
                />
                <div className="py-5">
                  <h3 className="font-medium">{name}</h3>
                  <p className="text-sm">{title}</p>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
};

export default MeetTheInvestors;
