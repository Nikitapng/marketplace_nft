import React from "react";

import {Header , Intro , Trеnding , Categories, Creators, RocketIcon, LogoHeader, HeroImg, UserImg, Eyeicon, Avatar, Avatar2,Avatar3,DisImg1,DisImg2,DisImg3} from '../../components/index';


const Discover = () => {
    return(
        <section className="Card Discover">
                <div className="top">
                    <div className="top-txt">
                        <h1>Discover More NFTs</h1>
                        <p>Explore new trending NFTs</p>
                    </div>
                    <button className="border">
                        <img src={Eyeicon} alt="" />See All
                </button>
                </div>
                <div className="cards">
                    <div className="dis-card">
                        <img className="mainImg" src={DisImg1} alt="" />
                        <div className="top-txts">
                            <p className="cat-p-main">
                                Distant Galaxy
                            </p>
                            <div className="profile">
                                <img src={Avatar2} alt="" />
                                <p>MoonDancer</p>
                            </div>
                        </div>
                        
                        <div className="end-txts">
                            <div className="dis-block start">
                                <p className="top-dis-block-txt">
                                    Price
                                </p>
                                <p className="end-dis-block-txt">
                                    1.63 ETH
                                </p>
                            </div>
                            <div className="dis-block end">
                                <p className="top-dis-block-txt">
                                    Highest Bid
                                </p>
                                <p className="end-dis-block-txt">
                                    0.33 wETH
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="dis-card">
                        <img className="mainImg" src={DisImg2} alt="" />
                        <div className="top-txts">
                            <p className="cat-p-main">
                                Life On Edena
                            </p>
                            <div className="profile">
                                <img src={Avatar3} alt="" />
                                <p>NebulaKid</p>
                            </div>
                        </div>
                        
                        <div className="end-txts">
                            <div className="dis-block start">
                                <p className="top-dis-block-txt">
                                    Price
                                </p>
                                <p className="end-dis-block-txt">
                                    1.63 ETH
                                </p>
                            </div>
                            <div className="dis-block end">
                                <p className="top-dis-block-txt">
                                    Highest Bid
                                </p>
                                <p className="end-dis-block-txt">
                                    0.33 wETH
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="dis-card">
                        <img className="mainImg" src={DisImg3} alt="" />
                        <div className="top-txts">
                            <p className="cat-p-main">
                                AstroFiction
                            </p>
                            <div className="profile">
                                <img src={Avatar} alt="" />
                                <p>Spaceone</p>
                            </div>
                        </div>
                        
                        <div className="end-txts">
                            <div className="dis-block start">
                                <p className="top-dis-block-txt">
                                    Price
                                </p>
                                <p className="end-dis-block-txt">
                                    1.63 ETH
                                </p>
                            </div>
                            <div className="dis-block end">
                                <p className="top-dis-block-txt">
                                    Highest Bid
                                </p>
                                <p className="end-dis-block-txt">
                                    0.33 wETH
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Discover;