import React from "react";
import NavElements from "../ui/NavElements";
import SearchBar from "./SearchBar";

const NavBar = () => {
    return (
        <div className="bg-blue-100 w-full h-content p-4 flex flex-col gap-5">
            <NavElements />
            <SearchBar />
        </div>
    );
};

export default NavBar;
