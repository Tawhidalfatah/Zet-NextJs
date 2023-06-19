import GotFeatured from "@/components/AboutPage/GotFeatured";
import HeroAbout from "@/components/AboutPage/HeroAbout";
import HorizontalTimeline from "@/components/AboutPage/HorizontalTimeline";
import MeetTheInvestors from "@/components/AboutPage/MeetTheInvestors";

const AboutPage = () => {
  return (
    <div>
      <HeroAbout></HeroAbout>
      <HorizontalTimeline></HorizontalTimeline>
      <GotFeatured></GotFeatured>
      <MeetTheInvestors></MeetTheInvestors>
    </div>
  );
};

export default AboutPage;
