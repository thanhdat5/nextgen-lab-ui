import { UNP_TOKEN } from "@/constants/unp";
import TokenImage from "../../../assets/images/token.png";
import Image from "next/image";
const HomepageToken = () => {
  return (
    <>
      <section className="ntoken">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 order-md-1 order-2 mt-md-0 mt-4">
              <div className="nsect-title">UNP Token Distribution</div>
              <div className="ntoken-description">
                Total supply : <span>1,000,000,000 UNP</span>
              </div>
              <div className="ntoken-legends">
                <div className="row row-cols-2">
                  <div className="col">
                    <div className="ntoken-legend">
                      <div className="ntoken-label">
                        <div className="ntoken-color color-2"></div>
                        <span>Play to Earn</span>
                      </div>
                      <div className="ntoken-value">
                        <b>30%</b>
                        <span>- 300,000,000 UNP</span>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="ntoken-legend">
                      <div className="ntoken-label">
                        <div className="ntoken-color color-1"></div>
                        <span>Fund raising</span>
                      </div>
                      <div className="ntoken-value">
                        <b>50%</b>
                        <span>- 500,000,000 UNP</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ntoken-legends">
                <div className="row row-cols-2">
                  <div className="col">
                    <div className="ntoken-legend">
                      <div className="ntoken-label">
                        <div className="ntoken-color color-3"></div>
                        <span>Team & Advisors</span>
                      </div>
                      <div className="ntoken-value">
                        <b>10%</b>
                        <span>- 100,000,000 UNP</span>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="ntoken-legend">
                      <div className="ntoken-label">
                        <div className="ntoken-color color-4"></div>
                        <span>Listing & Marketing</span>
                      </div>
                      <div className="ntoken-value">
                        <b>8%</b>
                        <span>- 80,000,000 UNP</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ntoken-legends">
                <div className="row row-cols-2">
                  <div className="col">
                    <div className="ntoken-legend">
                      <div className="ntoken-label">
                        <div className="ntoken-color color-5"></div>
                        <span>Public round</span>
                      </div>
                      <div className="ntoken-value">
                        <b>2%</b>
                        <span>- 20,000,000 UNP</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 order-md-2 order-1 text-center">
              <Image src={TokenImage} alt="" className="w-100" />
            </div>
          </div>
          <div className="ntoken-note">
            NextGen Lab raise <b>10,000,000</b> USD for <b>50% of UNP tokens</b>{" "}
            in the private round
          </div>
        </div>
      </section>
    </>
  );
};

export default HomepageToken;
