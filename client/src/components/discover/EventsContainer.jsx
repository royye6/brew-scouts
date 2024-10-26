import React from "react";
import EventsCard from "./EventsCard";
import { useEvents } from "../../context/EventsContext";


const EventsContainer = () => {
    const { events } = useEvents();

    return (
        <section className="h-content flex-grow p-4 flex flex-col justify-center mt-2 overflow-hidden">
            {events.map((event) => {
                <EventsCard key={event.id} event={event}/>;
            })}
        </section>
    );
};

export default EventsContainer;


// <section className="overflow-y-auto overflow-x-hidden h-screen flex-grow p-4 flex flex-col justify-center mt-2 overflow-hidden"></section>