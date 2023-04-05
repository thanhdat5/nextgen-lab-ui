import Image from "next/image"
import Link from "next/link";
import Logo from "../../assets/images/logo.png";

const NFooter = () => {
    return <footer className="ngl-footer">
        <div className="container">
            <div className="ngl-footer-inner">
                <div className="ngl-footer-logo">
                    <Image src={Logo} alt="NextGen Lab" />
                </div>
                <div>
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