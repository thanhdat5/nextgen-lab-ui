import Image from "next/image";
import ArrowNext from "../../../assets/images/arrow-next.png";
import ArrowPrev from "../../../assets/images/arrow-prev.png";
import Nft1 from "../../../assets/images/nft/nft-1.png";
import Nft2 from "../../../assets/images/nft/nft-2.png";
import Nft3 from "../../../assets/images/nft/nft-3.png";
import Nft4 from "../../../assets/images/nft/nft-4.png";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { NFT_GAMES } from "@/constants/nft-game";
import { NFTGame } from "@/types/nft";
const HomepageGaming = () => {
  const [selectedNFT, setSelectedNFT] = useState(3);
  const nftImageRef = useRef<any>(null);
  const nftNameRef = useRef<any>(null);
  const ndtSkillsRef = useRef<any>(null);
  const ndtDescriptionRef = useRef<any>(null);
  useEffect(() => {
    const triggerTabList = document.querySelectorAll("#GamingNFTTab button");
    triggerTabList.forEach((triggerEl) => {
      triggerEl.addEventListener("click", (event) => {
        const selectedId: any = (event.target as HTMLElement)?.dataset?.id;
        if (selectedId) {
          setSelectedNFT(Number(selectedId));
          const selectedItem: NFTGame | undefined = NFT_GAMES.find(
            (x) => x.id == selectedId
          );
          if (selectedItem) {
            (document.getElementById("NFTImage") as HTMLImageElement).src =
              selectedItem?.image;
            (document.getElementById("NFTName") as HTMLElement).innerHTML =
              selectedItem?.name;
            (document.getElementById("NDTSkills") as HTMLElement).innerHTML =
              selectedItem?.skills
                ?.map((x) => `<img src="${x}" alt=""/>`)
                .join("");
            (
              document.getElementById("NDTDescription") as HTMLElement
            ).innerHTML = selectedItem?.description;
            const descriptionElement = ndtDescriptionRef?.current;
            const nftImageElement = nftImageRef?.current;
            const nftNameElement = nftNameRef?.current;
            const ndtSkillsElement = ndtSkillsRef?.current;
            nftImageElement && (nftImageElement.src = selectedItem.image);
            nftNameElement && (  nftNameElement.innerHTML = selectedItem.name)
            ndtSkillsElement && (ndtSkillsElement.innerHTML = selectedItem.skills
              .map((x) => `<img src="${x}" alt=""/>`)
              .join(""))
          
              descriptionElement && (descriptionElement.innerHTML = selectedItem.description);
          }
        }
      });
    });
  }, []);
  //   if (nftImageRef.current) {
  //     nftImageRef.current.src = selectedItem?.image ?? '';
  //   }
  //   nftImageRef.current.src = selectedItem.image;
  // nftNameRef.current.innerHTML = selectedItem.name;
  // ndtSkillsRef.current.innerHTML = selectedItem.skills.map((x: any) => `<Image src="${x}" alt=""/>`).join('');
  // ndtDescriptionRef.current.innerHTML = selectedItem.description;
  // const slideLeftRef = useRef<any>(null);
  // const slideRightRef = useRef<any>(null);
  // const slideLeftConfig = {
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   asNavFor: slideRightRef?.current
  // }
  // const slideRightConfig = {
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   asNavFor: slideLeftRef?.current,
  //   dots: true,
  //   centerMode: false,
  //   focusOnSelect: true,
  // }
  return (
    <section className="nnft">
      <div className="container">
        <nav>
          <div
            className="nav nav-tabs nav-tabs-title"
            id="nav-tab"
            role="tablist"
          >
            <button
              className="nav-link active"
              id="nav-gaming-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-gaming"
              type="button"
              role="tab"
              aria-controls="nav-gaming"
              aria-selected="true"
            >
              Gaming NFTs
            </button>
            <button
              className="nav-link"
              id="nav-legendry-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-legendry"
              type="button"
              role="tab"
              aria-controls="nav-legendry"
              aria-selected="false"
            >
              Legendry NFTs
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-gaming"
            role="tabpanel"
            aria-labelledby="nav-gaming-tab"
            tabIndex={0}
          >
            <div className="narrows">
              <Image className="narrow prev" src={ArrowPrev} alt="" />
              <Image className="narrow next" src={ArrowNext} alt="" />
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="nnft-card">
                  <div className="image">
                    <Image ref={nftImageRef} src={Nft3} alt="" id="NFTImage" />
                  </div>
                  <div className="info">
                    <div className="name" id="NFTName" ref={nftNameRef}>
                      Bluey {">"} Bluessette
                    </div>
                    <div className="skills" id="NDTSkills">
                      <Image ref={ndtSkillsRef} src={Nft3} width={41} height={41} alt="" />
                      <Image ref={ndtSkillsRef} src={Nft3} width={41} height={41} alt="" />
                      <Image ref={ndtSkillsRef} src={Nft3} width={41} height={41} alt="" />
                      <Image ref={ndtSkillsRef} src={Nft3} width={41} height={41} alt="" />
                    </div>
                    <div className="description" id="NDTDescription" ref={ndtDescriptionRef}>
                      Bluessette is fun-loving & creative, she is the life of
                      the party.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <nav>
                  <div
                    className="nav nav-tabs nav-tabs-game"
                    id="GamingNFTTab"
                    role="tablist"
                  >
                    <button
                      className="nav-link"
                      id="nav-game1-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-game1"
                      type="button"
                      role="tab"
                      aria-controls="nav-game1"
                      aria-selected="false"
                      data-id="1"
                    >
                      <Image src={Nft1} alt="" data-id="1" />
                    </button>
                    <button
                      className="nav-link"
                      id="nav-game2-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-game2"
                      type="button"
                      role="tab"
                      aria-controls="nav-game2"
                      aria-selected="false"
                      data-id="2"
                    >
                      <Image src={Nft2} alt="" data-id="2" />
                    </button>
                    <button
                      className="nav-link active"
                      id="nav-game3-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-game3"
                      type="button"
                      role="tab"
                      aria-controls="nav-game3"
                      aria-selected="true"
                      data-id="3"
                    >
                      <Image src={Nft3} alt="" data-id="3" />
                    </button>
                    <button
                      className="nav-link"
                      id="nav-game4-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-game4"
                      type="button"
                      role="tab"
                      aria-controls="nav-game4"
                      aria-selected="false"
                      data-id="4"
                    >
                      <Image src={Nft4} alt="" data-id="4" />
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabDetail">
                  <div
                    className="tab-pane fade"
                    id="nav-game1"
                    role="tabpanel"
                    aria-labelledby="nav-gaming-tab"
                    tabIndex={0}
                  >
                    <div className="nft-title">Own your first NFT</div>
                    <div className="nft-title">MONO</div>
                    <div className="nft-description">
                      Each MOMO has a randomly generated hash power that can be
                      upgraded by consuming other MOMO NFTs. The total hash
                      power is calculated by adding up the hash power of all
                      your MOMOs. The amount of MBOX tokens mined is dependent
                      on your weighted average of the total hash power across
                      the platform.
                    </div>
                    <div className="nft-action">
                      <a href="#">
                        <span>BOX Raffle</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.33333 2V3.33333H11.7267L5.17333 9.88667L6.11333 10.8267L12.6667 4.27333V6.66667H14V2M12.6667 12.6667H3.33333V3.33333H8V2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V8H12.6667V12.6667Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a href="#">
                        <span>Buy BOX</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.33333 2V3.33333H11.7267L5.17333 9.88667L6.11333 10.8267L12.6667 4.27333V6.66667H14V2M12.6667 12.6667H3.33333V3.33333H8V2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V8H12.6667V12.6667Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a href="#">
                        <span>Buy MONO</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.33333 2V3.33333H11.7267L5.17333 9.88667L6.11333 10.8267L12.6667 4.27333V6.66667H14V2M12.6667 12.6667H3.33333V3.33333H8V2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V8H12.6667V12.6667Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-game2"
                    role="tabpanel"
                    aria-labelledby="nav-game2-tab"
                    tabIndex={0}
                  >
                    <div className="nft-title">Own your first NFT #2</div>
                    <div className="nft-title">MONO</div>
                    <div className="nft-description">
                      Each MOMO has a randomly generated hash power that can be
                      upgraded by consuming other MOMO NFTs. The total hash
                      power is calculated by adding up the hash power of all
                      your MOMOs. The amount of MBOX tokens mined is dependent
                      on your weighted average of the total hash power across
                      the platform.
                    </div>
                    <div className="nft-action">
                      <a href="#">
                        <span>BOX Raffle</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.33333 2V3.33333H11.7267L5.17333 9.88667L6.11333 10.8267L12.6667 4.27333V6.66667H14V2M12.6667 12.6667H3.33333V3.33333H8V2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V8H12.6667V12.6667Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a href="#">
                        <span>Buy BOX</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.33333 2V3.33333H11.7267L5.17333 9.88667L6.11333 10.8267L12.6667 4.27333V6.66667H14V2M12.6667 12.6667H3.33333V3.33333H8V2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V8H12.6667V12.6667Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a href="#">
                        <span>Buy MONO</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.33333 2V3.33333H11.7267L5.17333 9.88667L6.11333 10.8267L12.6667 4.27333V6.66667H14V2M12.6667 12.6667H3.33333V3.33333H8V2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V8H12.6667V12.6667Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show active"
                    id="nav-game3"
                    role="tabpanel"
                    aria-labelledby="nav-game3-tab"
                    tabIndex={0}
                  >
                    <div className="nft-title">Own your first NFT #3</div>
                    <div className="nft-title">MONO</div>
                    <div className="nft-description">
                      Each MOMO has a randomly generated hash power that can be
                      upgraded by consuming other MOMO NFTs. The total hash
                      power is calculated by adding up the hash power of all
                      your MOMOs. The amount of MBOX tokens mined is dependent
                      on your weighted average of the total hash power across
                      the platform.
                    </div>
                    <div className="nft-action">
                      <a href="#">
                        <span>BOX Raffle</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.33333 2V3.33333H11.7267L5.17333 9.88667L6.11333 10.8267L12.6667 4.27333V6.66667H14V2M12.6667 12.6667H3.33333V3.33333H8V2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V8H12.6667V12.6667Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a href="#">
                        <span>Buy BOX</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.33333 2V3.33333H11.7267L5.17333 9.88667L6.11333 10.8267L12.6667 4.27333V6.66667H14V2M12.6667 12.6667H3.33333V3.33333H8V2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V8H12.6667V12.6667Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a href="#">
                        <span>Buy MONO</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.33333 2V3.33333H11.7267L5.17333 9.88667L6.11333 10.8267L12.6667 4.27333V6.66667H14V2M12.6667 12.6667H3.33333V3.33333H8V2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V8H12.6667V12.6667Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-game4"
                    role="tabpanel"
                    aria-labelledby="nav-game4-tab"
                    tabIndex={0}
                  >
                    <div className="nft-title">Own your first NFT #4</div>
                    <div className="nft-title">MONO</div>
                    <div className="nft-description">
                      Each MOMO has a randomly generated hash power that can be
                      upgraded by consuming other MOMO NFTs. The total hash
                      power is calculated by adding up the hash power of all
                      your MOMOs. The amount of MBOX tokens mined is dependent
                      on your weighted average of the total hash power across
                      the platform.
                    </div>
                    <div className="nft-action">
                      <a href="#">
                        <span>BOX Raffle</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.33333 2V3.33333H11.7267L5.17333 9.88667L6.11333 10.8267L12.6667 4.27333V6.66667H14V2M12.6667 12.6667H3.33333V3.33333H8V2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V8H12.6667V12.6667Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a href="#">
                        <span>Buy BOX</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.33333 2V3.33333H11.7267L5.17333 9.88667L6.11333 10.8267L12.6667 4.27333V6.66667H14V2M12.6667 12.6667H3.33333V3.33333H8V2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V8H12.6667V12.6667Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a href="#">
                        <span>Buy MONO</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.33333 2V3.33333H11.7267L5.17333 9.88667L6.11333 10.8267L12.6667 4.27333V6.66667H14V2M12.6667 12.6667H3.33333V3.33333H8V2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V8H12.6667V12.6667Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-legendry"
            role="tabpanel"
            aria-labelledby="nav-legendry-tab"
            tabIndex={0}
          >
            ...
          </div>
        </div>
      </div>
    </section>
  );
  // return <section classNameName="ntg-gaming">
  //   <div classNameName="container">
  //     <div classNameName="container-fluid">
  //       <nav>
  //         <div classNameName="nav nav-tabs" id="nav-tab" role="tablist">
  //           <button classNameName="nav-link active" id="nav-gaming-tab" data-bs-toggle="tab" data-bs-target="#nav-gaming" type="button" role="tab" aria-controls="nav-gaming" aria-selected="true">
  //             <span>Gaming NFTs</span>
  //           </button>
  //           <button classNameName="nav-link" id="nav-legendry-tab" data-bs-toggle="tab" data-bs-target="#nav-legendry" type="button" role="tab" aria-controls="nav-legendry" aria-selected="false">
  //             <span>Legendry NFTs</span>
  //           </button>
  //         </div>
  //       </nav>
  //       <div classNameName="tab-content" id="nav-tabContent">
  //         <div classNameName="tab-pane fade show active" id="nav-gaming" role="tabpanel" aria-labelledby="nav-gaming-tab">
  //           <div classNameName="ntg-gaming-content">
  //             <div classNameName="row">
  //               <div classNameName="col-12 col-md-5">
  //                 <div classNameName="ntg-gaming-content-left-items">
  //                   <Slider ref={slideLeftRef} {...slideLeftConfig}>
  //                     <div classNameName="ntg-gaming-content-left-item">
  //                       <Image classNameName="ntg-gaming-content-left-item-header" width={194} height={180} src={Game1ImageLarge} alt="" />
  //                       <div classNameName="ntg-gaming-content-left-item-body">
  //                         <a classNameName="link-gaming" href="">Blue &gt; Bluessette</a>
  //                         <div classNameName="list-icon d-flex">
  //                           <Image src={Game1ImageSmall} width={41} height={41} alt="" />
  //                           <Image src={Game1ImageSmall} width={41} height={41} alt="" />
  //                           <Image src={Game1ImageSmall} width={41} height={41} alt="" />
  //                           <Image src={Game1ImageSmall} width={41} height={41} alt="" />
  //                         </div>
  //                         <span classNameName="gaming-des">
  //                           Bluessette is fun-loving & creative, she is the life of the party.
  //                         </span>
  //                       </div>
  //                     </div>
  //                     <div classNameName="ntg-gaming-content-left-item">
  //                       <Image classNameName="ntg-gaming-content-left-item-header" width={194} height={180} src={Game1ImageLarge} alt="" />
  //                       <div classNameName="ntg-gaming-content-left-item-body">
  //                         <a classNameName="link-gaming" href="">Bluey {'&gt'} Bluessette</a>
  //                         <div classNameName="list-icon d-flex">
  //                           <Image src={Game1ImageSmall} width={41} height={41} alt="" />
  //                           <Image src={Game1ImageSmall} width={41} height={41} alt="" />
  //                           <Image src={Game1ImageSmall} width={41} height={41} alt="" />
  //                           <Image src={Game1ImageSmall} width={41} height={41} alt="" />
  //                         </div>
  //                         <span classNameName="gaming-des">
  //                           Bluessette is fun-loving & creative, she is the life of the party.
  //                         </span>
  //                       </div>
  //                     </div>
  //                     <div classNameName="ntg-gaming-content-left-item">
  //                       <Image classNameName="ntg-gaming-content-left-item-header" width={194} height={180} src={Game1ImageLarge} alt="" />
  //                       <div classNameName="ntg-gaming-content-left-item-body">
  //                         <a classNameName="link-gaming" href="">Bluey {'&gt'} Bluessette</a>
  //                         <div classNameName="list-icon d-flex">
  //                           <Image src={Game1ImageSmall} width={41} height={41} alt="" />
  //                           <Image src={Game1ImageSmall} width={41} height={41} alt="" />
  //                           <Image src={Game1ImageSmall} width={41} height={41} alt="" />
  //                           <Image src={Game1ImageSmall} width={41} height={41} alt="" />
  //                         </div>
  //                         <span classNameName="gaming-des">
  //                           Bluessette is fun-loving & creative, she is the life of the party.
  //                         </span>
  //                       </div>
  //                     </div>
  //                     <div classNameName="ntg-gaming-content-left-item">
  //                       <Image classNameName="ntg-gaming-content-left-item-header" width={194} height={180} src={Game1ImageLarge} alt="" />
  //                       <div classNameName="ntg-gaming-content-left-item-body">
  //                         <a classNameName="link-gaming" href="">Bluey {'&gt'} Bluessette</a>
  //                         <div classNameName="list-icon d-flex">
  //                           <Image src={Game1ImageSmall} width={41} height={41} alt="" />
  //                           <Image src={Game1ImageSmall} width={41} height={41} alt="" />
  //                           <Image src={Game1ImageSmall} width={41} height={41} alt="" />
  //                           <Image src={Game1ImageSmall} width={41} height={41} alt="" />
  //                         </div>
  //                         <span classNameName="gaming-des">
  //                           Bluessette is fun-loving & creative, she is the life of the party.
  //                         </span>
  //                       </div>
  //                     </div>
  //                   </Slider>
  //                 </div>
  //               </div>
  //               <div classNameName="col-12 col-md-7">
  //                 <div classNameName="ntg-gaming-content-right-items">
  //                   <Slider ref={slideRightRef} {...slideRightConfig}>
  //                     <div classNameName="ntg-gaming-content-right-item text-center">
  //                       <div classNameName="ntg-gaming-right-item-title">
  //                         Own your first NFT<br />MONO
  //                       </div>
  //                       <div classNameName="ntg-gaming-right-item-des">
  //                         Each MOMO has a randomly generated hash power that can be upgraded by consuming other MOMO NFTs. The total hash power is calculated by adding up the hash power of all your MOMOs. The amount of MBOX tokens mined is dependent on your weighted average of the total hash power across the platform.
  //                       </div>
  //                     </div>
  //                     <div classNameName="ntg-gaming-content-right-item">
  //                       <Image src={Game2Image} alt="" />
  //                     </div>
  //                     <div classNameName="ntg-gaming-content-right-item">
  //                       <Image src={Game3Image} alt="" />
  //                     </div>
  //                     <div classNameName="ntg-gaming-content-right-item">
  //                       <Image src={Game4Image} alt="" />
  //                     </div>
  //                   </Slider>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div classNameName="tab-pane fade" id="nav-legendry" role="tabpanel" aria-labelledby="nav-legendry-tab">...</div>
  //       </div>
  //     </div>
  //   </div>

  // </section>
};
export default HomepageGaming;
