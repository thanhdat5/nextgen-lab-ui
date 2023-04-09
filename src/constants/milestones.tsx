import { Milestones } from "@/types/milestones";
import GameFi from "../assets/images/milestones/no1.png";
import NFTTrades from "../assets/images/milestones/nft.png";
import Players from "../assets/images/milestones/player.png";
export const MILESTONES:Milestones [] = [
    {
        id:1,
        title:'NO.1',
        description:'MBOX Listed On Binance LaunchPool',
        link:'GameFi',
        element:GameFi.src
    },
    {
        id:2,
        title:'$300M+',
        description:'NFT Trades',
        link:'NFT Farmer',
        element:NFTTrades.src
    },
    {
        id:3,
        title:'320K+',
        description:'Players',
        link:'Community',
        element:Players.src
    },
 
]