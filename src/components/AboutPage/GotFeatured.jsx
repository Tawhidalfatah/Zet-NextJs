import Image from "next/image";
import SectionContainer from "@/components/Shared/SectionContainer";

const GotFeatured = () => {
  return (
    <div className="my-16 bg-[#fafbfe] h-96 w-full">
      <SectionContainer>
        <h1 className="text-4xl text-start font-bold pt-16">Got Featured</h1>
        <div className="flex justify-center gap-5 my-5">
          <Image
            width={300}
            height={200}
            src="/EconomicTimes.webp"
            alt="Economic Times"
          />
          <Image width={300} height={200} src="/Inc42.webp" alt="Inc42" />
          <Image width={300} height={200} src="/mint.webp" alt="Mint" />
          <Image
            width={300}
            height={200}
            src="/YourStory.webp"
            alt="Your Story"
          />
          <Image
            width={300}
            height={200}
            src="/BusinessStandard.webp"
            alt="Business Standard"
          />
        </div>
      </SectionContainer>
    </div>
  );
};

export default GotFeatured;
