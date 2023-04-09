import Image from "next/image";
import AboutImage from "../../../assets/images/about.png";
const HomepageAbout = () => {
    return(
        <section className="nabout">
        <div className="container">
            <div className="decor-1"></div>
            <div className="decor-2"></div>
            <div className="row align-items-center justify-content-between">
                <div className="col-md-6 pe-md-0 order-md-1 order-2">
                    <div className="nsect-title">About NextGen Lab</div>
                    <div>Accompanying the development of blockchain technology, we have created NextGen Lab - a
                        laboratory of blockchain technology products with the desire to simplify this new technology,
                        bringing blockchain closer to everyone.</div>
                </div>
                <div className="col-md-5 order-md-2 order-1 mb-md-0 mb-4">
                    <Image src={AboutImage} alt="" className="w-100" />
                </div>
            </div>
        </div>
    </section>

    )
}
export default HomepageAbout