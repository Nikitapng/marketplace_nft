import React from "react";
import { Link } from "react-router-dom";

import './Header.css';
import {LogoHeader,UserImg} from '../../components/index';

const Header = () => {
    return (
        <header className="header">
                <div className="header-logo">
                <Link className="link" to="/" ><img src={LogoHeader} alt="logo" /></Link>
                </div>

                <div className="header-menu">
                <ul className="header-menu-items">
                    <li className="header-menu-item"><Link className="link" to="/Marketplace" >Marketplace</Link></li>
                    <li className="header-menu-item"><Link className="link" to="/Ranking" >Rankings</Link></li>
                    <li className="header-menu-item"><Link className="link" to="/Connect" >Connect a wallet</Link></li>
                    <li className="header-menu-item"><button className="solid"><img src={UserImg} alt="1"/><Link className="link" to="/SignUp" > Sign Up</Link></button></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
