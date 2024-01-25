import React from 'react'
import './topFold.css'
import Button from '../../common/Button'

const TopFold = () => {
  return (
    <div className="topfold absolute-center">
      <div className="tf-left">
        <div className="tf-heading">
          NFT Marketplace: Your Digital <span className= "heading-gradient">Art Gallery</span>
        </div>
        <div className="tf-description">
          Welcome to NFTGalleryHub, the ultimate destination where creators and collectors unite to explore, trade, and invest in the world of Non-Fungible Tokens      
        </div> 
        <div className="tf-left-btns">
          <Button btnType="PRIMARY" btnText='EXPLORE'/>
          <Button btnType="SECONDARY" btnText='Create' customClass="tf-left-secondary-btn"/>

        </div>       
      </div>
      <div className="tf-right"></div>
    </div>
  )
}

export default TopFold