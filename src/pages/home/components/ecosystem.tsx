import React from 'react'
import Video from "../../../assets/images/ecosystem/video-preview.png"
import Thumbnail from "../../../assets/images/ecosystem/thumbnail.png"
import Image from 'next/image'
const HomepageEcosystem = () => {
  return (
    <section className="necosystem">
        <div className="container">
            <div className="nsect-title">The MBOX Ecosystem</div>
            <div className="row">
                <div className="col-md-3">
                    <div className="necosystem-tabs">
                        <ul>
                            <li className="active">About MBOX</li>
                            <li>Buyback and Burn</li>
                            <li>VeMBOX</li>
                            <li>MOMO Creator</li>
                            <li>ROAD MAP</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="necosystem-video">
                        <Image src={Video} alt="" />
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="necosystem-thumbnails">
                        <a href="#">
                            <Image src={Thumbnail} alt="" />
                        </a>
                        <a href="#">
                            <Image src={Thumbnail} alt="" />
                        </a>
                        <a href="#">
                            <Image src={Thumbnail} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default HomepageEcosystem