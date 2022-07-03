import React from "react";
import './shoes.css'

const Shoes = ({shoes}, ArtcImg = '') => {
    return(
    <div className="ArticleCard"> 
        <div className="card-header">
            <time dateTime='2202-07-02'>
                <span className="h4">05</span>
                <span className="h5 small">Jul</span>
            </time>
        </div>
        <div className="photo-product">
                <div>
                    <img src={ArtcImg} alt={shoes.shoes_name}/>
                </div>
        </div>
        <div className="desc-product">
            <h2>
                    {shoes.shoes_name}
            </h2>
        </div>
        <div className="buying-product">
            <div className="price">
                <p>Prix de Base : {shoes.starting_price}$ 🔥</p>
            </div>
            <div className="buying-btn">

            </div>
        </div>

    </div>
    );
}

export default Shoes;