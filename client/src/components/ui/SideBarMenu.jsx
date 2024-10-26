import React, { useEffect } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { useState } from "react";
import useStore from "../../store/index.mjs";
import { toast } from "sonner";
import api from "../../utils/apiCall";
import { BiLoader } from "react-icons/bi";
import { MdError } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";

const SideBarMenu = () => {
    const user = useStore((state) => state.user);
    const [isToggle, setIsToggle] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [favourites, setFavourites] = useState([]);
    const [error, setError] = useState(null);

    const userToken = user.token;

    if (!userToken) {
        console.log("Error getting user token");
    }

    const fetchData = async (userId) => {
        try {
            setIsLoading(true);
            const response = await api.get(`/favourites/`, {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                },
            });

            setFavourites(response.data.favourites);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleToggle = () => {
        setIsToggle((prev) => !prev);
        if (!isToggle) {
            fetchData();
        }
    };

    const handleRemoveFavourite = async (favouriteId) => {
        try {
            setIsLoading(true)
            const response = await api.delete(`/favourites/${favouriteId}`, {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                },
            });

            console.log(response.data);

            fetchData()

        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="bg-white">
            <button
                className="pl-2  mb-5 flex items-center gap-3 outline-none"
                onClick={handleToggle}
            >
                Favourites
                {!isToggle ? (
                    <AiOutlineCaretDown className="text-sm" />
                ) : (
                    <AiOutlineCaretUp className="text-sm" />
                )}
                {isLoading ? (
                    <BiLoader className="text-2xl font-semibold text-orange-700 animate-spin ml-3" />
                ) : (
                    ""
                )}
                {error && <AiFillCloseCircle />}
            </button>

            {isToggle && (
                <ul className="space-y-4">
                    {favourites.map((item, index) => (
                        <li
                            key={index}
                            className="flex gap-1 justify-between items-center"
                        >
                            <a href="">
                                <p className="truncate-32 text-slate-700 hover:text-orange-700">
                                    {item.event_name}
                                </p>
                            </a>
                            <button onClick={() => handleRemoveFavourite(item.id)} className="outline-none">
                                <AiFillCloseCircle className="text-md text-red-600 outline-none" />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SideBarMenu;

// const fetchData = async (userId) => {
//     try {
//         const favourites = await api.get(`/favourites/`, {
//             headers: {
//                 Authorization: `Bearer ${userToken}`,
//             },
//         });

//         // console.log(`message: "success", data: ${favourites.data}`)

//         const favouritesList = favourites.data.favourites;
//         console.log("Favourites List:", favouritesList);

//         favouritesList.forEach((favourite) => {
//             console.log(
//                 `Favourite ID: ${favourite.id}, Event Name: ${favourite.event_name}`
//             );
//         });
//     } catch (error) {
//         console.log(error);
//         toast.error(error?.response?.data?.message || error.message);
//     }
// };
