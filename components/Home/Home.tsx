import React from "react";

import "./Home.css";

import { Header , Intro , Trеnding , Categories, Creators, Discover, RocketIcon, LogoHeader, HeroImg, UserImg, Eyeicon, Avatar, Avatar2,Avatar3,DisImg1,DisImg2,DisImg3, HighBack, HowImg1, HowImg2, HowImg3, Highlight, HowIt} from '../index';
import Footer from "../Footer/Footer";
import Subscr from "../../blocks/subscr/subscr";
import Marketplace from "../Marketplace/Marketplace";

const Home = () => {
    return (   
        <div className="home">
            <Header/>
            <Intro/>
            <Trеnding/>
            <Creators/>
            <Categories/>
            <Discover/>
            <Highlight/>
            <HowIt/>
            <Subscr/>
            <Footer/>
        </div>
    )
}

export default Home;