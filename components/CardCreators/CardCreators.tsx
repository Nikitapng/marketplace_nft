import  cardData  from '../../data/data';
import "./CardCreators.css"
interface CardProps {
    cardData: {
      name: string;
      totalSales: string;
      imageUrl: string;
      rank: number;
    };
  }
  
  const Card = ({ cardData }: CardProps) => {
    return (
      <div className="cr-card">
        <p className='cr-num'>{cardData.rank}</p>
        <img className="cr-img" src={cardData.imageUrl} alt="img" />
        <p className='cr-p-main'>{cardData.name}</p>
        <p className='cr-p'><span className='cr-s'>Total Sales:</span> {cardData.totalSales}</p>
      </div>
    );
  };
  
  export default Card;