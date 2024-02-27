import { Header , Intro , Trеnding , Categories, Creators, Discover, RocketIcon, LogoHeader, HeroImg, UserImg, Eyeicon, Avatar, Avatar2,Avatar3,DisImg1,DisImg2,DisImg3, HighBack, HowImg1, HowImg2, HowImg3, Highlight} from "../../components/index"

const HowIt = () => {
    return(
        <section className="Card HowIt">
                <h1>How it works</h1>
                <p>Find out how to get started</p>
                <div className="cards-how">
                    <div className="how-card">
                        <img src={HowImg1} alt="" />
                        <h1>Setup Your wallet</h1>
                        <p>Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</p>
                    </div>
                    <div className="how-card">
                        <img src={HowImg2} alt="" />
                        <h1>Create Collection</h1>
                        <p>Upload your work and setup your collection. Add a description, social links and floor price.</p>
                    </div>
                    <div className="how-card">
                        <img src={HowImg3} alt="" />
                        <h1>Start Earning</h1>
                        <p>Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</p>
                    </div>
                </div>
            </section>
    )
}

export default HowIt;