import Image from "next/image";
import GameFi from "../../../assets/images/milestones/GameFi.png";
import NFTTrades from "../../../assets/images/milestones/NFTTrades.png";
import Players from "../../../assets/images/milestones/Players.png";

const HomepageMilestones = () => {
    return <section className="ngl-milestones">
        <div className="container">
            <div className="ngl-milestones-title">Milestones</div>
            <div className="row">
                <div className="col-4">
                    <div className="ngl-milestone">
                        <div className="ngl-milestone-icon">
                            <Image src={GameFi} alt="" />
                        </div>
                        <div className="ngl-milestone-info">
                            <div className="ngl-mi-title">NO.1</div>
                            <div className="ngl-mi-description">MBOX Listed On Binance LaunchPool</div>
                            <a href="#" className="ngl-mi-action">GameFi</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="ngl-milestone">
                        <div className="ngl-milestone-icon">
                            <Image src={NFTTrades} alt="" />
                        </div>
                        <div className="ngl-milestone-info">
                            <div className="ngl-mi-title">$300M+</div>
                            <div className="ngl-mi-description">NFT Trades</div>
                            <a href="#" className="ngl-mi-action">NFT Farmer</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="ngl-milestone">
                        <div className="ngl-milestone-icon">
                            <Image src={Players} alt="" />
                        </div>
                        <div className="ngl-milestone-info">
                            <div className="ngl-mi-title">320K+</div>
                            <div className="ngl-mi-description">Players</div>
                            <a href="#" className="ngl-mi-action">Community</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default HomepageMilestones