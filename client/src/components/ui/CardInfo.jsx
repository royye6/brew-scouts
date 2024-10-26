import React from "react";
import FavouriteButton from "../ui/FavouriteButton";


const CardInfo = ({
    name,
    date,
    location = "Hopps 'n All Square",
    promotion = "free",
}) => {
    return (
        <ul className="flex flex-col px-2 flex-grow gap-1 text-sm max-sm:mt-2 ">
            <li className="text-lg text-slate-800 font-bold">
                <h4>{name}</h4>
            </li>
            <li className="font-thin">
                <p>{date}</p>
            </li>
            <li>
                <p>{location}</p>
            </li>
            <li className="font-bold">
                <p>{promotion}</p>
            </li>
            {/* <li className="font-light">
                <p>
                    by <span className="text-orange-700 hover:text-orange-600">Brew Scouts</span>
                </p>
            </li> */}
            <FavouriteButton />
        </ul>
    );
};

export default CardInfo;
