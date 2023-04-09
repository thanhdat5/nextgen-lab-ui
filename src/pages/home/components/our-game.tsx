import { OURGAMES } from "@/constants/ourgame";
import Image from "next/image";
import Link from "next/link";
import Decor from "../../../assets/images/decor-2.png";
import IconShare from "../../../assets/images/icon-share.svg";
const HomepageOutGame = () => {
  return (
    <>
      <section className="ngames">
        <Image src={Decor} alt="" className="ourgame-decor" />
        <div className="container">
          <div className="ngames-header">
            <div className="nsect-title">Our Games</div>
            <a href="#">
              Full Course for Beginners [Tutorials]
              <Image src={IconShare} alt="" />
            </a>
          </div>
          <div className="row">
            {OURGAMES.map((item) => (
              <div className="col-md-4 col-6" key={item.id}>
                <div className="ngame-item">
                  <div className="image">
                    <Image width={232} height={163} src={item.image} alt="" />
                  </div>
                  <div className="info">
                    <span>{item.description}</span>
                    <Link href={item.link} className="action">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomepageOutGame;
