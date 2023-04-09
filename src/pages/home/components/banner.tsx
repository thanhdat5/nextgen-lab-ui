import Image from "next/image"
import IconPlay from "../../../assets/images/icon-play.svg";
import IconApple from "../../../assets/images/icon-apple.png";
import IconAndroid from "../../../assets/images/icon-android.png";
import IconChrome from "../../../assets/images/icon-chrome.png";
import IconGooglePlay from "../../../assets/images/icon-gg-play.png";
import Link from "next/link";

const HomepageBanner = () => {
    return (
        <section className="nbanner">
        <div className="container">
            <h2>Unlocking the Future of <br />Blockchain Innovation</h2>
            <h1>NextGen Lab</h1>
            <div className="play">
                <button type="button">
                    <Image src={IconPlay} alt="" />
                </button>
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
    </section>

    )
}
export default HomepageBanner