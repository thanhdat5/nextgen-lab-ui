import Image from "next/image"
import Link from "next/link";
import Logo from "../../assets/images/logo.png";
import Tele from "../../assets/images/icon-tele.svg"
import Twitter from "../../assets/images/icon-twitter.svg"
import Discord from "../../assets/images/icon-discord.svg"
const NFooter = () => {
    return <footer className="ngl-footer">
        <div className="container">
            <div className="ngl-footer-inner">
                <div className="ngl-footer-logo">
                    <Image src={Logo} alt="NextGen Lab" />
                </div>
                <div>
                    <div className="ntg-footer-icon">
                        <Link href="">
                            <Image src={Tele} alt="" />
                        </Link>
                        <Link href="">
                            <Image src={Twitter} alt="" />
                        </Link>
                        <Link href="">
                            <Image src={Discord} alt="" />
                        </Link>
                    </div>
                    <div className="ngl-footer-copyright">
                        Copyright © 2021 MOBOX DIGITAL CO., LTD. All rights reserved.
                    </div>
                    <ul>
                        <li>
                            <Link href="">Terms of Service</Link>
                        </li>
                        <li>
                            <Link href="">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="">Contact us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
}
export default NFooter