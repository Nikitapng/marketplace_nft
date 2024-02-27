import CosmImg from "../../img/Subscr/Cosm.svg"
import MailLogo from "../../img/Subscr/EnvelopeSimple.svg"

const Subscr = () => {
    return(
        <section className="Card Subscr">
            <div className="subscr-card">
                <div className="sub-card">
                    <img className="subscr-img" src={CosmImg} alt="" />
                    <div className="right-sec">
                        <h1>Join Our Weekly Digest</h1>
                        <p>Get exclusive promotions & updates straight to your inbox.</p>
                        <div className="subscribe-input-area">
                            <input type="text" id="subscribe-input" placeholder="Enter your email here"/>
                            <div id="subscribe-btn">
                                <img src={MailLogo} alt="" />
                                Subscribe
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscr