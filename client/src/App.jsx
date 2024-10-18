import { useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import SignUp from "./pages/auth/Sign-Up";
import SignIn from "./pages/auth/Sign-In";
import Discover from "./pages/Discover";
import Dashboard from "./pages/Dashboard";
import PopUp from "./pages/Pop-Up";
import useStore from "./store/index.mjs";


const RootLayout = () => {
    const user = useStore((state) => state);
    // For debugging
    console.log(user)

    return !user ? (
      <Navigate to="sign-in" replace={true} />
    ) : (
      <>
      {/* <Navbar /> */}
      <div>
        <Outlet />
      </div>
      </>
    )
};

function App() {
    const [count, setCount] = useState(0);

    return (
        <main>
            <div className="w-full min-h-screen ">
                <Routes>
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route element={<RootLayout />}>
                        <Route path="/" element={<Discover />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/pop-up" element={<PopUp />} />
                    </Route>
                </Routes>
            </div>
        </main>
    );
}

export default App;
