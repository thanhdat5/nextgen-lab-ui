import React from "react";
import Tele from "../../assets/images/content/tele.png";
import Twitter from "../../assets/images/content/twitter.png";
import Discord from "../../assets/images/content/discord.png";
import Image from "next/image";
const OurCommunity = () => {
  return (
    <>
      <div className="ntg-our-community">
        <div className="ntg-title">This is our community</div>
        <div className="ntg-our-community_box">
          <div className="ntg-icon-social">
            <Image src={Tele} alt="tele" />
            <Image src={Twitter} alt="tele" />
            <Image src={Discord} alt="tele" />
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
