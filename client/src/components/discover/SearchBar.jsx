import React from "react";
import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

const SearchBar = ({ searchValue }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const isMedium = useMediaQuery({ query: "min-width: 768px" });

    return (
        <div className="px-3 flex items-center justify-center">
            <div className="flex items-center px-1 bg-gray-100 shadow rounded-full justify-between md:w-1/2">
                <div className="flex p-2 py-2 space-x-2 items-center justify-start w-5/6">
                    <AiOutlineSearch />
                    <input
                        type="search"
                        name="searchInput"
                        placeholder="Search..."
                        className="bg-gray-100 w-full focus:outline-none px-1"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                    />
                </div>
                <button className="w-9 h-9 flex items-center justify-center rounded-full bg-yellow-700 hover:bg-yellow-600 shadow-md">
                    <MdSearch className="text-white text-2xl" />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
