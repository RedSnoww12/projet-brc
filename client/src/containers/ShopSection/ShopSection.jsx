import React from 'react';
import './ShopSection.css'
import {Shoes, Error, Loading } from '../../components/';
import { useEffect } from 'react';
import ArtcImg from '../../assets/nike-sb-dunk-low-what-the-p-rod.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { listShoes } from './../../Redux/Actions/ShoesActions';
import { Link } from 'react-router-dom';


const ShopSection = () => {

    const dispatch = useDispatch();
    const shoesList = useSelector((state) => state.shoesList);

    const {loading, error, shoes} = shoesList;

    useEffect(() => {
        dispatch(listShoes())
    },[dispatch])

    return(
        <div className="ArticleContainer">
        <div className="ArticleFilter">
            <ul>
                <button>Tout</button>
                <button>En ce moment</button>
                <button>A venir</button>
            </ul>
        </div>
        {
            loading ? <div><Loading /></div>
            
            : error ? <div><Error variant={"alert-danger"}>{error}</Error></div>
            :
            (
                <>
                    <div className="ArticleView-GridContainer">
                     
                        {shoes.map((shoe) => (   
                                
                            <Link to={`/shoes/${shoe._id}`}>
                                <Shoes shoes={shoe} ArtcImg={ArtcImg} key={shoe._id} />
                            </Link>
                        ))} 
                        
                    </div>
                </>
            )
            
        }
    </div>
    
    );
}

export default ShopSection;
