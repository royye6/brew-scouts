import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../../store/index.mjs";
import logo from "../../assets/images/logo/brewscouts_logo.png";
import { useEffect } from "react";
import { toast } from "sonner";

const NavElements = () => {
    const { signOut } = useStore((state) => state);
    const navigate = useNavigate();

    const handleSignOut = () => {
        try {
            signOut();
            navigate("/sign-in");
            toast.success("Signed out successfully");
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message || error.message);
        }
    };

    useEffect(() => {
        handleSignOut;
    }, [handleSignOut]);

    return (
        <div className="flex justify-between items-center w-full ">
            <div className="w-content h-content flex-none">
                <Link to="/">
                    <img src={logo} alt="" width="200" />
                </Link>
            </div>
            <div className="font-serif flex justify-center items-center">
                <Link
                    to="#"
                    onClick={handleSignOut}
                    className="hover:text-orange-700"
                >
                    Sign Out
                </Link>
            </div>
        </div>
    );
};

export default NavElements;
