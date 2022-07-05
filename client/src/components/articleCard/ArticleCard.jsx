import React, {useState} from "react";
import './ArticleCard.css'

const ArticleCard = ({event}, ArtcImg = '') => {

    let date_s = new Date(event.starting_date);

    const monthNames = ["Jan", "Fev", "Mar", "Avr", "Mai", "Juin",
  "Juil", "Août", "Sep", "Oct", "Nov", "Dec"];

    const d = new Date();
    const month = monthNames[date_s.getMonth()-1];
        
    

    return(
    <div className="ArticleCard"> 
        <div className="card-header">
            <time dateTime='2202-07-02'>
                <span className="h4">{date_s.getDay()}</span>
                <span className="h5 small">{month}</span>
            </time>
        </div>
        <div className="photo-product">
                <div>
                    <img src={ArtcImg} alt={event.shoes.shoes_name}/>
                </div>
        </div>
        <div className="desc-product">
            <h2>
                    {event.shoes.shoes_name}
            </h2>
        </div>
        <div className="buying-product">
            <div className="price">
                <p>Prix de Base : {event.shoes.starting_price}$ 🔥</p>
            </div>
            <div className="buying-btn">

            </div>
        </div>

    </div>
    );
}

export default ArticleCard;