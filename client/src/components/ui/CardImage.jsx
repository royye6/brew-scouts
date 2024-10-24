import React from "react";
import cardImage from "../../assets/images/card/craft_brewery.jpg";



const CardImage = () => {
    return (
        <div className="w-full h-full object-cover  overflow-hidden rounded">
            <img
                src={cardImage}
                alt="Card Image"
                className="w-full h-full object-cover"
            />
        </div>
    );
};

export default CardImage;
