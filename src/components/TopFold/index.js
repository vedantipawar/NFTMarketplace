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
      <div className="tf-right">
        <div className="tf-r-bg-blob"> </div>
        <div className="tf-right-diamond">
          <div className="tf-r-diamond-item absolute-center">
            <img className="tf-r-diamond-img" alt="diamond-banner" src="https://i.seadn.io/s/raw/files/23a9a6e438a9f3a3d4ba7f7b6ce46991.gif?auto=format&dpr=1&w=384"/>
          </div>
          <div className="tf-r-diamond-item absolute-center">
            <img className="tf-r-diamond-img" alt="diamond-banner" src="https://lh3.googleusercontent.com/iFB3rZI2pFCdUFUBtmqr2Lp3bEc6f4_C5DVGk9ekponZzxhQee4hfyBBWeBHEMl9QCuehYX2QTdE0e7Ljsd-um3Lv0ngwPAIigM=s400"/>
          </div>
          {/* <div className="tf-r-diamond-item absolute-center">
            <img className="tf-r-diamond-img" alt="diamond-banner" src="https://i.seadn.io/gae/Ojuct6zT8kbN2NhfVlaVoQpueTngmJhT_tDI2ks3cGgBZjaTrLotUrbH0pZF2XlWFR3QPZtEaJsIw8dt2XDUHNykeQ?auto=format&dpr=1&w=384"/>
          </div>
          <div className="tf-r-diamond-item absolute-center">
            <img className="tf-r-diamond-img" alt="diamond-banner" src="https://i.seadn.io/gcs/files/8e3a4caa45d3079d8f16cfb4f0ac8bed.gif?auto=format&dpr=1&h=500"/>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default TopFold

