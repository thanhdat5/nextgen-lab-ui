import { PARTNERS } from "@/constants/partner";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomepagePartner = () => {
  return (
    <section className="ntg-partner">
      <div className="container">
        <div className="ntg-title">Strategic Partners</div>
        <div className="ntg-partner-items">
          {PARTNERS.map((item) => (
            <div className="ntg-partner-item" key={item.id}>
              <Link href="">
                <Image width={142} height={70} src={item.element} alt="" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepagePartner;
