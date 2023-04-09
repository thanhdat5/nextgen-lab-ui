import Image from "next/image";
import React from "react";
import IconApple from "../../../assets/images/icon-apple.png";
import IconAndroid from "../../../assets/images/icon-android.png";
import IconChrome from "../../../assets/images/icon-chrome.png";
import IconGooglePlay from "../../../assets/images/icon-gg-play.png";
import ImagePhone from "../../../assets/images/dowload.png";
import Decor from "../../../assets/images/decor-3.png";
import Link from "next/link";
const HomepageDownload = () => {
  return (
    <section className="ndownload">
      <Image src={Decor} alt="" className="download-decor" />
      <div className="container">
        <div className="row">
          <div className="col-md-6 order-md-1 order-2 text-md-start text-center">
            <div className="nsect-title">Play anywhere, anytime</div>
            <div className="nsect-description">
              The NextGen Lab experience on any device (iOS, Android, Desktop)
            </div>
            <div className="ndownloads">
              <Link href="#" className="ndownload-item">
                <Image src={IconApple} alt="" />
                <div>
                  <div className="ndownload-text">Download The</div>
                  <div className="ndownload-text">IOS Download</div>
                </div>
              </Link>
              <Link href="#" className="ndownload-item">
                <Image src={IconAndroid} alt="" />
                <div>
                  <div className="ndownload-text">Download The</div>
                  <div className="ndownload-text">Android APP</div>
                </div>
              </Link>
              <Link href="#" className="ndownload-item">
                <Image src={IconChrome} alt="" />
                <div>
                  <div className="ndownload-text">Download The</div>
                  <div className="ndownload-text">Chrome Plugin</div>
                </div>
              </Link>
              <Link href="#" className="ndownload-item">
                <Image src={IconGooglePlay} alt="" />
                <div>
                  <div className="ndownload-text">Download The</div>
                  <div className="ndownload-text">Google Play</div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-6 text-center order-md-2 order-1">
            <Image src={ImagePhone} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageDownload;
