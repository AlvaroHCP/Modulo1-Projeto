import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../pages/Login"
import { NotFound404 } from '../pages/404'
import { DrugStoreSubscription } from "../pages/DrugStoreSubscription"
import { MapPage } from "../pages/MapPage"
import { DrugsSubscription } from "../pages/DrugsSubscription"
import { DrugsListPage } from '../pages/DrugsList'

function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/*" element={<NotFound404 />} />
            <Route path="/DrugsSubs/" element={<DrugsSubscription />} />
            <Route path="/DrugsList/" element={<DrugsListPage />} />
            <Route path="/DrugStoresSubs/" element={<DrugStoreSubscription />} />
            <Route path="/DrugStoresMap/" element={<MapPage />} />
        </Routes>
    )
}

export { RoutesApp }