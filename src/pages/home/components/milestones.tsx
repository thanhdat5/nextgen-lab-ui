import Image from "next/image";
import GameFi from "../../../assets/images/milestones/no1.png";
import NFTTrades from "../../../assets/images/milestones/nft.png";
import Players from "../../../assets/images/milestones/player.png";
import { MILESTONES } from "@/constants/milestones";
import Link from "next/link";

const HomepageMilestones = () => {
  return (
    <section className="nmilestones">
      <div className="container">
        <div className="nsect-title">Milestones</div>
        <div className="row">
          {MILESTONES.map((item) => (
            <div className="col-4" key={item.id}>
              <div className="nmilestone-item">
                <div className="icon">
                  <Image width="110" height="108" src={item.element} alt="" />
                </div>
                <div className="info">
                  <div className="title">{item.title}</div>
                  <div className="description">{item.description}</div>
                  <Link href="#" className="action">
                    {item.link}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default HomepageMilestones;
