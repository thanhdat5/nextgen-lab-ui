import HomepageAbout from "./components/about";
import HomepageBanner from "./components/banner";
import HomepageCommunity from "./components/community";
import HomepageGaming from "./components/gaming";
import HomepageMilestones from "./components/milestones";

export default function HomePage() {
  return (
    <>
      <HomepageBanner />
      <HomepageAbout />
      <HomepageCommunity />
      <HomepageGaming />
      <HomepageMilestones />
    </>
  )
}
