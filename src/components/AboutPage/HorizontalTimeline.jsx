import Image from "next/image";
import React from "react";
import SectionContainer from "../Shared/SectionContainer";

const HorizontalTimeline = () => {
  return (
    <div>
      <h1 className="text-4xl text-center font-bold my-16">
        How we evolved over the years
      </h1>
      <SectionContainer>
        <div className="image-container">
          <Image
            className="image"
            loading="lazy"
            src="/timeline.webp"
            width={1872}
            height={460}
            alt="How we evolved"
          />
        </div>
      </SectionContainer>
    </div>
  );
};

export default HorizontalTimeline;
