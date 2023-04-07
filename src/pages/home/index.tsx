import HomepageAbout from "./components/about";
import HomepageBanner from "./components/banner";
import HomepageCommunity from "./components/community";
import HomepageContent from "./components/content";
import HomepageDownload from "./components/download";
import HomepageGaming from "./components/gaming";
import HomepageMilestones from "./components/milestones";
import HomepagePartner from "./components/partner";

export default function HomePage() {
  return (
    <>
      <HomepageBanner />
      <HomepageAbout />
      <HomepageCommunity />
      <HomepageGaming />
      <HomepageMilestones />
      <HomepageContent />
      <HomepagePartner />
      <HomepageDownload />
    </>
  )
}
