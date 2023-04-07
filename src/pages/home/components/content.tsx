import React from "react";
import Image1 from "../../../assets/images/content/item-1.png";
import Image2 from "../../../assets/images/content/item-2.png";
import Image from "next/image";
import Vision from "@/components/vision";
import Gallery from "@/components/gallery";
import OurCommunity from "@/components/our-community";
const HomepageContent = () => {
  return (
    <section className="ntg-content">
      <div className="container">
        <Vision />
        <Gallery />
        <OurCommunity />
      </div>
    </section>
  );
};

export default HomepageContent;
