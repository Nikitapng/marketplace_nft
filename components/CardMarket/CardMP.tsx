import MPData from "../../data/MPdata";

interface CardProps {
    MPData: {
      name: string;
      author: string;
      authorImg: string;
      price: string;
      imageUrl: string;
      highBid: string;
    };
  }
  
  const CardMP = ({ MPData }: CardProps) => {
    return (
        <div className="mp-card">
        <img className="mainImg" src={MPData.imageUrl} alt="" />
        <div className="top-txts">
            <p className="cat-p-main">
                {MPData.name}
            </p>
            <div className="profile">
                <img src={MPData.authorImg} alt="" />
                <p>{MPData.author}</p>
            </div>
        </div>
        
        <div className="end-txts">
            <div className="dis-block start">
                <p className="top-dis-block-txt">
                    Price
                </p>
                <p className="end-dis-block-txt">
                    {MPData.price}
                </p>
            </div>
            <div className="dis-block end">
                <p className="top-dis-block-txt">
                    Highest Bid
                </p>
                <p className="end-dis-block-txt">
                    {MPData.highBid}
                </p>
            </div>
        </div>
    </div>
    );
  };
  
  export default CardMP;