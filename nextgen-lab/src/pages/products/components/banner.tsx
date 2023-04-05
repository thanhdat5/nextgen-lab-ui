import Image from "next/image"
import BannerVideo from '../../../assets/images/banner-video.jpg';

const ProductBanner = () => {
    return <div className="ngl-banner-video">
        <Image src={BannerVideo} alt="" />
        <button type="button">
            <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2" d="M48 8C25.92 8 8 25.92 8 48C8 70.08 25.92 88 48 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 48 8ZM40 66V30L64 48L40 66Z" fill="white" />
                <circle cx="48" cy="48" r="39.5" stroke="#D9D9D9" />
                <path d="M40 66.4V30.4L64 48L40 66.4Z" fill="white" />
            </svg>
        </button>
    </div>
}
export default ProductBanner