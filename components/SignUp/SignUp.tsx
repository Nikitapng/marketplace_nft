import React from "react";

import "./SignUp.css";

import { Header , Intro , Trеnding , Categories, Creators, Discover, RocketIcon, LogoHeader, HeroImg, UserImg, Eyeicon, Avatar, Avatar2,Avatar3,DisImg1,DisImg2,DisImg3, HighBack} from '../index';
import Footer from "../Footer/Footer";
import SignImg from '../../img/SignUp/SignImg.svg';
import Inp1 from '../../img/SignUp/Usersign.svg';
import Inp2 from '../../img/SignUp/EnvelopeSimplesign.svg';
import Inp3 from '../../img/SignUp/LockKeysign.svg';
import Inp4 from '../../img/SignUp/LockKeysign-1.svg';


const SignUp = () => {
    return (   
        <div className="signupdiv">
            <Header/>
            <section className="Card SignUp">
                <div className="signup-wrap">
                    <div className="signup-hero">
                        <img src={SignImg} alt="" />
                    </div>
                    
                    <div className="signup-form">
                        <div className="signup-heading">
                            <div className="headline">
                                Create Account
                            </div>
                            <div className="subhead">
                                Welcome! enter your details and start creating, collecting and selling NFTs.
                            </div>
                            <div className="input-wrap">
                                <div className="input-item">
                                    <img className="icon" src={Inp1} alt="" />
                                    <input type="text" placeholder="Username" />
                                </div>
                                <div className="input-item">
                                    <img className="icon" src={Inp2} alt="" />
                                    <input type="email" placeholder="Email Address" />
                                </div>
                                <div className="input-item">
                                    <img className="icon" src={Inp3} alt="" />
                                    <input type="password" placeholder="Password" />
                                </div>
                                <div className="input-item">
                                    <img className="icon" src={Inp4} alt="" />
                                    <input type="password" placeholder="Confirm Password" />
                                </div>
                                <div className="input-item">
                                    <button type="submit">Create account</button>
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

export default SignUp;