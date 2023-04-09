import React from "react";
import Image2 from "../../assets/images/content/item-2.png";
import Image from "next/image";
const NGallery = () => {
  return (
    <section className="ngallery">
    <div className="container">
        <div className="ngallery-inner">
            <div className="nsect-title">Gallery</div>
            <div className="ngallery-body">
                <p>Our vision is that no NFT metaverse should be singular but rather each metaverse can be
                    interconnected giving each unique NFT increased utility through NFT interoperability between
                    games and platforms.</p>
            </div>
            <Image src={Image2} alt="" />
        </div>
    </div>
</section>
  );
};

export default NGallery;
