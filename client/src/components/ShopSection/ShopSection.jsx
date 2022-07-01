import React, { useState } from 'react';
import '../ShopSection/ShopSection.css'
import axios from "axios";
import { useEffect } from 'react';


const ShopSection = () => {

    const [shoes, setShoes] = useState([])

    useEffect(() => {
        const fetchShoes = async () => {
           const { data } = await axios.get("/shoes");
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
        <div className="ArticleView">
            {shoes.map((shoe) => (
                <div className='' key={shoe._id}>
                    <div>
                        <img src={shoe.shoes_image} alt={shoe.shoes_name} />
                    </div>

                    <p>
                        {shoe.shoes_name}
                    </p>

                    <p>
                        {shoe.description}
                    </p>

                    <p>
                        {shoe.starting_price}
                    </p>

                </div>
            ))}
        </div>
    </div>
    
    );
}

export default ShopSection;
