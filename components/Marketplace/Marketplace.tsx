import React from "react";

import "./Marketplace.css";

import { Header , Intro , Trеnding , Categories, Creators, Discover, RocketIcon, LogoHeader, HeroImg, UserImg, Eyeicon, Avatar, Avatar2,Avatar3,DisImg1,DisImg2,DisImg3, HighBack} from '../index';
import Footer from "../Footer/Footer";
import MPSection from "../../blocks/mpsection/mpsection";
import MarketIntro from "../../blocks/MarketIntro/marketIntro";

const Marketplace = () => {
    return (   
        <div className="marketplace">
            <Header/>
            <MarketIntro/>
           <MPSection/>
            <Footer />
        </div>
    )
}

export default Marketplace;