import Image from "next/image"
import Logo from "../../assets/images/logo.png";
import Link from "next/link";

const NHeader = () => {
    return <nav className="ntg-navbar navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
            <Link className="navbar-brand order-first" href="/">
                <Image src={Logo} alt="Next Gen" />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="mx-auto">
                    <ul className="navbar-nav align-items-center align-items-lg-start">
                        <li className="nav-item">
                            <a className="nav-link" href="#">MOMO Farmers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Games</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">NFT Marketplace</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Governance</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Docs</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-nav-inner">
                    <ul className="navbar-nav align-items-center align-items-lg-start">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Download</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
}
export default NHeader