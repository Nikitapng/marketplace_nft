import categoryData from "../../data/categories";
import "./CardCat.css"
interface CardProps {
    categoryData: {
      name: string;
      imageUrl: string;
    };
  }
  
  const CatCard = ({ categoryData }: CardProps) => {
    return (
      <div className="cat-card">
        <img className="cat-img" src={categoryData.imageUrl} alt="img" />
        <p className='cat-p-main'>{categoryData.name}</p>
      </div>
    );
  };
  
  export default CatCard;