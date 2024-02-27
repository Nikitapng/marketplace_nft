import rankData from "../../data/rankData";

interface CardProps {
    rankData: {
        rank: number;
        author: string;
        authorImg: string;
    };
}

const CardTop = ({ rankData } : CardProps ) => {
    return (
        <div className="topcreator">
            <div className="topcreator-rank">
                {rankData.rank}
            </div>
            <div className="topcreator-avatar">
                <img src={rankData.authorImg} alt="" />
            </div>
                            <div className="topcreator-name">
                                {rankData.author}
                            </div>
                            <div className="topcreator-change">
                                +1.41%
                            </div>
                            <div className="topcreator-soldcount">
                                602
                            </div>
                            <div className="topcreator-volume">
                                12.4 ETH
                            </div>
                        </div>
    )
}

export default CardTop;