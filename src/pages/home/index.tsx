import HomepageAbout from "./components/about";
import HomepageBanner from "./components/banner";
import HomepageCommunity from "./components/community";
import HomepageGaming from "./components/gaming";
import HomepageMilestones from "./components/milestones";
import HomepageOutGame from "./components/our-game";
import HomepageUnpToken from "./components/unptoken";

export default function HomePage() {
  return (
    <>
      <HomepageBanner />
      <HomepageAbout />
      <HomepageCommunity />
      <HomepageGaming />
      <HomepageOutGame />
      <HomepageUnpToken />
      <HomepageMilestones />
    </>
  )
}
