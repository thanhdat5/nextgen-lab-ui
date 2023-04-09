import React from "react";
import Tele from "../../assets/images/content/tele.png";
import Twitter from "../../assets/images/content/twitter.png";
import Discord from "../../assets/images/content/discord.png";
import Image from "next/image";
import Link from "next/link";
const NOurCommunity = () => {
  return (
    <section className="ncommunity">
      <div className="container">
        <div className="nsect-title">This is our community</div>
        <div className="ncommunity-inner">
          <div className="ncommunity-socials">
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
          <div>
            Communicate on different themes, share your game successes, find
            friends and like-minded people! Join our chat now!
          </div>
          <Link href="#" className="ncommunity-act">
            Subscribe
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NOurCommunity;
