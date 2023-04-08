import { PRODUCTS } from "@/constants/products";
import Image from "next/image";
import GameIcon from "../../../assets/images/game-controller.svg";
import ComImage from "../../../assets/images/img-comm.png";
import Link from "next/link";
const HomepageCommunity = () => {
    return <section className="ntg-community">
        <div className="container">
            <div className="container-fluid">
                <div className="ntg-community-update">
                    <div className="title"> Community Update </div>
                    <div className="content">
                        <div className="row">
                            <div className="col-12 col-md-4 mb-md-0 mb-3">
                                <div className="ntg-content-img-items">
                                    <Image src={ComImage} alt="" />
                                    <Image src={ComImage} alt="" />
                                    <Image src={ComImage} alt="" />
                                    <Image src={ComImage} alt="" />
                                </div>
                            </div>
                            <div className="col-12 col-md-8">
                                <div className="ntg-new-items">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="ntg-new-item">
                                                <div className="title">
                                                    Dear MOBOXers, We would
                                                    like to inform you that the The Clash of MOland
                                                    Season S6 will
                                                </div>
                                                <div
                                                    className="ntg-new-inner d-flex justify-content-between"
                                                >
                                                    <span className="time">2023-03-08<br />13:42:03</span>
                                                    <a className="learn-more" href="#">Learn more</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="ntg-new-item">
                                                <div className="title">
                                                    Dear MOBOXers, We would
                                                    like to inform you that the The Clash of MOland
                                                    Season S6 will
                                                </div>
                                                <div
                                                    className="ntg-new-inner d-flex justify-content-between"
                                                >
                                                    <span className="time">2023-03-08<br />13:42:03</span>
                                                    <a className="learn-more" href="#">Learn more</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="ntg-new-item">
                                                <div className="title">
                                                    Dear MOBOXers, We would
                                                    like to inform you that the The Clash of MOland
                                                    Season S6 will
                                                </div>
                                                <div
                                                    className="ntg-new-inner d-flex justify-content-between"
                                                >
                                                    <span className="time">2023-03-08<br />13:42:03</span>
                                                    <a className="learn-more" href="#">Learn more</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="ntg-new-item">
                                                <div className="title" >
                                                    Dear MOBOXers, We would
                                                    like to inform you that the The Clash of MOland
                                                    Season S6 will
                                                </div>
                                                <div
                                                    className="ntg-new-inner d-flex justify-content-between"
                                                >
                                                    <span className="time">2023-03-08<br />13:42:03</span>
                                                    <a className="learn-more" href="#">Learn more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ntg-our-product">
                    <div className="title"> Our Products </div>
                    <div className="ntg-our-product-items">
                        {
                            PRODUCTS.map(p => (
                                <Link href={`/products/${p.id}`} className="ntg-our-product-item" key={p.id} >
                                    <div className="ntg-prod-thumbnail"> 
                                        <Image width={272} height={168} src={p.thumbnail} alt="" />
                                    </div>
                                    <div className="ntg-prod-info d-flex">
                                        <Image className="icon-game" src={GameIcon} alt="" />
                                        <div className="ntg-prod-des">
                                            <div className="ntg-prod-des-title">{p.name}</div>
                                            <div className="ntg-prod-des-content">{p.shortDescription}</div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default HomepageCommunity