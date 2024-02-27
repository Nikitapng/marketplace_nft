import React from "react";
import '../../components/Home/Home.css';

import { Header , Trеnding , Categories, Creators, Discover, RocketIcon, LogoHeader, HeroImg, UserImg, Eyeicon, Avatar, Avatar2,Avatar3,DisImg1,DisImg2,DisImg3} from '../../components/index';

const Intro = () => {
    return (
        <section  className="Card Hero">
                <div className="left-block">
                    <h1 className="hero-main-text">
                        Discover Digital art & Collect NFTs
                    </h1>
                    <p>
                        NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
                    </p>
                    <button className="solid">
                        <img src={RocketIcon} alt="" />Get Started
                    </button>
                    <div className="text-blocks">
                        <div className="text-block">
                            <p className="top-text">240k+</p>
                            <p>Total Sale</p>
                        </div>
                        <div className="text-block">
                            <p className="top-text">100k+</p>
                            <p>Auctions</p>
                        </div>
                        <div className="text-block">
                            <p className="top-text">240k+</p>
                            <p>Artists</p>
                        </div>
                    </div>
                </div>
                <div className="right-block">
                    <div className="card-block">
                        <img src={HeroImg} alt="" />
                        <div className="bottom">
                            <p className="big">Space Walking</p>
                            <div className="profile">
                            <img src={Avatar} alt="" />
                            <p>Animakid</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Intro;
