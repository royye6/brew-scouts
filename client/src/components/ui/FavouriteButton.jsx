import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const FavouriteButton = () => {
    const [isFavourite, setIsFavourite] = useState(false);
    const [isToggle, setIsToggle] = useState(false);

    const handleToggle = () => {
        setIsToggle((prev) => !prev);
    };

    return (
        <div className=" flex justify-end text-2xl bg-yellow-300 outline-none">
            <button className="outline-none" onClick={handleToggle}>{isToggle ? <AiFillHeart /> : <AiOutlineHeart />}</button>
        </div>
    );
};

export default FavouriteButton;
