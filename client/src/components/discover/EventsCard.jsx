import React from "react";
import CardImage from "../ui/CardImage";
import CardInfo from "../ui/CardInfo";
import FavouriteButton from "../ui/FavouriteButton";

const EventsCard = ({ event }) => {
    return (
        <div className="w-full h-auto flex flex-col sm:flex-row  mb-12 rounded gap-2">
            <div className="w-full sm:w-1/3 h-full  flex justify-end">
                <CardImage />
            </div>
            <div className="flex-1 h-full sm:w-2/3">
                <CardInfo
                name={event.name}
                date={event.date}
                location={event.location}
                />
            </div>
        </div>
    );
};

export default EventsCard;
