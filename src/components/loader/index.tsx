import React from "react";
import { useEffect } from "react";
import $ from "jquery";
const NLoader = () => {
  useEffect(() => {
    setTimeout(() => {
      $(".nloader").fadeOut(500);
      $("body").removeClass("overflow-hidden");
    }, 1000);
  }, []);
  return (
    <div className="nloader">
      <div className="nfolding-cube">
        <div className="ncube1 ncube"></div>
        <div className="ncube2 ncube"></div>
        <div className="ncube4 ncube"></div>
        <div className="ncube3 ncube"></div>
      </div>
    </div>
  );
};

export default NLoader;
