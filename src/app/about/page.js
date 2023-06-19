import AboutUsFooter from "@/components/AboutPage/AboutUsFooter";
import GotFeatured from "@/components/AboutPage/GotFeatured";
import HeroAbout from "@/components/AboutPage/HeroAbout";
import HorizontalTimeline from "@/components/AboutPage/HorizontalTimeline";
import MeetOurFounders from "@/components/AboutPage/MeetOurFounders";
import MeetTheInvestors from "@/components/AboutPage/MeetTheInvestors";

const AboutPage = () => {
  return (
    <div>
      <HeroAbout></HeroAbout>
      <HorizontalTimeline></HorizontalTimeline>
      <GotFeatured></GotFeatured>
      <MeetTheInvestors></MeetTheInvestors>
      <MeetOurFounders></MeetOurFounders>
      <AboutUsFooter></AboutUsFooter>
    </div>
  );
};

export default AboutPage;
