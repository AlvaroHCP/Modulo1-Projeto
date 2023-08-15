import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../pages/login"

function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
        </Routes>
    )
}

export { RoutesApp }