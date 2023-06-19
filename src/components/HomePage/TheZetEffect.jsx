"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper";

import "./TheZetEffect.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TheZetEffect = () => {
  return (
    <div className="zet-bg md:h-[1100px] flex justify-center items-center">
      <div className="zet-bg2 md:h-[714px] md:w-[1500px] relative">
        <div className="absolute top-48">
          <Image
            style={{ color: "transparent", mixBlendMode: "luminosity" }}
            src="/peeps.webp"
            alt="People"
            width={695}
            height={463}
          />
        </div>

        <div className="w-2/6 top-72 right-56 absolute">
          <h1 className="text-2xl font-bold text-white pb-10">
            The Zet Effect
          </h1>
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ type: "progressbar" }}
            modules={[Autoplay, Pagination]}
          >
            <SwiperSlide>
              <p className="text-xl text-white">
                14 Lakh+ Financial Advisor across India are using ZET to
                increase their income.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="text-xl text-white">
                More than ₹20 Cr earned by our Agents by selling Credit Cards
                and Loans
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="text-xl text-white">
                We helped customers in more than 50 cities to get their first
                financial product
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TheZetEffect;
