import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout"
import HomePage from "./pages/HomePage"
import AuthCallbackPage from "./pages/AuthCallbackPage"
import UserProfilePage from "./pages/UserProfilePage"
import ProtectedRoute from "./ProtectedRoute"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout showHero ><HomePage /></Layout>} />
            <Route path="/auth-callback" element={<AuthCallbackPage></AuthCallbackPage>} />
            <Route
                path="/user-profile"
                element={
                    <ProtectedRoute
                        element={<Layout><UserProfilePage /></Layout>}
                    />
                }
            />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}