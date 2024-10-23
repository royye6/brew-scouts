import React from "react";
import cardImage from "../../assets/images/card/craft_brewery.jpg";


const CardImage = () => {
    return (
        <div className="w-full h-full">
            <img src={cardImage} alt="" />
        </div>
    );
};

export default CardImage;
