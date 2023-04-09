import { OurGame } from "@/types/ourgame";
import OurGameImage1 from"../assets/images/ourgame/game-1.png";
import OurGameImage2 from"../assets/images/ourgame/game-2.png";
import OurGameImage3 from"../assets/images/ourgame/game-3.png";
import OurGameImage4 from"../assets/images/ourgame/game-4.png";
import OurGameImage5 from"../assets/images/ourgame/game-5.png";

export const OURGAMES: OurGame[] = [{
    id: 1,
    image: OurGameImage1.src,
   description: 'Participate in BOX Raffle',
    link: '#'
  },{
    id: 2,
    image: OurGameImage2.src,
    description: 'MOMO will automatically collect MBOX',
    link: '#'
  },{
    id: 3,
    image: OurGameImage3.src,
   description: 'Use your Momo to win more MBOX rewards',
    link: '#'
  },{
    id: 4,
    image: OurGameImage4.src,
   description: 'Own your unique NFT momo',
    link: '#'
  },{
    id: 5,
    image: OurGameImage5.src,
   description: 'Trade your BOX or MOMO in the market',
    link: '#'
  }] 