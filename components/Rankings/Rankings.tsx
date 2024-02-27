import React from "react";

import "./Rankings.css";

import { Header , Intro , Trеnding , Categories, Creators, Discover, RocketIcon, LogoHeader, HeroImg, UserImg, Eyeicon, Avatar, Avatar2,Avatar3,DisImg1,DisImg2,DisImg3, HighBack} from '../index';
import Footer from "../Footer/Footer";
import CardTop from "../CardTop/CardTop";
import rankData from "../../data/rankData";

const Rankings = () => {
    return (   
        <div className="rankings">
            <Header/>
            <div className="topcreators-wrap">
                <div className="topcreators">
                    <div className="headline">
                        Top Creators
                    </div>
                    <div className="subhead">
                        Check out top ranking NFT artists on the NFT Marketplace.
                    </div>
                </div>
            </div>
            <section className="topcreators-section">
                <div className="topcreators-switch">
                    <div id="today-switcher" className="switcher">
                        <div className="switcher-name">
                            Today
                        </div>
                    </div>
                    <div id="week-switcher" className="switcher">
                        <div className="switcher-name">
                            This Week
                        </div>
                    </div>
                    <div id="month-switcher" className="switcher">
                        <div className="switcher-name">
                            This Month
                        </div>
                    </div>
                    <div id="alltime-switcher" className="switcher">
                        <div className="switcher-name">
                            All Time
                        </div>
                    </div>
                </div>
                <div className="topcreators-list-wrap">
                    <div className="topcreators-list">
                        <div className="topcreators-list-header">
                            <div className="rank">
                                #
                            </div>
                            <div className="artist">
                                Artist
                            </div>
                            <div className="change">
                                Change
                            </div>
                            <div className="nfts-sold">
                                NFTs Sold
                            </div>
                            <div className="volume">
                                Volume
                            </div>
                        </div>
                        {rankData.map((data, index) => (
                    <CardTop key={index} rankData={data} />
                ))}  
                    </div>
                </div>
                
            </section>
            <Footer/>
        </div>
    )
}

export default Rankings;