import Image from "next/image";

const HeroAbout = () => {
  return (
    <div className="relative">
      <Image
        alt="About Hero Image"
        src="/HeroAbout.webp"
        width={2880}
        height={1300}
      />
      <div className="absolute flex flex-col md:gap-3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">
        <h1 className="text-xl md:text-4xl font-bold">OUR MISSION</h1>
        <h3 className="text-sm md:text-base  font-medium">
          Enabling financial inclusion for the next billion Indians <br />
          & making their Zindagi Set. Building a platform that enables you to
          sell <br />
          financial products & earn up to Rs. 1 lakh every month.
        </h3>
        <p className="font-bold">EARN BETTER. LIVE BETTER.</p>
      </div>
    </div>
  );
};

export default HeroAbout;
