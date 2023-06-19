import Image from "next/image";
import SectionContainer from "./SectionContainer";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="mt-2 relative h-full">
      <Image src="/AboutUs.webp" alt="About Us" width={2000} height={532} />

      <SectionContainer>
        <div className="absolute top-28 left-48 md:top-1/4 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-9/12">
          <div className="md:mt-20 md:mb-10">
            <Image
              className="md:w-32 w-12"
              src="/zet_logo_white.svg"
              alt="Zet Logo White "
              width={100}
              height={50}
            />
          </div>
          <hr />

          <div className="flex justify-center md:justify-between w-full font-medium text-white my-5">
            <div className="flex flex-col gap-1 md:gap-5">
              <h3 className="text-sm md:text-xl">Company</h3>
              <p>About Us</p>
              <p> Partner with us</p>
              <p>Blog</p>
            </div>
            <div className="flex flex-col gap-1 md:gap-5">
              <h3 className="text-sm md:text-xl">Legal</h3>
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
            </div>
            <div className="flex flex-col items-center gap-1 md:gap-5">
              <h3 className="text-sm md:text-xl">Contact</h3>
              <p className="flex items-center gap-2">
                <Image
                  src="/Email.webp"
                  alt="Email Icon"
                  width={24}
                  height={24}
                />
                hi@zetapp.in
              </p>
              <p className="flex items-center ">
                <Image
                  src="/Phone.webp"
                  alt="Phone Icon"
                  width={24}
                  height={24}
                />
                +91-7417274072
              </p>
            </div>
            <div className="flex flex-col gap-1 md:gap-5">
              <h3 className="text-sm md:text-xl">Social</h3>
              <div className="flex items-center gap-3">
                <Image
                  src="/linkedin.svg"
                  alt="linkedin"
                  width={32}
                  height={32}
                />
                <Image
                  src="/instagram.svg"
                  alt="instagram"
                  width={32}
                  height={32}
                />
                <Image
                  src="/facebook.svg"
                  alt="facebook"
                  width={32}
                  height={32}
                />
                <Image
                  src="/Telegram.svg"
                  alt="Telegram"
                  width={32}
                  height={32}
                />
                <Image
                  src="/Whatsapp.svg"
                  alt="Whatsapp"
                  width={32}
                  height={32}
                />
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Footer;
