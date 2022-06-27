import React, { useState } from 'react';
import '../ShopSection/ShopSection.css'

const ShopSection = () => {
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

        </div>
    </div>
    
    );
}

export default ShopSection;
