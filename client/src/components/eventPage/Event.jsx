import React from "react";
import './Event.css'

const Event = ({shoes}, ArtcImg = '../assets/airMax.jpg') => {
    return(
        <div className="EventContainer">
            <div className="EventDescribe">
                <div className="ShoesImg">        
                <img src={ArtcImg} alt="image pompe" />
                </div>
                <div className="shoeDesciption">
                <h1>{shoes.shoes_name}</h1>
                </div>
            </div>
            <div className="EventInterraction">

            </div>

        </div>
    );
}

export default Event;