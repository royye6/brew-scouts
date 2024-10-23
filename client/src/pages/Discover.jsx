import React from "react";
import NavBar from "../components/discover/NavBar";
import SearchBar from "../components/discover/SearchBar";
import Banner from "../components/discover/Banner";
import HeaderTitle from "../components/discover/HeaderArea";
import EventsContainer from "../components/discover/EventsContainer";

export const Discover = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <HeaderTitle />
            <EventsContainer />
        </div>
    );
};

export default Discover;
