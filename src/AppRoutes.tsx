import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout"
import HomePage from "./pages/HomePage"
import AuthCallbackPage from "./pages/AuthCallbackPage"
import UserProfilePage from "./pages/UserProfilePage"
import ProtectedRoute from "./ProtectedRoute"
import ProtectedRoutes from "./auth/ProtectedRoute"
import ManageRestaurantPage from "./pages/ManageRestaurantPage"

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
            <Route element={<ProtectedRoutes />} >
                <Route path="/manage-restaurant" element={<Layout><ManageRestaurantPage /></Layout>}>
                </Route>
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}