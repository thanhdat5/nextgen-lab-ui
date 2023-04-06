import Image from "next/image"
import Game1Image from "../../../assets/images/icon-gaming-1.png";
import Game2Image from "../../../assets/images/icon-gaming-2.png";
import Game3Image from "../../../assets/images/icon-gaming-3.png";
import Game4Image from "../../../assets/images/icon-gaming-4.png";

const HomepageGaming = () => {
    return <section className="ntg-gaming">
    <div className="container">
      <div className="container-fluid">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button className="nav-link active" id="nav-gaming-tab" data-bs-toggle="tab" data-bs-target="#nav-gaming" type="button" role="tab" aria-controls="nav-gaming" aria-selected="true">
              <span>Gaming NFTs</span>
            </button>
            <button className="nav-link" id="nav-legendry-tab" data-bs-toggle="tab" data-bs-target="#nav-legendry" type="button" role="tab" aria-controls="nav-legendry" aria-selected="false">
              <span>Legendry NFTs</span>
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-gaming" role="tabpanel" aria-labelledby="nav-gaming-tab">
            <div className="ntg-gaming-content">
              <div className="row">
                <div className="col-12 col-md-5">
                    <div className="ntg-gaming-content-left-items">
                      <div className="ntg-gaming-content-left-item">
                        <Image src={Game1Image} alt=""/>
                      </div>
                      <div className="ntg-gaming-content-left-item">
                        <Image src={Game2Image} alt=""/>
                      </div>
                      <div className="ntg-gaming-content-left-item">
                        <Image src={Game3Image} alt=""/>
                      </div>
                      <div className="ntg-gaming-content-left-item">
                        <Image src={Game4Image} alt=""/>
                      </div>
                    </div>
                </div>
                <div className="col-12 col-md-7">
                  <div className="ntg-gaming-content-right-items">
                    <div className="ntg-gaming-content-right-item text-center">
                      <div className="ntg-gaming-right-item-title">
                        Own your first NFT<br/>MONO
                      </div>
                      <div className="ntg-gaming-right-item-des">
                        Each MOMO has a randomly generated hash power that can be upgraded by consuming other MOMO NFTs. The total hash power is calculated by adding up the hash power of all your MOMOs. The amount of MBOX tokens mined is dependent on your weighted average of the total hash power across the platform. 
                      </div>
                    </div>
                    <div className="ntg-gaming-content-right-item">
                      <Image src={Game2Image} alt=""/>
                    </div>
                    <div className="ntg-gaming-content-right-item">
                      <Image src={Game3Image} alt=""/>
                    </div>
                    <div className="ntg-gaming-content-right-item">
                      <Image src={Game4Image} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="nav-legendry" role="tabpanel" aria-labelledby="nav-legendry-tab">...</div>
        </div>
      </div>
    </div>

  </section>
}
export default HomepageGaming