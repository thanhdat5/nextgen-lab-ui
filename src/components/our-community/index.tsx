import React from "react";
import Tele from "../../assets/images/content/tele.png";
import Twitter from "../../assets/images/content/twitter.png";
import Discord from "../../assets/images/content/discord.png";
import Image from "next/image";
import Link from "next/link";
const OurCommunity = () => {
  return (
    <>
      <div className="ntg-our-community">
        <div className="ntg-title">This is our community</div>
        <div className="ntg-our-community_box">
          <div className="ntg-icon-social">
            <Link href="">
              <Image src={Tele} alt="tele" />
            </Link>
            <Link href="">
              <Image src={Twitter} alt="tele" />
            </Link>
            <Link href="">
              <Image src={Discord} alt="tele" />  
            </Link>
          </div>
          <div className="ntg-description">
            Communicate on different themes, share your game successes, find
            friends and like-minded people! Join our chat now!
          </div>
          <div className="ntg-button">
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCommunity;
