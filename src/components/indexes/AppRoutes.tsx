import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import App from "../../App";
import LoggedInRoute from "../access/LoggedInRoute";
import DisconnectedRoute from "../access/DisconnectedRoute";
import NotFoundPage from "../../pages/NotFoundPage";
import LandingPage from "../../pages/LandingPage";
import Homepage from "../../pages/HomePage";

const AppRoutes: React.FC = () => {

    const UnprotectedPages = (
        <>
            <Route index element={<LandingPage />} />
        </>
    )
    const RestrictedAccessPages = (
        <>
            <Route path="accueil" element={<Homepage />} />
        </>
    )

    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route
                    path="/"
                    element={
                        <DisconnectedRoute>
                            <Outlet />
                        </DisconnectedRoute>
                    }
                >
                    {UnprotectedPages}
                </Route>
                <Route
                    path="/"
                    element={
                        <LoggedInRoute>
                            <Outlet />
                        </LoggedInRoute>
                    }
                >
                    {RestrictedAccessPages}
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes