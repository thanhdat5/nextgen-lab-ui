import Image from "next/image"
import Logo from "../../assets/images/logo.png";
import Close from "../../assets/images/close.svg";
import Hamburger from "../../assets/images/hamburger.svg";
import Link from "next/link";
import $ from "jquery";
import { useEffect, useState } from "react";

const NHeader = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        $('.nheader-nav').removeClass('show');
      }
    }

    const handleScroll = () =>  {
      setScrollPosition(window.scrollY);
      if (window.scrollY >= 80) {
        $('.nheader').addClass('nheader-fixed');
      } else {
        $('.nheader').removeClass('nheader-fixed');
      }
    }

    const handleClick = () => {
      $('.nheader-nav').removeClass('show');
    }

    $(window).on('resize', handleResize);
    $(window).on('scroll', handleScroll);
    $('.nmenu-open').on('click', function () {
      $('.nheader-nav').addClass('show');
    });
    $('.nmenu-close').on('click', function () {
      $('.nheader-nav').removeClass('show');
    });
    $('.nheader-nav a').on('click', handleClick);

    return () => {
      $(window).off('resize', handleResize);
      $(window).off('scroll', handleScroll);
      $('.nmenu-open').off('click');
      $('.nmenu-close').off('click');
      $('.nheader-nav a').off('click', handleClick);
    };
  }, []);
    return (
        <header className={`nheader ${scrollPosition >= 80 ? 'nheader-fixed' : ''}`}>
        <div className="container-fluid">
            <div className="nheader-inner">
                <Link href="index.html" className="nlogo">
                    <Image src={Logo} alt="NextGen Lab" />
                </Link>
                <button type="button" className="nmenu-toggle nmenu-open">
                    <Image src={Hamburger} alt="" />
                </button>
                <div className="nheader-nav">
                    <button type="button" className="nmenu-toggle nmenu-close">
                        <Image src={Close} alt="" />
                    </button>
                    <ul className="nmainmenu">
                        <li><Link href="#">MOMO Farmers</Link></li>
                        <li><Link href="#">Games</Link></li>
                        <li><Link href="#">NFT Marketplace</Link></li>
                        <li><Link href="#">Governance</Link></li>
                        <li><Link href="#">Docs</Link></li>
                    </ul>
                    <ul className="ms-lg-auto nsubmenu">
                        <li><Link href="#">Login</Link></li>
                        <li><Link href="#">Register</Link></li>
                        <li><Link href="#">Download</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    )
}
export default NHeader