import React, { useState } from 'react';
import './ShopSection.css'
import Shoes from '../../components/shoes/Shoes';
import axios from "axios";
import { useEffect } from 'react';
import ArtcImg from '../../assets/nike-sb-dunk-low-what-the-p-rod.jpg';

const ShopSection = () => {

    const [shoes, setShoes] = useState([])

    useEffect(() => {
        const fetchShoes = async () => {
           const { data } = await axios.get("/shoes");
            setShoes(data); 
        }
        fetchShoes();
    },[])

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
        {console.log({shoes})} 
            {shoes.map((shoe) => (   
                     
               <Shoes shoes={shoe} ArtcImg={ArtcImg} key={shoe._id} />    
            ))} 
            
        </div>
    </div>
    
    );
}

export default ShopSection;
