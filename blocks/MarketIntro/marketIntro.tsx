import { CardMP,  } from "../../components/index"
import Glass from "../../img/MagnifyingGlass.svg"

const MarketIntro = () => {
    return(
        <section className="MarketIntro">
        <div className="browsemp-wrap">
            <div className="browsemp">
                <div className="headline">
                    Browse Marketplace
                </div>
                <div className="subhead">
                    Browse through more than 50k NFTs on the NFT Marketplace.
                </div>
                
                <form action="//google.com/search" target="_blank">
                <input id="browse-nft" type="text" placeholder="Search your favourite NFTs"/>
                <input type="image" src={Glass}/>
                </form>
            </div>
        </div>
        <div className="browsemp-switch">
                <div id="nfts-switcher" className="switcher">
                    <div className="switcher-name">
                        NFTs
                    </div>
                    <div className="switcher-count">
                        302
                    </div>
                </div>
                <div id="collections-switcher" className="switcher">
                    <div className="switcher-name">
                        Collections
                    </div>
                    <div className="switcher-count">
                        67
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MarketIntro