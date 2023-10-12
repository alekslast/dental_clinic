import { Outlet, useLocation } from "react-router-dom";

import SectionNavigation from "../components/SectionNavigation";


export default function SectionLayout() {

    const userLocation = useLocation().pathname

    return (
        <div className="section-layout">
            <SectionNavigation path={userLocation} />

            <main><Outlet /></main>
        </div>
    )
}
