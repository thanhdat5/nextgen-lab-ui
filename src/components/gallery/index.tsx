import React from "react";
import Image2 from "../../assets/images/content/item-2.png";
import Image from "next/image";
const Gallery = () => {
  return (
    <div className="ntg-gallery">
      <div className="ntg-title">Gallery</div>
      <div>
      <div className="ntg-gallery-img">
          <Image src={Image2} alt="" />
        </div>
        <div className="ntg-gallery-box">
          <p className="ntg-gallery-text">
            Our vision is that no NFT metaverse should be singular but rather
            each metaverse can be interconnected giving each unique NFT
            increased utility through NFT interoperability between games and
            platforms.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Gallery;
