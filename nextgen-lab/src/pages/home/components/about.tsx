import Image from "next/image";
import Circle1 from "../../../assets/images/circle-1.png";
import Circle2 from "../../../assets/images/circle-2.png";
import AboutImage from "../../../assets/images/about-image.png";
const HomepageAbout = () => {
    return <section className="ntg-about">
        <div className="container">
            <Image className="circle-1" src={Circle1} alt="" />
            <Image className="circle-2" src={Circle2} alt="" />
            <div className="ntg-about-content">
                <div className="row text-md-start text-center align-items-center">
                    <div className="col-lg-7 col-md-6 order-md-1 order-2">
                        <div className="title">About NextGen Lab</div>
                        <div className="content">
                            Accompanying the development of blockchain technology, we have
                            created NextGen Lab - a laboratory of blockchain technology
                            products with the desire to simplify this new technology,
                            bringing blockchain closer to everyone.
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 order-md-2 order-1 mb-md-0 mb-3">
                        <Image src={AboutImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default HomepageAbout