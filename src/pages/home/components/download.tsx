import Image from "next/image";
import React from "react";
import IconApple from "../../../assets/images/icon-apple.png";
import IconAndroid from "../../../assets/images/icon-android.png";
import IconChrome from "../../../assets/images/icon-chrome.png";
import IconGooglePlay from "../../../assets/images/icon-gg-play.png";
import ImagePhone from "../../../assets/images/dowload.png";
const HomepageDownload = () => {
  return (
    <div className="container">
      <div className="ntg-download">
        <div className="ntg-download-items">
          <p className="ntg-title">Play anywhere, anytime</p>
          <p className="ntg-download-text">
            The NextGen Lab experience on any device (iOS, Android, Desktop)
          </p>
          <div className="ntg-download-action">
            <div className="ntg-action-item">
              <Image  src={IconApple} alt="" />
              <a href="#">
                Download The <br />
                IOS Download
              </a>
            </div>
            <div className="ntg-action-item">
              <Image src={IconAndroid} alt="" />
              <a href="#">
                Download The <br />
                Android APP
              </a>
            </div>
            <div className="ntg-action-item">
              <Image src={IconChrome} alt="" />
              <a href="#">
                Download The <br />
                Chrome Plugin
              </a>
            </div>
            <div className="ntg-action-item">
              <Image src={IconGooglePlay} alt="" />
              <a href="#">
                Download The <br />
                Google Play
              </a>
            </div>
          </div>
        </div>
        <div className="ntg-download-img">
          <Image src={ImagePhone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomepageDownload;
