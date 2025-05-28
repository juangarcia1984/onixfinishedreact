import React from 'react'
import { useAuth } from '../../context/Authcontext';
import { Navigate, Outlet } from 'react-router-dom';

export default function Rolesroutes({ allowedroles }) {
  let { user, loading } = useAuth();
  if (loading) {
    return <Loadingspiner />;
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (!allowedroles.includes(user.rol)) {
    return <Navigate to="/" replace />
  }
  return <Outlet />
}
