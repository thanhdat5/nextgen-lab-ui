import NLoader from "@/components/loader";
import HomepageAbout from "./components/about";
import HomepageBanner from "./components/banner";
import HomepageCommunity from "./components/community";
import HomepageContent from "./components/content";
import HomepageDownload from "./components/download";
import HomepageEcosystem from "./components/ecosystem";
import HomepageGaming from "./components/gaming";
import HomepageMilestones from "./components/milestones";
import HomepageOutGame from "./components/our-game";
import HomepagePartner from "./components/partner";
import HomepageRoadmap from "./components/roadmap";
import HomepageToken from "./components/token";
export default function HomePage() {
  return (
    <>
      <NLoader />
      <HomepageBanner />
      <HomepageAbout />
      <HomepageCommunity />
      <HomepageGaming />
      <HomepageOutGame />
      <HomepageMilestones />
      <HomepageRoadmap />
      <HomepageToken />
      <HomepageEcosystem />
      <HomepageContent />
      <HomepagePartner />
      <HomepageDownload />
    </>
  );
}
