import React, { useState } from 'react';
import '../ShopSection/ShopSection.css'
import axios from "axios";
import { useEffect } from 'react';
import ArtcImg from '../../assets/nike-sb-dunk-low-what-the-p-rod.jpg';

const ShopSection = () => {

    const [shoes, setShoes] = useState([])

    useEffect(() => {
        const fetchShoes = async () => {
           const { data } = await axios.get("/api/shoes");
            setShoes(data); 
        }
        fetchShoes();
    })

    return(
        <div className="ArticleContainer">
        <div className="ArticleFilter">
            <ul>
                <button>Tout</button>
                <button>En ce moment</button>
                <button>A venir</button>
            </ul>
        </div>
        <div className="ArticleView-GridContainer">
                
            {shoes.map((shoe) => (         
                    <div className="ArticleCard" key={shoe._id}> 
                    <div className="card-header">
                        <time dateTime='2202-07-02'>
                            <span className="h4">05</span>
                            <span className="h5 small">Jul</span>
                        </time>
                    </div>
                            <div className="photo-product">
                                    <div>
                                        <img src={ArtcImg} />
                                    </div>
                            </div>
                            <div className="desc-product">
                                <h2>
                                        {shoe.shoes_name}
                                </h2>
                            </div>
                            <div className="buying-product">
                                <div className="price">
                                    <p>Prix de Base : {shoe.starting_price}$🔥 </p>
                                </div>
                                <div className="buying-btn">

                                </div>
                            </div>                

                    </div>
            ))} 
            
        </div>
    </div>
    
    );
}

export default ShopSection;
