import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

interface ProtectedRouteProps {
    element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
