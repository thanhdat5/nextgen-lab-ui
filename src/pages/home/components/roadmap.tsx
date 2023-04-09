import Image from 'next/image'
import React from 'react'
import Line from "../../../assets/images/line.svg"
import LineUp from "../../../assets/images/line-up.svg"
import LineDown from "../../../assets/images/line-down.svg"
const HomepageRoadmap = () => {
  return (
    <section className="nroadmap">
    <div className="container">
        <div className="nsect-title">Roadmap</div>
        <div className="nroadmap-inner">
            <Image src={Line} className="line" alt='' />
            <div className="nroadmap-item">
                <div className="start">
                    <span>Seed round</span><br />fundraising
                </div>
                <div className="line-up">
                    <Image alt='' src={LineUp} />
                </div>
                <div className="quarter">Q1 2023</div>
                <div className="line-down">
                    <Image alt='' src={LineDown}  />
                </div>
                <div className="end">
                    <span>Trust Message</span> launching<br /><span>Unipet</span> launching
                </div>
            </div>
            <div className="nroadmap-item">
                <div className="start" style={{marginBottom: "-30px"}} >
                    Rank as the <span>biggest <br />GameFi application</span> on DappRadar across <br />3 chains
                    <br />(BNB/Firebird/Sui)
                </div>
                <div className="line-up">
                    <Image src={LineUp} alt='' />
                </div>
                <div className="quarter">Q2 2023</div>
                <div className="line-down">
                    <Image src={LineDown} alt=''  />
                </div>
                <div className="end" style={{paddingLeft: "20px"}}>
                    <span>Global expansion</span> <br />Scaling solutions to <br />facilitate strong
                    user<br />growth
                </div>
            </div>
            <div className="nroadmap-item">
                <div className="start" style={{marginBottom: "-30px"}}>
                    Wallet solution <br />integration for <br /><span>Trust Message</span>
                </div>
                <div className="line-up">
                    <Image src={LineUp} alt='' />
                </div>
                <div className="quarter">Q3 2023</div>
                <div className="line-down">
                    <Image src={LineDown} alt='' />
                </div>
                <div className="end" style={{paddingLeft: "30px"}}>
                    Become one of <br />the <span>largest Web3 <br />communities</span>
                </div>
            </div>
            <div className="nroadmap-item">
                <div className="start"style={{marginBottom: "-30px"}}>
                    <span>DAO-style</span> <br />governance<br />structure
                </div>
                <div className="line-up">
                    <Image src={LineUp} alt='' />
                </div>
                <div className="quarter">Q4 2023</div>
                <div className="line-down">
                    <Image src={LineDown} alt='' />
                </div>
                <div className="end" style={{paddingLeft: "30px"}}>
                    Collaboration and <br />partnership with more <br />Web3 projects
                    <span>More diverse applications <br />launched</span>
                </div>
            </div>
            <div className="nroadmap-item">
                <div className="quarter quarter-end">2024</div>
            </div>
        </div>
        <div className="nroadmap-mobile"></div>
        <div className="nroadmap-mobile">
            <div className="item">
                <div className="start"><span>Seed round</span> fundraising</div>
                <div className="quarter"><span>Q1 2023</span></div>
                <div className="end"><span>Trust Message</span> launching <span>Unipet</span> launching</div>
            </div>
            <div className="item">
                <div className="start">Rank as the <span>biggest GameFi application</span> on DappRadar across 3 chains
                    (BNB/Firebird/Sui)</div>
                <div className="quarter"><span>Q2 2023</span></div>
                <div className="end"><span>Global expansion</span> Scaling solutions to facilitate strong user growth
                </div>
            </div>
            <div className="item">
                <div className="start">Wallet solution integration for <span>Trust Message</span></div>
                <div className="quarter"><span>Q3 2023</span></div>
                <div className="end">Become one of the <span>largest Web3 communities</span></div>
            </div>
            <div className="item">
                <div className="start"><span>DAO-style</span> governance structure</div>
                <div className="quarter"><span>Q4 2023</span></div>
                <div className="end">Collaboration and partnership with more Web3 projects
                    <span>More diverse applications launched</span>
                </div>
            </div>
            <div className="quarter-end">2024</div>
        </div>
    </div>
</section>
  )
}

export default HomepageRoadmap