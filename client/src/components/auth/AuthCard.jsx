import React from "react";

const AuthCard = ({ children }) => {
    return (
        <>
            <div className="bg-white dark:bg-gray-900">
                <div className="flex justify-center h-screen">
                    <div
                        className="hidden bg-cover lg:block lg:w-2/3"
                        style={{
                            backgroundImage:
                                "url(./src/assets/images/card/cardimage2.jpg)",
                        }} // Corrected style
                    >
                        <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                            <div>
                                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                                    Welcome back!
                                </h2>

                                <p className="max-w-xl mt-3 text-gray-300">
                                    We're thrilled to see you again. Dive right
                                    in and explore the latest updates, events,
                                    and features tailored just for you. Your
                                    journey continues here, and we're excited to
                                    help you make the most of your experience!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full lg:w-2/6">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthCard;
