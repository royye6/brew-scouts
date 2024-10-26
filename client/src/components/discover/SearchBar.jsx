import React from "react";
import { useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import useStore from "../../store/index.mjs";
import api from "../../utils/apiCall";
import { BiLoader } from "react-icons/bi";
import CardInfo from "../ui/CardInfo";

import { useEvents } from "../../context/EventsContext";

const SearchBar = () => {
    const user = useStore((state) => state.user);
    const userToken = user.token;

    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");

    const isMedium = useMediaQuery({ query: "min-width: 768px" });

    const [result, setResult] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const { setEvents } = useEvents();

    const fetchData = async (location, search) => {
        try {
            setIsLoading(true);
            const response = await api.get(`/events`, {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                },
                params: {
                    location,
                    search,
                },
            });

            console.log(response.data.events);
            setEvents(response.data.events);

            result.forEach((item) => {
                <CardInfo
                    name={item.name}
                    date={item.date}
                    location={item.location}
                />;
            });
        } catch (err) {
            console.log(err);
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLocationChange = (event) => {
        const newLocation = event.target.value;
        setLocation(newLocation);
        // fetchData(newLocation, search);
    };

    const handleSearchChange = (event) => {
        const newSearch = event.target.value;
        setSearch(newSearch);
        // fetchData(location, newSearch);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`from handleSubmit: ${location}, ${search}`);
        fetchData(location, search);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="px-3 flex items-center justify-center">
            <form className="flex items-center px-1 bg-gray-100 shadow rounded-full justify-between md:w-1/2">
                <div className="flex p-2 py-2 space-x-2 items-center justify-start w-5/6">
                    <AiOutlineSearch />
                    <input
                        type="search"
                        name="search"
                        placeholder="Search..."
                        className="bg-gray-100 w-1/2 focus:outline-none px-1 outline-none"
                        value={search}
                        onChange={handleSearchChange}
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Location eg. Cape Town"
                        className="bg-gray-100 w-1/2 focus:outline-none px-1 ml-5 pl-2 border-l-slate-900 border-l border-l-0.5 outline-none"
                        value={location}
                        onChange={handleLocationChange}
                    />
                </div>
                {isLoading ? (
                    <BiLoader className="text-2xl font-semibold text-orange-700 animate-spin ml-3" />
                ) : (
                    ""
                )}
                <button
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-yellow-700 hover:bg-yellow-600 shadow-md"
                    onClick={handleSubmit}
                    type="submit"
                >
                    <MdSearch className="text-white text-2xl" />
                </button>
            </form>

            <div>
                {result.map((item) => {
                    <CardInfo
                        key={item.id}
                        name={item.name}
                        date={item.date}
                        location={item.location}
                    />;
                })}
            </div>
        </div>
    );
};

export default SearchBar;
