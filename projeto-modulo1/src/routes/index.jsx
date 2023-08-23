import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../pages/login"
import { NotFound404 } from '../pages/404'
import { DrugStoreSubscription } from "../pages/drugStoreSubscription"
import { MapPage } from "../pages/mapPage"

function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="*" element={<NotFound404 />} />
            <Route path="/DrugsSubs" element={<NotFound404 />} />
            <Route path="/DrugsList" element={<NotFound404 />} />
            <Route path="/DrugStoresSubs" element={<DrugStoreSubscription />} />
            <Route path="/DrugStoresMap" element={<MapPage />} />
        </Routes>
    )
}

export { RoutesApp }