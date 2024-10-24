import React from "react";


const CardInfo = ({
    name,
    date,
    location = "Hopps 'n All Square",
    promotion = "free",
}) => {
    return (
        <ul className="flex flex-col px-2 flex-grow gap-1 text-sm max-sm:mt-2">
            <li className="text-xl text-slate-800 font-bold">
                <h4>{name}</h4>
            </li>
            <li className="font-semibold">
                <p>{date}</p>
            </li>
            <li>
                <p>{location}</p>
            </li>
            <li className="font-bold">
                <p>{promotion}</p>
            </li>
            <li className="font-serif">
                <p>by Brew Scouts</p>
            </li>
        </ul>
    );
};

export default CardInfo;
