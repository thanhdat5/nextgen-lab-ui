import { PARTNERS } from "@/constants/partner";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomepagePartner = () => {
  return (
    <section className="npartners">
      <div className="container">
        <div className="nsect-title">Strategic Partners</div>
        <div className="row row-cols-md-5 row-cols-4">
          {PARTNERS.map((item) => (
            <div className="col" key={item.id}>
              <Link className="npartner" href="">
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
