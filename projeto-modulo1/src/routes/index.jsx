import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../pages/login"
import { NotFound404 } from '../pages/404'
import { DrugStoreSubscription } from "../pages/drugStoreSubscription"
import { MapPage } from "../pages/mapPage"
import { DrugsSubscription } from "../pages/drugsSubscription"
import { DrugsListPage } from '../pages/drugsList'

function RoutesApp() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFound404 />} />
            <Route path="/DrugsSubs" element={<DrugsSubscription />} />
            <Route path="/DrugsList" element={<DrugsListPage />} />
            <Route path="/DrugStoresSubs" element={<DrugStoreSubscription />} />
            <Route path="/DrugStoresMap" element={<MapPage />} />
        </Routes>
    )
}

export { RoutesApp }