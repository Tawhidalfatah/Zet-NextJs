"use client";

import Image from "next/image";
import SectionContainer from "../Shared/SectionContainer";
import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
const TopBrands = () => {
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const toggleMarquee = () => {
      setIsRunning((prevIsRunning) => !prevIsRunning);
    };

    const interval = setInterval(toggleMarquee, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="my-16">
      <h1 className="text-center text-3xl font-semibold">Top Brands on ZET</h1>
      <p className="text-center">We are trusted by best brand in the country</p>
      <SectionContainer>
        <Marquee speed={100} play={isRunning} className="mt-16">
          <div className="border rounded-md mx-10 p-5">
            <Image width={135} height={40} src="/Amex.webp" alt="Amex" />
          </div>
          <div className="border rounded-md mx-10 p-5">
            <Image width={135} height={40} src="/Aufin.webp" alt="Aufin" />
          </div>
          <div className="border rounded-md mx-10 p-5">
            <Image width={135} height={40} src="/Axis.webp" alt="Axis" />
          </div>
          <div className="border rounded-md mx-10 p-5">
            <Image width={135} height={40} src="/Bajaj.webp" alt="Bajaj" />
          </div>
          <div className="border rounded-md mx-10 p-5">
            <Image width={135} height={40} src="/BOB.webp" alt="BOB" />
          </div>
          <div className="border rounded-md mx-10 p-5">
            <Image width={135} height={40} src="/icici.webp" alt="icici" />
          </div>
          <div className="border rounded-md mx-10 p-5">
            <Image width={135} height={40} src="/idfc.webp" alt="idfc" />
          </div>
          <div className="border rounded-md mx-10 p-5">
            <Image
              width={135}
              height={40}
              src="/indusInd.webp"
              alt="indusInd"
            />
          </div>
          <div className="border rounded-md mx-10 p-5">
            <Image
              width={135}
              height={40}
              src="/StandardChartered.webp"
              alt="StandardChartered"
            />
          </div>
          <div className="border rounded-md mx-10 p-5">
            <Image width={135} height={40} src="/YesBank.webp" alt="YesBank" />
          </div>
        </Marquee>
      </SectionContainer>
    </div>
  );
};

export default TopBrands;
