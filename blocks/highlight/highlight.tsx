import { Header , Intro , Trеnding , Categories, Creators, Discover, RocketIcon, LogoHeader, HeroImg, UserImg, Eyeicon, Avatar, Avatar2,Avatar3,DisImg1,DisImg2,DisImg3, HighBack, HowImg1, HowImg2, HowImg3} from '../../components/index';

const Highlight = () =>{
    return(
        <section className="Card Highlight">
                <div className="high-objs">
                    <div className="high-obj">
                        <div className="profile">
                            <img src={Avatar2} alt="" />
                            <p>Shroomie</p>
                        </div>
                        <p className="high-p">
                            Magic Mushrooms
                        </p>
                        <button className="solid">
                            <img src={Eyeicon} alt="" />
                            See NFT
                        </button>
                    </div>
                    <div className="high-obj auct">
                        <p className="auct-p">Auction ends in:</p>
                        <div className="timer-blocks">
                            <div className="timer-block hours">
                                <p className="main">59</p>
                                <p>Hours</p>
                            </div>
                            <p className="timer-dots">:</p>
                            <div className="timer-block minutes">
                                <p className="main">59</p>
                                <p>Minutes</p>
                            </div>
                            <p className="timer-dots">:</p>
                            <div className="timer-block seconds">
                                <p className="main">59</p>
                                <p>Seconds</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Highlight;