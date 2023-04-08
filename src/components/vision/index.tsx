import Image from 'next/image'
import React from 'react'
import Image1 from "../../assets/images/content/item-1.png"
const Vision = () => {
  return (
   <div className='ntg-vision'>
        <div className="ntg-title">Our Vision</div>
        <div>
          <div className="ntg-vision-img">
            <Image src={Image1} alt="" />
          </div>
          <div className="ntg-vision-box">
            <p className="ntg-vision-text">
              “We are committed to developing sustainable games, communities,
              and ecosystems and providing users with a great, transparent,
              secure, and user-friendly experience.”
            </p>
          </div>
        </div>
   </div>
  )
}

export default Vision