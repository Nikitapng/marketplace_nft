import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="explore">
                <div className="explore-headline">
                    Explore
                </div>
                <div className="explore-list">
                    <div className="explore-list-item">Marketplace</div>
                    <div className="explore-list-item">Rankings</div>
                    <div className="explore-list-item">Connect a Wallet</div>
                </div>
            </div>
            <div className="subscribe">
                <div className="subscribe-headline">
                    Join our weekly digest
                </div>
                <div className="subscribe-subhead">
                    Get exclusive promotions & updates straight to your inbox.
                </div>
                <div className="subscribe-input-area">
                    <input type="text" id="subscribe-input" placeholder="Enter your email here"/>
                    <div id="subscribe-btn">Subscribe</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
