import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../pages/login"
import { DrugStoreSubscription } from "../pages/drugStoreSubscription"

function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/DrugSubs" element={<DrugStoreSubscription />} />
        </Routes>
    )
}

export { RoutesApp }