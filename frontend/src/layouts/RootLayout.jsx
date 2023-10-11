import { useLocation, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



function RootLayout() {

    // const location = useLocation()

    return (
        <div className="root-layout">

            {/* <main><Outlet /></main> */}
            <Outlet />

            <Footer />
        </div>
    )
}

export default RootLayout;