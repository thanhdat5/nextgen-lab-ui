import { UNP_TOKEN } from "@/constants/unp"
import UnpTokenImage from "../../../assets/images/img-token.png"
import Image from "next/image"
const HomepageUnpToken = () => {
    return <>
        <div className="ntg-unp-token">
            <div className="container">
                <div className="ntg-unp-token-content">
                    <div className="row">
                        <div className="col-12 col-md-6 ">
                            <div className="ntg-unp-token-content-header">
                                <div className="ntg-unp-token-title">
                                    UNP Token Distribution
                                </div>
                                <div className="ntg-unp-token-des">
                                    Total supply : <span className="unit"> 1,000,000,000 UNP</span>
                                </div>
                            </div>
                            <div className="ntg-unp-token-content-body">
                                <div className="ntg-unp-token-items d-flex justify-content-between">
                                    <div className="ntg-unp-token-item">                                    
                                        <div className="ntg-unp-item-title">
                                        <div className="ntg-unp-item-dot fund-rais"></div>
                                           <span> Fund raising</span>
                                        </div>
                                        <div className="ntg-unp-item-des">
                                            <span className="percen">50% <span className="unit">- 500,000,000 UNP</span></span>
                                        </div>
                                    </div>
                                    <div className="ntg-unp-token-item">                                    
                                        <div className="ntg-unp-item-title">
                                        <div className="ntg-unp-item-dot play-earn"></div>
                                           <span> Play to Earn </span>
                                        </div>
                                        <div className="ntg-unp-item-des">
                                            <span className="percen">30% <span className="unit">- 300,000,000 UNP</span></span>
                                        </div>
                                    </div>
                                </div>
                                <hr className="line"/>
                                <div className="ntg-unp-token-items d-flex justify-content-between">
                                    <div className="ntg-unp-token-item">                                    
                                        <div className="ntg-unp-item-title">
                                        <div className="ntg-unp-item-dot team-advisor"></div>
                                           <span> Team & Advisors</span>
                                        </div>
                                        <div className="ntg-unp-item-des">
                                            <span className="percen">10% <span className="unit">- 100,000,000 UNP</span></span>
                                        </div>
                                    </div>
                                    <div className="ntg-unp-token-item">                                    
                                        <div className="ntg-unp-item-title">
                                        <div className="ntg-unp-item-dot listing-marketing"></div>
                                           <span> Listing & Marketing </span>
                                        </div>
                                        <div className="ntg-unp-item-des">
                                            <span className="percen">8% <span className="unit">- 80,000,000 UNP</span></span>
                                        </div>
                                    </div>
                                </div>
                                <hr className="line"/>
                                <div className="ntg-unp-token-items d-flex justify-content-between">
                                    <div className="ntg-unp-token-item">                                    
                                        <div className="ntg-unp-item-title">
                                        <div className="ntg-unp-item-dot public-round"></div>
                                           <span> Public round</span>
                                        </div>
                                        <div className="ntg-unp-item-des">
                                            <span className="percen">2% <span className="unit">- 20,000,000 UNP</span></span>
                                        </div>
                                    </div>                                  
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <Image src={UnpTokenImage.src} width={343} height={343} alt=''></Image>
                        </div>
                    </div>
                    <div className="ntg-unp-token-content-footer">
                    NextGen Lab raise <span className="footer-unit"> 10,000,000 USD</span> for <span className="footer-percen">50% of UNP tokens</span> in the private round
                    </div>
                </div>

            </div>
        </div>
    </>
}

export default HomepageUnpToken