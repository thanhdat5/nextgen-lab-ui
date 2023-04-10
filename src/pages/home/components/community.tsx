import { PRODUCTS } from "@/constants/products";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import GameIcon from "../../../assets/images/game-controller.svg";
import ComImage from "../../../assets/images/img-comm.png";

const HomepageCommunity = () => {
  const newsSlideSettings = {
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
    ],
  };


  return (
    <section className="nnews">
      <div className="container">
        <div className="nsect-title">Community Update</div>
        <div className="nnews-inner">
          <div className="row">
            <div className="col-md-4 mb-md-0 mb-3">
              <div className="nnews-slide">
                <Slider {...newsSlideSettings}>
                  <Image className="nnews-image" src={ComImage} alt="" />
                  <Image className="nnews-image" src={ComImage} alt="" />
                  <Image className="nnews-image" src={ComImage} alt="" />
                  <Image className="nnews-image" src={ComImage} alt="" />
                </Slider>
              </div>
            </div>
            <div className="col-md-8">
              <div className="nnews-list">
                <div className="row">
                  <div className="col-md-6">
                    <div className="nnews-item">
                      <Link href="" className="title">
                        Dear MOBOXers, We would like to inform you that the The
                        Clash of MOland Season S6 will
                      </Link>
                      <div className="info">
                        <span className="created">
                          2023-03-08
                          <br />
                          13:42:03
                        </span>
                        <Link className="learnmore" href="#">
                          Learn more
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="nnews-item">
                      <Link href="" className="title">
                        Dear MOBOXers, We would like to inform you that the The
                        Clash of MOland Season S6 will
                      </Link>
                      <div className="info">
                        <span className="created">
                          2023-03-08
                          <br />
                          13:42:03
                        </span>
                        <Link className="learnmore" href="#">
                          Learn more
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="nnews-item">
                      <Link href="" className="title">
                        Dear MOBOXers, We would like to inform you that the The
                        Clash of MOland Season S6 will
                      </Link>
                      <div className="info">
                        <span className="created">
                          2023-03-08
                          <br />
                          13:42:03
                        </span>
                        <Link className="learnmore" href="#">
                          Learn more
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="nnews-item">
                      <Link href="" className="title">
                        Dear MOBOXers, We would like to inform you that the The
                        Clash of MOland Season S6 will
                      </Link>
                      <div className="info">
                        <span className="created">
                          2023-03-08
                          <br />
                          13:42:03
                        </span>
                        <Link className="learnmore" href="#">
                          Learn more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomepageCommunity;
