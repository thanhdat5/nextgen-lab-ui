import Image from "next/image";
import React from "react";
import Image1 from "../../assets/images/content/item-1.png";
const NVision = () => {
  return (
    <section className="nvision">
      <div className="container">
        <div className="nsect-title">Our Vision</div>
        <div className="nvision-inner">
          <Image src={Image1} alt="" />
          <div className="nvision-body">
            <p>
              “We are committed to developing sustainable games, communities,
              and ecosystems and providing users with a great, transparent,
              secure, and user-friendly experience.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NVision;
