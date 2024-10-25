import React from "react";
import CardImage from "../ui/CardImage";
import CardInfo from "../ui/CardInfo";
import FavouriteButton from "../ui/FavouriteButton";

const EventsCard = () => {
    return (
        <div className="w-full h-auto flex flex-col sm:flex-row  mb-12 rounded">
            <div className="w-full sm:w-1/3 h-full">
                <CardImage />
            </div>
            <div className="flex-1 h-full sm:w-2/3">
                <CardInfo
                    name="Brew Scouts Yearly Brew Out Competition"
                    date="Fri, Nov 1 - 6:00 PM"
                    location="Cape Town"
                />
            </div>
        </div>
    );
};

export default EventsCard;

