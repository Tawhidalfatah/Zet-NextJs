"use client";

import Image from "next/image";
import SectionContainer from "../Shared/SectionContainer";
import Tilt from "react-parallax-tilt";

const ProductsOnZet = () => {
  return (
    <div className="h-full md:h-[1000px] bg-[#eef6ff] mt-24">
      <div className="pt-16">
        <h1 className="text-center text-3xl font-semibold">Products on ZET</h1>
        <p className="text-center">
          We are trusted by best brand in the country
        </p>
      </div>
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 mx-10">
          <Tilt scale={1.05} transitionSpeed={1000}>
            <div className="w-[740] h-[270] bg-[#EDFFEC] group hover:bg-white flex   items-center  p-10 rounded-lg">
              <Image
                className="filter grayscale group-hover:filter-none "
                src="/CC.webp"
                alt="CREDIT CARDS"
                width={190}
                height={170}
              />
              <div>
                <h3 className="font-bold text-xl">CREDIT CARDS</h3>
                <p>
                  100% Contactless Application Process with Instant Approval
                  From Top Banks.
                </p>
              </div>
            </div>
          </Tilt>
          <Tilt scale={1.05} transitionSpeed={1000}>
            <div className="w-[740] h-[270] bg-[#FFF1CA] group hover:bg-white flex items-center  p-10 rounded-lg">
              <Image
                className="filter grayscale group-hover:filter-none"
                src="/Loan.webp"
                alt="LOANS"
                width={190}
                height={170}
              />
              <div>
                <h3 className="font-bold text-xl">LOANS</h3>
                <p>
                  100% online process. Instant offers. Affordable Rate of
                  Interest on loans.
                </p>
              </div>
            </div>
          </Tilt>
          <Tilt scale={1.05} transitionSpeed={1000}>
            <div className="w-[740] h-[270] bg-[#FFEEE7]  group hover:bg-white flex items-center  p-10 rounded-lg">
              <Image
                className="filter grayscale group-hover:filter-none"
                src="/BNPL.webp"
                alt="BUY NOW PAY LATER"
                width={190}
                height={170}
              />
              <div>
                <h3 className="font-bold text-xl">BUY NOW PAY LATER</h3>
                <p>
                  Short-term financing that allows consumers to make purchases
                  and pay for them over time.
                </p>
              </div>
            </div>
          </Tilt>
          <Tilt scale={1.05} transitionSpeed={1000}>
            <div className="w-[740] h-[270] bg-[#FFF5E7] group hover:bg-white flex items-center p-10 rounded-lg">
              <Image
                className="filter grayscale group-hover:filter-none"
                src="/AccountSave.webp"
                alt="SAVING ACCOUNTS"
                width={190}
                height={170}
              />
              <div>
                <h3 className="font-bold text-xl">SAVING ACCOUNTS</h3>
                <p>
                  ZET offers range of savings account that suits your personal
                  needs for the banking.
                </p>
              </div>
            </div>
          </Tilt>
        </div>
      </SectionContainer>
    </div>
  );
};

export default ProductsOnZet;
