import React from "react";

import "./Connect.css";

import { Header , Intro , Trеnding , Categories, Creators, Discover, RocketIcon, LogoHeader, HeroImg, UserImg, Eyeicon, Avatar, Avatar2,Avatar3,DisImg1,DisImg2,DisImg3, HighBack} from '../index';
import Footer from "../Footer/Footer";
import SignImg from '../../img/SignUp/SignImg.svg';
import Inp1 from "../../img/Connect/Metamask.svg";
import Inp2 from "../../img/Connect/WalletConnect.svg";
import Inp3 from "../../img/Connect/Coinbase.svg";
const Connect = () => {
    return (   
        <div className="connect-div">
            <Header/>
            <section className="connect">
                <div className="connect-wrap">
                    <div className="connect-hero">
                        <img src={SignImg} alt="" />
                    </div>
                    
                    <div className="connect-content">
                        <div className="connect-heading">
                            <div className="headline">
                                Connect Wallet
                            </div>
                            <div className="subhead">
                            Choose a wallet you want to connect. There are several wallet providers.
                            </div>
                            <div className="connect-blocks">
                                <div className="connect-block">
                                    <img className="connect-block-icon" src={Inp1} alt="" />
                                    <div className="connect-block-text">Metamask</div>
                                </div>
                                <div className="connect-block">
                                    <img className="connect-block-icon" src={Inp2} alt="" />
                                    <div className="connect-block-text">Wallet Connect</div>
                                </div>
                                <div className="connect-block">
                                    <img className="connect-block-icon" src={Inp3} alt="" />
                                    <div className="connect-block-text">Coinbase</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Connect;