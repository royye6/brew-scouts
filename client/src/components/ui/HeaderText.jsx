import React from "react";

const HeaderText = ({ location = "your vicinity" }) => {
    return <h1 className="text-slate-700">Pop up shop events in {location}</h1>;
};

export default HeaderText;
