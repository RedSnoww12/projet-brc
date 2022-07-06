import React from "react";
import './Event.css'

const Event = ({event}) => {
    return(
        <div className="EventContainer">
            <div className="EventDescribe">
                <div className="ShoesImg">        
                <img src={event.shoes.shoes_image} alt="image pompe" />
                </div>
                <div className="shoeDesciption">
                <h1>{event.shoes.shoes_name}</h1>
                </div>
            </div>
            <div className="EventInterraction">

            </div>

        </div>
    );
}

export default Event;