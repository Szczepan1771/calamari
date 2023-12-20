import {
    Route,
    Routes
} from "react-router-dom";
import {ALL_FAVORITE_PATH, MY_SPECIALIST_PATH} from "./utils/routes";
import React from "react";
import {AllFavorite} from "./views/AllFavorite";
import {navigationConfig} from "./utils";
import {Navigation} from "./components/molecules/Navigation";
import {MySpecialist} from "./views/MySpecialist";

export const App = () => {
    return (
        <main>
            <Navigation config={navigationConfig}/>
            <Routes>
                <Route path={ALL_FAVORITE_PATH} element={<AllFavorite/>}/>
                <Route path={MY_SPECIALIST_PATH} element={<MySpecialist/>}/>
            </Routes>
        </main>
    )
}

