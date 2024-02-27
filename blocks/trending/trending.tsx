import React from "react";
import '../../components/Home/Home.css';
import MainImgCard1 from "../../img/Collection/Dog.png";
import MainImgCard2 from "../../img/Collection/Dog2.png";
import MainImgCard3 from "../../img/Collection/Dog3.png";
import Mash1 from "../../img/Collection/Mash1.png";
import Mash2 from "../../img/Collection/Mash2.png";
import Mash3 from "../../img/Collection/Mash3.png";
import Robot1 from "../../img/Collection/Robot1.png";
import Robot2 from "../../img/Collection/Robot2.png";
import Robot3 from "../../img/Collection/Robot3.png";
import Avatar1 from "../../img/Collection/Avatar Placeholder1.png";
import {Header , Intro , Categories, Creators, Discover, RocketIcon, LogoHeader, HeroImg, UserImg, Eyeicon, Avatar, Avatar2,Avatar3,DisImg1,DisImg2,DisImg3} from '../../components/index';

const Trеnding = () => {
    return(
        <section className="Card Trending">
                <h1>Trending Collection</h1>
                <p>Checkout our weekly updated trending collection.</p>
                <div className="cards">
                    <div className="card">
                        <img className="main-card-img" src={MainImgCard1} alt="" />
                        <div className="card-list">
                            <img src={MainImgCard2} alt="" />
                            <img src={MainImgCard3} alt="" />
                            <div>
                                1025+
                            </div>
                        </div>
                        <div className="bottom">
                                <p className="big">DSGN Animals</p>
                                <div className="profile">
                                <img src={Avatar1} alt="" />
                                <p>MrFox</p>
                                </div>
                            </div>
                    </div>
                    <div className="card">
                        <img className="main-card-img" src={Mash1} alt="" />
                        <div className="card-list">
                            <img src={Mash2} alt="" />
                            <img src={Mash3} alt="" />
                            <div>
                                1025+
                            </div>
                        </div>
                        <div className="bottom">
                                <p className="big">Magic Mushrooms</p>
                                <div className="profile">
                                <img src={Avatar2} alt="" />
                                <p>Shroomie</p>
                                </div>
                            </div>
                    </div>
                    <div className="card">
                        <img className="main-card-img" src={Robot1} alt="" />
                        <div className="card-list">
                            <img src={Robot2} alt="" />
                            <img src={Robot3} alt="" />
                            <div>
                                1025+
                            </div>
                        </div>
                        <div className="bottom">
                                <p className="big">Disco Machines</p>
                                <div className="profile">
                                <img src={Avatar3} alt="" />
                                <p>BeKind2Robots</p>
                                </div>
                            </div>
                    </div>
                    
                </div>
            </section>
    )
}



export default Trеnding;
