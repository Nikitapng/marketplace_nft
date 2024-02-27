import React from "react";

import categoryData from "../../data/categories";
import CatCard from "../../components/CardCategory/CardCat";

const Categories = () => {
    return(
        <section className="Card Categories">
                <h1>Browse Categories</h1>
                <div className="cards">
                    <div className="cat-container">
                        {categoryData.map((data, index) => (
                            <CatCard key={index} categoryData={data} />
                        ))}                  
                    </div>  
                </div>
            </section>
    )
}

export default Categories;