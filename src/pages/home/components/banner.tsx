import Image from "next/image"
import IconPlay from "../../../assets/images/icon-play.svg";
import IconApple from "../../../assets/images/icon-apple.png";
import IconAndroid from "../../../assets/images/icon-android.png";
import IconChrome from "../../../assets/images/icon-chrome.png";
import IconGooglePlay from "../../../assets/images/icon-gg-play.png";

const HomepageBanner = () => {
    return <section className="ntg-banner">
        <div className="container">
            <div className="ntg-banner-title">
                Unlocking the Future of<br />
                Blockchain Innovation<br />
                <span className="ntg-title-inner">NextGen Lab</span>
            </div>
            <div className="text-center icon-play">
                <Image src={IconPlay} alt="" />
            </div>
            <div className="ntg-action-items">
                <div className="ntg-action-item">
                    <Image src={IconApple} alt="" />
                    <a href="#"
                    >Download The <br />
                        IOS Download</a>
                </div>
                <div className="ntg-action-item">
                    <Image src={IconAndroid} alt="" />
                    <a href="#"
                    >Download The <br />
                        Android APP</a>
                </div>
                <div className="ntg-action-item">
                    <Image src={IconChrome} alt="" />
                    <a href="#"
                    >Download The <br />
                        Chrome Plugin</a>
                </div>
                <div className="ntg-action-item">
                    <Image src={IconGooglePlay} alt="" />
                    <a href="#"
                    >Download The <br />
                        Google Play</a>
                </div>
            </div>
        </div>
    </section>
}
export default HomepageBanner