import React from "react";
import { RocketIcon} from '../../components/index';

import cardData from '../../data/data';
import Card from "../../components/CardCreators/CardCreators";
 
const Creators = () => {
    return(
        <section className="Card Creators">
                <div className="top">
                    <div className="top-txt">
                        <h1>Top creators</h1>
                        <p>Checkout Top Rated Creators on the NFT Marketplace</p>
                    </div>
                    <button className="border">
                        <img src={RocketIcon} alt="" />View Rankings
                </button>
                </div>
                
                <div className="cards">
                    <div className="container">
                    {cardData.map((data, index) => (
                        <Card key={index} cardData={data} />
                    ))}                  
                    </div>
                    
                </div>
            </section>
    )
}

export default Creators;
