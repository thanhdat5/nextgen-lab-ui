import { Ourgame } from "@/types/ourgame";
import OurGameImage1 from"../assets/images/ourgame/img-our-game-1.png";
import OurGameImage2 from"../assets/images/ourgame/img-our-game-2.png";
import OurGameImage3 from"../assets/images/ourgame/img-our-game-3.png";
import OurGameImage4 from"../assets/images/ourgame/img-our-game-4.png";
import OurGameImage5 from"../assets/images/ourgame/img-our-game-5.png";

export const OURGAME: Ourgame[] = [{
    id: 1,
    image: OurGameImage1.src,
    shortDescription: 'Participate in BOX Raffle',
    featuresClassName: '',
    link: '#'
  },{
    id: 2,
    image: OurGameImage2.src,
    shortDescription: 'MOMO will automatically collect MBOX',
    featuresClassName: '',
    link: '#'
  },{
    id: 3,
    image: OurGameImage3.src,
    shortDescription: 'Use your Momo to win more MBOX rewards',
    featuresClassName: '',
    link: '#'
  },{
    id: 4,
    image: OurGameImage4.src,
    shortDescription: 'Own your unique NFT momo',
    featuresClassName: '',
    link: '#'
  },{
    id: 5,
    image: OurGameImage5.src,
    shortDescription: 'Trade your BOX or MOMO in the market',
    featuresClassName: '',
    link: '#'
  }] 