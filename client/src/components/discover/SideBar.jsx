import React from "react";
import SideBarMenu from "../ui/SideBarMenu";

const SideBar = () => {
    return (
        <div className="flex-wrap">
            <h2 className="text-xl  mb-5">Dashboard</h2>
            <SideBarMenu />
        </div>
    );
};

export default SideBar;
