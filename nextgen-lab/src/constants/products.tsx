import { Product } from "@/types/product";
import UnipetImage from "../assets/images/products/Unipet.png";
import TrustMessageImage from "../assets/images/products/TrustMessage.svg";
import ChainZArenaWorldImage from "../assets/images/products/Unipet.png";
import UnipetCoverImage from "../assets/images/img-prd-1.png";
import TrustMessageCoverImage from "../assets/images/img-prd-2.png";
import ChainZArenaCoverImage from "../assets/images/img-prd-3.png";
import CompareImage from "../assets/images/products/compare.png";
import Image from "next/image";
export const PRODUCTS: Product[] = [
    {
        id: 1,
        thumbnail: UnipetCoverImage.src,
        logo: UnipetImage.src,
        name: "Unipet",
        shortDescription: "NFT Game - Pet Game",
        description: <>
            <p>UNIPET is an NFT game developed by Nextgen Lab that integrates blockchain technology to deliver a unique gameplay experience. In it, players will become leaders specializing in collecting and upgrading Unipets, creatures with irregular shapes and special abilities.</p>
            <div>
                Unipets are divided into 2 types, Normal and NFT. When choosing Unipet, players need to consider the following points:<br />
                <span>{'>>'}</span>  Quality<br />
                <span>{'>>'}</span>  Fate<br />
                <span>{'>>'}</span>  Evolution<br />
                <span>{'>>'}</span>  Skill
            </div>
        </>,
        featuresClassName: "row-cols-md-2 row-cols-1",
        features: [
            {
                description: "Focus on gameplay, create attraction and pets with users."
            },
            {
                description: "Create a desire to own a pet and develop additional services to maximize revenue from non-blockchain services."
            },
            {
                description: "Develop Blockchain utility services such as NFT pet and free NFT transactions to have 1 more payment channel & 1 transaction property."
            },
            {
                description: "The game's direction becomes a Social Game, connecting players, applying the utility of blockchain but not depending on it."
            }
        ]
    },
    {
        id: 2,
        thumbnail: TrustMessageCoverImage.src,
        logo: TrustMessageImage.src,
        name: "Trust Message",
        shortDescription: "Highly secure multifunctional chat app",
        description: <>
            Trust Message is one core product of Nextgen Lab that enables users to securely communicate with their friends and family while also managing their cryptocurrency assets seamlessly.
        </>,
        featuresClassName: "row-cols-lg-3 row-cols-md-2 row-cols-1",
        features: [
            {
                title: "Highest privacy standards",
                description: "Trust Message’s level of security stems from TextSecure protocols (Signal pr)"
            },
            {
                title: "X4 secured chats, voice & video calls",
                description: "Each message sent by a user is encrypted using a fresh message key to provide a high degree of forward secrecy."
            },
            {
                title: "No interference from third parties whatsoever",
                description: "Using end-to-end encryption, only participants can read the contents"
            },
            {
                title: "DEFI wallet integrated",
                description: "Users can use all major token/coins"
            },
            {
                title: "User-friendly application interface",
                description: "Giao diện ứng dụng thân thiện với người dùng"
            }
        ],
        content: <>
            <h2>Compare Trust Message and some popular chat apps</h2>
            <Image src={CompareImage} alt="" style={{ width: 'calc(100% + 40px)', maxWidth: 'calc(100% + 40px)' }} />
        </>
    },
    {
        id: 3,
        thumbnail: ChainZArenaCoverImage.src,
        logo: ChainZArenaWorldImage.src,
        name: "ChainZ Arena World",
        shortDescription: "ChainZ Arena World",
        description: <>
            <p>UNIPET is an NFT game developed by Nextgen Lab that integrates blockchain technology to deliver a unique gameplay experience. In it, players will become leaders specializing in collecting and upgrading Unipets, creatures with irregular shapes and special abilities.</p>
            <div>
                Unipets are divided into 2 types, Normal and NFT. When choosing Unipet, players need to consider the following points:<br />
                {'>>'}  Quality<br />
                {'>>'}  Fate<br />
                {'>>'}  Evolution<br />
                {'>>'}  Skill
            </div>
        </>,
        featuresClassName: "row-cols-md-2 row-cols-1",
        features: [
            {
                description: "Focus on gameplay, create attraction and pets with users."
            },
            {
                description: "Create a desire to own a pet and develop additional services to maximize revenue from non-blockchain services."
            },
            {
                description: "Develop Blockchain utility services such as NFT pet and free NFT transactions to have 1 more payment channel & 1 transaction property."
            },
            {
                description: "The game's direction becomes a Social Game, connecting players, applying the utility of blockchain but not depending on it."
            }
        ]
    },
    {
        id: 4,
        thumbnail: UnipetCoverImage.src,
        logo: UnipetImage.src,
        name: "Unipet",
        shortDescription: "NFT Game - Pet Game",
        description: <>
            <p>UNIPET is an NFT game developed by Nextgen Lab that integrates blockchain technology to deliver a unique gameplay experience. In it, players will become leaders specializing in collecting and upgrading Unipets, creatures with irregular shapes and special abilities.</p>
            <div>
                Unipets are divided into 2 types, Normal and NFT. When choosing Unipet, players need to consider the following points:<br />
                <span>{'>>'}</span>  Quality<br />
                <span>{'>>'}</span>  Fate<br />
                <span>{'>>'}</span>  Evolution<br />
                <span>{'>>'}</span>  Skill
            </div>
        </>,
        featuresClassName: "row-cols-md-2 row-cols-1",
        features: [
            {
                description: "Focus on gameplay, create attraction and pets with users."
            },
            {
                description: "Create a desire to own a pet and develop additional services to maximize revenue from non-blockchain services."
            },
            {
                description: "Develop Blockchain utility services such as NFT pet and free NFT transactions to have 1 more payment channel & 1 transaction property."
            },
            {
                description: "The game's direction becomes a Social Game, connecting players, applying the utility of blockchain but not depending on it."
            }
        ]
    },
];
