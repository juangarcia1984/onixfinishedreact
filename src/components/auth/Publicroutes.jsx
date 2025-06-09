import React from 'react'
import { useAuth } from '../../context/Authcontext';
import { Navigate, Outlet } from 'react-router-dom';

export default function Publicroutes() {
  let {user, loading } = useAuth();
  if (loading) {
    return <Loadingspiner />;
  }
  if (user) {
   let redirectPath = user.rol === 'admin'
      ? '/dashboard'
      : user.rol === 'user'
        ? '/'
        : '/login';
    return <Navigate to={redirectPath} replace />
  }
     
  return <Outlet />
}
