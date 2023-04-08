import { OURGAME } from "@/constants/ourgame";
import Image from "next/image";
import Link from "next/link";
import IconLink from "../../../assets/images/icon-link.svg"
const HomepageOutGame = () => {
    return <>

        <div className="ntg-our-game">
            <div className="container">
                <div className="ntg-our-game-header">
                    <span className="ntg-our-game-content-title">
                    Our Games
                    </span>
                    <Link className="ntg-our-game-content-tutorials" href={'#'}>Full Course for Beginners [Tutorials]
                        <Image src={IconLink} width={16} height={16} alt=""/>
                    </Link>
                </div>
                <div className="ntg-our-game-content">
                    <div className="row">
                        {
                            OURGAME.map((item: any) => (
                                <div key={item.id} className="col-12 col-md-4 my-3" >
                                    <div className="ntg-our-game-item px-2 py-3">
                                        <div className="card" >
                                            <Image src={item.image} className="card-img-top" width={272} height={166} alt="" />
                                            <div className="card-body d-flex justify-content-between">
                                                <span className="card-text">{item.shortDescription}</span>
                                                <Link className="card-link" href={item.link}> Learn More </Link>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default HomepageOutGame