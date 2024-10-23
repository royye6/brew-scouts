import { useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import Discover from "./pages/Discover";
import Dashboard from "./pages/Dashboard";
import PopUp from "./pages/Pop-Up";
import useStore from "./store/index.mjs";
import { Toaster, toast } from "sonner";

const RootLayout = () => {
    const user = useStore((state) => state.user);
    // For debugging
    console.log(user);

    return !user ? (
        <Navigate to="/sign-in" replace={true} />
    ) : (
        <>
            {/* <Navbar /> */}
            <div className="min-h-[cal[h-screen-100px]">
                <Outlet />
            </div>
        </>
    );
};

function App() {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     document.documentElement.classList.remove("dark");
    // }, []);

    return (
        <main>
            <div className="w-full min-h-screen bg-white">
                <Routes>
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route element={<RootLayout />}>
                        <Route path="/" element={<Discover />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/pop-up" element={<PopUp />} />
                    </Route>
                </Routes>
                <Toaster position="top-right" richColors />
            </div>
        </main>
    );
}

export default App;
